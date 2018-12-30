package main

import (
	"net/http"

	"github.com/dannyrfar/go-api/handlers"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

var routes = Routes{
	Route{
		"Home",
		"GET",
		"/",
		handlers.Index,
	},
	Route{
		"List Reminders",
		"GET",
		"/reminders",
		handlers.GetReminderListHandler,
	},
	Route{
		"Add Reminder",
		"POST",
		"/reminders",
		handlers.AddReminderHandler,
	},
	Route{
		"Index",
		"DELETE",
		"/reminders/{id}",
		handlers.DeleteReminderHandler,
	},
	Route{
		"Index",
		"PUT",
		"/reminders",
		handlers.Index,
	},
}
