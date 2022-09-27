//...
router.patch("/users/me", auth, async (req, res) => {
	const updates = Object.keys(req.body)
	const allowed = ["name", "email", "password", "age"]
	if (!updates.every(update => allowed.includes(update))) return res.send(400).send({error: "Invslid update!"})
	try {
		const user = req.user
		updates.forEach(update => user[update] = req.body[update])
		await user.save()
		res.send(user)
	} catch (err) {
		res.status(400).send(err)
	}
})
//...