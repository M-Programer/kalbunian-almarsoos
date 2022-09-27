//...
app.patch("/tasks/:id", (req, res) => {
	const updates = Object.keys(res.body)
	const allowed = ["text", "done"]
	if(!updates.every(update => allowed.includes(update))) return res.status(400).send()
	try {
		const task = await Task.findByIdAndUpdate(req.params.id, res.body, {
			new: true,
			runValidators: true,
		})
		if (!task) res.status(404).send()
		res.send(task)
	} catch (err) {
		res.status(500).send()
	}
})
//...