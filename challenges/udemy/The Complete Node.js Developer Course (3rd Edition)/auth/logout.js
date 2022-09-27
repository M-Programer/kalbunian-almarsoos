//...
router.post("/users/logoutAll", auth, (req, res) => {
	try {
		req.user.tokens = []
		await user.save()
		res.send()
	} catch (err) {
		res.status(500).send(err)
	}
})
//...