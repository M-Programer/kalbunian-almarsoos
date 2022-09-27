//...
app.delete("/tasks/:id", (req, res) => {
	try {
		const task = await mongoose.findByIdAndDelete(req.params.id)
		if (!task) return res.status(404).send()
		res.send(task)
	} catch (err) {
		res.status(500).send(err)
	}
})
//...