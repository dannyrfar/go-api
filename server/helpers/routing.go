package helpers

import (
	"net/http"
	"path"
	"path/filepath"

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

// NewRouter returns a new router with the routes provided
func NewRouter(routes Routes) *chi.Mux {
	r := chi.NewRouter()
	for _, route := range routes {
		var handler http.Handler
		handler = route.HandlerFunc
		r.Method(route.Method, route.Pattern, handler)
	}
	return r
}

// AttachMiddleware helper to attach middleware to router
func AttachMiddleware(r *chi.Mux) {
	logger := logrus.New()
	logger.Formatter = &logrus.JSONFormatter{
		DisableTimestamp: true,
	}
	r.Use(NewStructuredLogger(logger))
	//r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.NotFound(handle404)
	//r.Use(AuthRequired)
	r.Use(CORSMiddleware)
}

func handle404(w http.ResponseWriter, r *http.Request) {
	dir, file := path.Split(r.RequestURI)
	ext := filepath.Ext(file)
	if file == "" || ext == "" {
		http.ServeFile(w, r, "./assets/index.html")
	} else {
		http.ServeFile(w, r, "./assets/"+path.Join(dir, file))
	}
}
