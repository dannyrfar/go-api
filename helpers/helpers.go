package helpers

import (
	"fmt"
	"net/http"
	"path"
	"path/filepath"
	"reflect"
	"runtime"
	"time"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/sirupsen/logrus"
)

// Route type definition
type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

// Routes list of Route
type Routes []Route

// NewRouter returns a new router
func NewRouter(routes Routes) *chi.Mux {

	logger := logrus.New()
	logger.Formatter = &logrus.JSONFormatter{
		DisableTimestamp: true,
	}
	r := chi.NewRouter()
	r.Use(NewStructuredLogger(logger))
	r.Use(middleware.Recoverer)
	for _, route := range routes {
		var handler http.Handler
		handler = route.HandlerFunc
		r.Method(route.Method, route.Pattern, handler)
	}
	r.NotFound(Handle404)
	r.MethodNotAllowed(Handle404)
	return r
}

func Handle404(w http.ResponseWriter, r *http.Request) {
	dir, file := path.Split(r.RequestURI)
	ext := filepath.Ext(file)
	if file == "" || ext == "" {
		http.ServeFile(w, r, "./ui/dist/ui/index.html")
	} else {
		http.ServeFile(w, r, "./ui/dist/ui/"+path.Join(dir, file))
	}
}

func GetFunctionName(i interface{}) string {
	return runtime.FuncForPC(reflect.ValueOf(i).Pointer()).Name()
}

func NewStructuredLogger(logger *logrus.Logger) func(next http.Handler) http.Handler {
	return middleware.RequestLogger(&StructuredLogger{logger})
}

type StructuredLogger struct {
	Logger *logrus.Logger
}

func (l *StructuredLogger) NewLogEntry(r *http.Request) middleware.LogEntry {
	entry := &StructuredLoggerEntry{Logger: logrus.NewEntry(l.Logger)}
	logFields := logrus.Fields{}
	logFields["ts"] = time.Now().UTC().Format(time.RFC1123)
	if reqID := middleware.GetReqID(r.Context()); reqID != "" {
		logFields["req_id"] = reqID
	}
	scheme := "http"
	if r.TLS != nil {
		scheme = "https"
	}
	logFields["http_scheme"] = scheme
	logFields["http_proto"] = r.Proto
	logFields["http_method"] = r.Method
	logFields["remote_addr"] = r.RemoteAddr
	logFields["user_agent"] = r.UserAgent()
	logFields["uri"] = fmt.Sprintf("%s://%s%s", scheme, r.Host, r.RequestURI)
	entry.Logger = entry.Logger.WithFields(logFields)
	entry.Logger.Infoln("request started")
	return entry
}

type StructuredLoggerEntry struct {
	Logger logrus.FieldLogger
}

func (l *StructuredLoggerEntry) Write(status, bytes int, elapsed time.Duration) {
	l.Logger = l.Logger.WithFields(logrus.Fields{
		"resp_status": status, "resp_bytes_length": bytes,
		"resp_elapsed_ms": float64(elapsed.Nanoseconds()) / 1000000.0,
	})
	l.Logger.Infoln("request complete")
}
func (l *StructuredLoggerEntry) Panic(v interface{}, stack []byte) {
	l.Logger = l.Logger.WithFields(logrus.Fields{
		"stack": string(stack),
		"panic": fmt.Sprintf("%+v", v),
	})
}

// Helper methods used by the application to get the request-scoped // logger entry and set additional fields between handlers. // // This is a useful pattern to use to set state on
//the entry as it  passes through the handler chain, which at any point can be logged // with a call to .Print(), .Info(), etc.
func GetLogEntry(r *http.Request) logrus.FieldLogger {
	entry := middleware.GetLogEntry(r).(*StructuredLoggerEntry)
	return entry.Logger
}
func LogEntrySetField(r *http.Request, key string, value interface{}) {
	if entry, ok := r.Context().Value(middleware.LogEntryCtxKey).(*StructuredLoggerEntry); ok {
		entry.Logger = entry.Logger.WithField(key, value)
	}
}
func LogEntrySetFields(r *http.Request, fields map[string]interface{}) {
	if entry, ok := r.Context().Value(middleware.LogEntryCtxKey).(*StructuredLoggerEntry); ok {
		entry.Logger = entry.Logger.WithFields(fields)
	}
}
