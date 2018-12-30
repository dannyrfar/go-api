package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/dannyrfar/go-api/helpers"
	"github.com/dannyrfar/go-api/reminders"
	"github.com/go-chi/chi"
)

func main() {
	r := helpers.NewRouter(helpers.Routes{})
	r.Mount("/reminders", helpers.NewRouter(reminders.GetRoutes()))
	walkFunc := func(method string, route string, handler http.Handler, middlewares ...func(http.Handler) http.Handler) error {
		fmt.Printf("%s %s %s\n", method, route, helpers.GetFunctionName(handler))
		return nil
	}
	if err := chi.Walk(r, walkFunc); err != nil {
		fmt.Printf("Logging err: %s\n", err.Error())
	}
	log.Fatal(http.ListenAndServe(":3000", r))

}
