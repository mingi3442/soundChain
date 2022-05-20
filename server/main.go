package main

import (
    "fmt"
    "github.com/mingi3442/soundChain/db"
    "log"
    "net/http"
    // "strconv"
    // "github.com/gorilla/mux"
)

var port string

func main() {
    port = fmt.Sprintf(":%d", 8000)
    // router := mux.NewRouter()
    db.ConnectDB()
    fmt.Printf("Listening on http://localhost%s\n", port)
    log.Fatal(http.ListenAndServe(port, nil))
}
