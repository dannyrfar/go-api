package main

import (
	"net/http"

	"github.com/dannyrfar/go-api/handlers"
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

func NewRouter() *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	for _, route := range routes {
		var handler http.Handler
		handler = route.HandlerFunc
		r.Method(route.Method, route.Pattern, handler)
	}
	r.NotFound(handlers.Handle404)
	return r
}
