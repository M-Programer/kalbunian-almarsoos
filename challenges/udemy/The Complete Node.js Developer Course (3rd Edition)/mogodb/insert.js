const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const url = "mongodb://127.0.0.1:27017"
const dbName = "todos"
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
	if (err) return console.log("unable to connect")
	const db = client.db(dbName)
	db.collection("todolist").insertMany(
		[
			{
				text: "dkjflks",
				done: false,
			},
			{
				text: "hgfghjsg",
				done: true,
			},
			{
				text: "dfgsadf",
				done: false,
			},
		],
		(err, result) => {
			if (err) return console.log("Error!")
			console.log(result.ops)
		}
	)
})