package reminders

import (
	"context"
	"fmt"
	"log"
	"os"
	"sync"
	"time"

	"github.com/mongodb/mongo-go-driver/bson/primitive"

	"github.com/mongodb/mongo-go-driver/bson"
	"github.com/mongodb/mongo-go-driver/mongo"
)

var (
	mongoClient *mongo.Client
	mtx         sync.RWMutex
	once        sync.Once
)

type Reminder struct {
	ID       string `json:"id" bson:"_id"`
	Message  string `json:"message" bson:"message"`
	Complete bool   `json:"complete" bson:"complete"`
}

// ReminderRequest to handle incoming requests
type ReminderRequest struct {
	ID string `json:"id"`
}

func init() {
	once.Do(initialiseMongoClient)
}
func initialiseMongoClient() {
	client, err := mongo.NewClient(os.Getenv("MONGODB_URL"))
	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	mongoClient = client
}

func Get() []Reminder {
	var results []Reminder
	collection := mongoClient.Database("app").Collection("reminders")
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	count, _ := collection.Count(ctx, bson.D{{}})
	if count == 0 {
		return []Reminder{}
	}
	cur, err := collection.Find(ctx, bson.D{{}})
	if err != nil {
		log.Println(err)
	}
	defer cur.Close(ctx)
	for cur.Next(ctx) {
		var result bson.M
		err := cur.Decode(&result)
		if err != nil {
			log.Println(err)
		}
		results = append(results, Reminder{
			ID:       string(result["_id"].(primitive.ObjectID).Hex()),
			Message:  result["message"].(string),
			Complete: result["complete"].(bool),
		})
	}
	if err := cur.Err(); err != nil {
		log.Println(err)
	}
	return results
}

func Add(message string) string {
	var id primitive.ObjectID
	if message == "" {
		return ""
	}
	mtx.Lock()
	if !reminderExists(message) {
		coll := mongoClient.Database("app").Collection("reminders")
		res, err := coll.InsertOne(
			context.Background(),
			bson.D{{"message", message}, {"complete", false}},
		)
		if err != nil {
			log.Println(err)
		}
		id = res.InsertedID.(primitive.ObjectID)
	}
	mtx.Unlock()
	return string(id.Hex())
}
func Delete(id string) error {
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	objectId, _ := primitive.ObjectIDFromHex(id)
	_ = mongoClient.Database("app").Collection("reminders").FindOneAndDelete(ctx, bson.D{{"_id", objectId}})
	return nil
}
func Complete(id string) error {
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	var result bson.M
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}
	err = mongoClient.Database("app").Collection("reminders").FindOne(ctx, bson.D{{"_id", objectId}}).Decode(&result)
	if err != nil {
		return err
	}
	toggleState(result["message"].(string), !result["complete"].(bool))
	return nil
}
func reminderExists(message string) bool {
	var result bson.M
	exists := false
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	err := mongoClient.Database("app").Collection("reminders").FindOne(ctx, bson.D{{"message", message}}).Decode(&result)
	if err != nil {
		log.Println(err)
	}
	if result["message"] == message {
		exists = true
	}
	return exists
}
func toggleState(message string, complete bool) {
	ctx, _ := context.WithTimeout(context.Background(), 30*time.Second)
	_, err := mongoClient.Database("app").Collection("reminders").UpdateOne(ctx, bson.D{{"message", message}}, bson.D{
		{"$set", bson.D{
			{"complete", complete},
		}},
		{"$currentDate", bson.D{
			{"lastModified", true},
		}},
	})
	if err != nil {
		log.Println(err)
	}
}
func main() {
	Complete("5c3171afafd021bf81e1a99f")
	results := Get()
	fmt.Println(results)
}
