//...
test("update valid fields", async () => {
	await request(app)
		.patch("/users/me")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send({
			name: "Mahmoud"
		})
		.expect(200)
	expect(await User.findById(userOneId).name).toEqual("Mahmoud")
})

test("fail update invalid fields", async () => {
	await request(app)
		.patch("/users/me")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.send({
			location: "Egypt"
		})
		.expect(400)
})
//...