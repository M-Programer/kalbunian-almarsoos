//...
app.get("/tasks", (req, res) => {
	mongoose.find({})
		.then(tasks => {
			if (!tasks) return res.status(404).send()
			res.send(tasks)
		})
		.catch(err => res.status(500).send(err))
})
app.get("/tasks/:id", (req, res) => {
	mongoose.findById(req.params.id)
		.then(task => {
			if (!task) return res.status(404).send()
			res.send(task)
		})
		.catch(err => res.status(500).send(err))
})
//...