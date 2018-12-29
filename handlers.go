package main

import (
	"fmt"
	"net/http"
)

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Welcome!")
}

func Handle404(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Oops, this endpoint isn't defined!")
}
