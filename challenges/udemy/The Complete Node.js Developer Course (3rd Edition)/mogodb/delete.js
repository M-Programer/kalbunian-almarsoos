const { MongoClient } = require("mongodb")
MongoClient.connect("mongodb://127.0.0.1:27017", (err, client) => {
	if (err) return console.log(err)
	client.db("todos")
		.collection("todolist")
		.deleteOne({ text: "delete me for the video challenge!" })
		.then(console.log)
		.catch(console.log)
})