package reminders

import (
	"errors"
	"sync"

	"github.com/rs/xid"
)

var (
	list []Reminder
	mtx  sync.RWMutex
	once sync.Once
)

func init() {
	once.Do(initialiseList)
}

// Start the in memory list
func initialiseList() {
	list = []Reminder{}
}

// Reminder data structure for a task with a description of what to do
type Reminder struct {
	ID       string `json:"id"`
	Message  string `json:"message"`
	Complete bool   `json:"complete"`
}

// ReminderRequest to handle incoming requests
type ReminderRequest struct {
	ID string `json:"id"`
}

// Get retrieves all elements from the Reminder list
func Get() []Reminder {
	return list
}

// Add will add a new Reminder based on a message
func Add(message string) string {
	t := newReminder(message)
	mtx.Lock()
	list = append(list, t)
	mtx.Unlock()
	return t.ID
}

// Delete will remove a Reminder from the Reminder list
func Delete(id string) error {
	location, err := findReminderLocation(id)
	if err != nil {
		return err
	}
	removeElementByLocation(location)
	return nil
}

// Complete will set the complete boolean to true, marking a Reminder as
// completed
func Complete(id string) error {
	location, err := findReminderLocation(id)
	if err != nil {
		return err
	}
	toggleReminderByLocation(location)
	return nil
}

func newReminder(msg string) Reminder {
	return Reminder{
		ID:       xid.New().String(),
		Message:  msg,
		Complete: false,
	}
}

func findReminderLocation(id string) (int, error) {
	mtx.RLock()
	defer mtx.RUnlock()
	for i, t := range list {
		if isMatchingID(t.ID, id) {
			return i, nil
		}
	}
	return 0, errors.New("could not find Reminder based on id")
}

func removeElementByLocation(i int) {
	mtx.Lock()
	list = append(list[:i], list[i+1:]...)
	mtx.Unlock()
}

func toggleReminderByLocation(location int) {
	mtx.Lock()
	value := !list[location].Complete
	list[location].Complete = value
	mtx.Unlock()
}

func isMatchingID(a string, b string) bool {
	return a == b
}
