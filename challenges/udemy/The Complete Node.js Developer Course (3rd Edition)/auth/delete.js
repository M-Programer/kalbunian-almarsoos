//...
router.delete("/tasks/:id", auth, (req, res) => {
	try {
		const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
		if (!task) return res.status(404).send()
		res.send(task)
	} catch (err) {
		res.status(500).send()
	}
})
//...