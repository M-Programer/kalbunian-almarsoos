//...
test(/*...*/  async () => {
	const res = await request(app)
		.get("/users/me")
		.send()
		.expect(200)
	const user = await User.findById(userOneId)
	expect(res.body.token).toBe(user.tokens[1].token)
})

test(/*...*/  async () => {
	await request(app)
		.delete("/users/me")
		.send()
		.expect(200)
	const user = await User.findById(userOneId)
	expect(user).toBeNull()
})

//...