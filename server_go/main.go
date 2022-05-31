package main

import (
    "fmt"
    "log"
    "net/http"

    "github.com/mingi3442/soundChain/db"
    "go.mongodb.org/mongo-driver/bson"
    // "strconv"
    // "github.com/gorilla/mux"
)

var port string

type Trainer struct {
    GoogleID string
    Name     string
    Email    string
}

func main() {
    port = fmt.Sprintf(":%d", 8080)
    // router := mux.NewRouter()
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprint(w, r)
    })
    // db.ConnectDB()
    fmt.Printf("Listening on http://localhost%s\n", port)
    log.Fatal(http.ListenAndServe(port, nil))
    CreateUser("tset", "tester", "test@naver.com")

}

func CreateUser(googleID, name, email string) string {
    // DB 접속
    client, ctx, cancel := db.ConnectDB()

    // 함수 종료 뒤 연결을 끊어지도록 설정
    defer client.Disconnect(ctx)
    defer cancel()

    // 필터 값 정의
    filter := bson.M{"googleId": googleID, "name": name, "email": email}

    // DB에 값이 존재하는지 확인
    num, err := db.GetCollection(client, "soundChain", "User").CountDocuments(ctx, filter)
    if err != nil {
        log.Fatal(err)
    }
    // 새로 넣을 데이터 정의
    newData := Trainer{
        GoogleID: googleID,
        Name:     name,
        Email:    email,
    }
    // fmt.Println(num)
    // DB값이 존재하지 않으면
    if num == 0 {
        _, err := db.GetCollection(client, "soundChain", "User").InsertOne(ctx, newData)

        if err != nil {
            log.Fatal(err)
        }
    }

    return "create!"
}
