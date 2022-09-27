const { MongoClient, ObjectId } = require("mongodb")
MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
	if (err) return console.log("Connecting Error")
	const db = client.db("todos")
	db.collection("todolist").updateMany({ done: false }, {
		$set: {
			done: true
		}
	}).then(data => console.log("Success! data:", data.modifiedCount)).catch(console.log)
})