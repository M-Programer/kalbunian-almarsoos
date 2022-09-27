const { MongoClient, ObjectId } = require("mongodb")
const _id = new ObjectId("id")
MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
	if (err) return console.log("Connecting Error")
	const db = client.db("todos")
	db.collection("todolist").findOne({ _id }, (err, data) => {
		if (err) return console.log("Error finding data!")
		console.log(data)
	})
	db.collection("todolist").find({ done: false }).toArray((err, todos) => console.log(err ? "Error parsing data" : todos))
})