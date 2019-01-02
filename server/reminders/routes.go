package reminders

import (
	"github.com/dannyrfar/go-api/server/helpers"
)

// Defines the routes for the API
var routes = helpers.Routes{
	helpers.Route{
		"List Reminders",
		"GET",
		"/",
		GetReminderListHandler,
	},
	helpers.Route{
		"Add Reminder",
		"POST",
		"/",
		AddReminderHandler,
	},
	helpers.Route{
		"Delete Reminder",
		"DELETE",
		"/{id}",
		DeleteReminderHandler,
	},
	helpers.Route{
		"Complete Reminder",
		"PUT",
		"/",
		CompleteTodoHandler,
	},
}

// GetRoutes returns list of routes for microservice
func GetRoutes() helpers.Routes {
	return routes
}
