//...
const taskSchema = new mongoose.Shcema({
	//...
	timestamps: true,
})

Task = mongoose.model("Task", taskSchema)