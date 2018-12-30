package handlers

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"path"
	"path/filepath"

	"github.com/dannyrfar/go-api/reminders"
	"github.com/go-chi/chi"
)

// GetTodoListHandler returns all current todo items
func GetReminderListHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(reminders.Get())
}

func AddReminderHandler(w http.ResponseWriter, r *http.Request) {
	reminder, statusCode, err := convertHTTPBodyToTodo(r.Body)
	if err != nil {
		w.Header().Set("Status", string(statusCode))
		json.NewEncoder(w).Encode(err)
		return
	}
	w.Header().Set("Status", string(statusCode))
	json.NewEncoder(w).Encode(reminders.ReminderRequest{ID: reminders.Add(reminder.Message)})
}
func DeleteReminderHandler(w http.ResponseWriter, r *http.Request) {
	reminderID := chi.URLParam(r, "id")
	if err := reminders.Delete(reminderID); err != nil {
		w.Header().Set("Status", string(http.StatusInternalServerError))
		json.NewEncoder(w).Encode(err)
		return
	}
	w.Header().Set("Status", string(http.StatusOK))
	json.NewEncoder(w).Encode("")
}

func CompleteTodoHandler(w http.ResponseWriter, r *http.Request) {
	reminderItem, statusCode, err := convertHTTPBodyToTodo(r.Body)
	if err != nil {
		w.Header().Set("Status", string(statusCode))
		json.NewEncoder(w).Encode(err)
		return
	}
	if reminders.Complete(reminderItem.ID) != nil {
		w.Header().Set("Status", string(http.StatusInternalServerError))
		json.NewEncoder(w).Encode(err)
		return
	}
	w.Header().Set("Status", string(http.StatusOK))
	json.NewEncoder(w).Encode("")
}

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Welcome!")
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
func convertHTTPBodyToTodo(httpBody io.ReadCloser) (reminders.Reminder, int, error) {
	body, err := ioutil.ReadAll(httpBody)
	if err != nil {
		return reminders.Reminder{}, http.StatusInternalServerError, err
	}
	defer httpBody.Close()
	return convertJSONBodyToTodo(body)
}

func convertJSONBodyToTodo(jsonBody []byte) (reminders.Reminder, int, error) {
	var todoItem reminders.Reminder
	err := json.Unmarshal(jsonBody, &todoItem)
	if err != nil {
		return reminders.Reminder{}, http.StatusBadRequest, err
	}
	return todoItem, http.StatusOK, nil
}
