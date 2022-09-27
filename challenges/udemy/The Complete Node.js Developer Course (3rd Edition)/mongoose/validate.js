const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/tasks", {
	useNewUrlParser: true,
	useCreateIndex: true,
})

// challenge 1
const User = mongoose.model("User", {
	password: {
		type: String,
		minlength: 7,
		validate(password) {
			if (password.toLowerCase().includes("password")) throw new Error("passwords includes word \"password\" is invalid")
		},
		trim: true,
		required: true,
	}
})

// challenge 2
const Todo = mongoose.model("Todo", {
	text: {
		type: String,
		required: true,
		trim: true,
	},
	done: {
		type: Boolean,
		default: false,
	}
})