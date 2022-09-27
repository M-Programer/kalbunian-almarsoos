//...
router.post("/users", (req, res) => {
	try {
		
		const user = new User(res.body)
		const token = user.generateAuthToken()
		res.status(201).send({user, token})
	} catch (err) {
		res.satus(400).send(err)
	}
})
//...