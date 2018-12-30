package main

import (
	"net/http"

	"github.com/dannyrfar/go-api/handlers"
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/sirupsen/logrus"
)

func NewRouter() *chi.Mux {

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
	r.NotFound(handlers.Handle404)
	return r
}
