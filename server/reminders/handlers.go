package reminders

import (
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"

	"github.com/go-chi/chi"
)

// GetReminderListHandler returns all current todo items
func GetReminderListHandler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(Get())
}

// AddReminderHandler adds a reminder
func AddReminderHandler(w http.ResponseWriter, r *http.Request) {
	reminder, statusCode, err := convertHTTPBodyToTodo(r.Body)
	if err != nil {
		w.Header().Set("Status", string(statusCode))
		json.NewEncoder(w).Encode(err)
		return
	}
	w.Header().Set("Status", string(statusCode))
	json.NewEncoder(w).Encode(ReminderRequest{ID: Add(reminder.Message)})
}

// DeleteReminderHandler deletes a reminder
func DeleteReminderHandler(w http.ResponseWriter, r *http.Request) {
	reminderID := chi.URLParam(r, "id")
	if err := Delete(reminderID); err != nil {
		w.Header().Set("Status", string(http.StatusInternalServerError))
		json.NewEncoder(w).Encode(err)
		return
	}
	w.Header().Set("Status", string(http.StatusOK))
	json.NewEncoder(w).Encode("")
}

// CompleteTodoHandler sets status of a reminder to complete
func CompleteTodoHandler(w http.ResponseWriter, r *http.Request) {
	reminderItem, statusCode, err := convertHTTPBodyToTodo(r.Body)
	if err != nil {
		w.Header().Set("Status", string(statusCode))
		json.NewEncoder(w).Encode(err)
		return
	}
	if Complete(reminderItem.ID) != nil {
		w.Header().Set("Status", string(http.StatusInternalServerError))
		json.NewEncoder(w).Encode(err)
		return
	}
	w.Header().Set("Status", string(http.StatusOK))
	json.NewEncoder(w).Encode("")
}

func convertHTTPBodyToTodo(httpBody io.ReadCloser) (Reminder, int, error) {
	body, err := ioutil.ReadAll(httpBody)
	if err != nil {
		return Reminder{}, http.StatusInternalServerError, err
	}
	defer httpBody.Close()
	return convertJSONBodyToTodo(body)
}

func convertJSONBodyToTodo(jsonBody []byte) (Reminder, int, error) {
	var todoItem Reminder
	err := json.Unmarshal(jsonBody, &todoItem)
	if err != nil {
		return Reminder{}, http.StatusBadRequest, err
	}
	return todoItem, http.StatusOK, nil
}
