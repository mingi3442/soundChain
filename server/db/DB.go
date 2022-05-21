package db

import (
    "context"
    "fmt"
    "log"
    // "os"

    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectDB() (client *mongo.Client, ctx context.Context, cancel context.CancelFunc) {
    // Set client options
    clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

    // Connect to MongoDB
    client, err := mongo.Connect(context.TODO(), clientOptions)

    if err != nil {
        log.Fatal(err)
    }

    // Check the connection
    err = client.Ping(context.TODO(), nil)

    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("Connected to MongoDB!")
    return client, ctx, cancel
}

func GetCollection(client *mongo.Client, dbName, colName string) *mongo.Collection {
    return client.Database(dbName).Collection(colName)
}
