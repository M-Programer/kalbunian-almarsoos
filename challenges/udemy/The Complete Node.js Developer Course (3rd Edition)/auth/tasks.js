//...
router.get("/tasks", async (req, res) => {
	try {
		res.send(await Task.find({ owner: req.user._id }))
	} catch (err) {
		res.status(500).send()
	}
})
//...