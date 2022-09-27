require("mongoose")
const Todo = require("./todo")

app.use(express.json())

app.post("/tasks", (req, res) => {
	const todo = new Todo(req.body)
	todo.save()
		.then(() => res.send(todo))
		.catch(err => res.status(400).send(err))
})