const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/tasks", {
	useNewUrlParser: true,
	useCreateIndex: true,
})

const Todo = mongoose.model("Todo", {
	text: {
		type: String
	},
	done: {
		type: Boolean
	}
})

const todo = new Todo({
	text: "Create todo model",
	done: true,
})

todo.save().then(() => console.log(me)).catch(error => console.log(error))