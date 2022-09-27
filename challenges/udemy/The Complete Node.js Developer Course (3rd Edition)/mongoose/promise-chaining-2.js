require("../src/db/mongoose")
const Task = require("../src/models/task")
Task.findByIdAndDelete("id")
	.then(task => {
		console.log(task)
		return Task.countDocuments({ completed: false })
	})
	.then(console.log)
	.catch(console.log)