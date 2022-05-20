package db

import (
    "context"
    "fmt"
    "log"
    // "os"

    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectDB() {
    // 몽고DB 연결
    // uri := os.Getenv("MONGODB_URI")
    // if uri == "" {
    //     log.Fatal("You must set your 'MONGODB_URI' environmental variable. See\n\t https://www.mongodb.com/docs/drivers/go/current/usage-examples/#environment-variable")
    // }
    clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/soundChain")
    client, err := mongo.Connect(context.TODO(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("몽고 DB에 연결했습니다!")
    uesrsCollection := client.Database("test").Collection("users")
    // 내용을 적을 부분
    cursor, err := uesrsCollection.Find(context.TODO(), bson.D{{}})
    // 만약 에러 처리가 귀찮을 땐... err를 _으로 쓰면 if 문으로 err 처리 안해도 된다.
    // cursor, _ := uesrsCollection.Find(context.TODO(), bson.D{{}})
    if err != nil {
        fmt.Println("에러!")
        fmt.Println(err)
    }
    for cursor.Next(context.TODO()) {
        var elem bson.M
        err := cursor.Decode(&elem)
        if err != nil {
            fmt.Println(err)
        }
        // find 결과 print
        fmt.Println(elem)
    }

    // 몽고DB 연결 끊기
    // uesrsCollection := client.Database("test").Collection("users")
    fmt.Println(uesrsCollection)

    // err = client.Disconnect(context.TODO())
    // if err != nil {
    //     log.Fatal(err)
    // }
    // fmt.Println("몽고DB 연결을 종료했습니다!")
}
