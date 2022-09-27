const mongoose = require("mongoose")
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

module.exports = Todo