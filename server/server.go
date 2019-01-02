package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/dannyrfar/go-api/server/helpers"
	"github.com/dannyrfar/go-api/server/reminders"
	"github.com/go-chi/chi"
)

// Main entrypoint to the server side application
func main() {
	// Create the router and attach middleware
	r := chi.NewRouter()
	helpers.AttachMiddleware(r)
	// Mount the reminders endpoint
	r.Mount("/reminders", helpers.NewRouter(reminders.GetRoutes()))
	// Walk the API and log all available endpoints
	walkFunc := func(method string, route string, handler http.Handler, middlewares ...func(http.Handler) http.Handler) error {
		fmt.Printf("%s %s %s\n", method, route, helpers.GetFunctionName(handler))
		return nil
	}
	if err := chi.Walk(r, walkFunc); err != nil {
		fmt.Printf("Logging err: %s\n", err.Error())
	}
	// Start the server on port 3000
	log.Fatal(http.ListenAndServe(":3000", r))
}
