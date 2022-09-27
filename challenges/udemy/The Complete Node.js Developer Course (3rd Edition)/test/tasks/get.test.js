//...
test("Get tasks for userOne", async () => {
	const res = await request(app)
		.get("/tasks")
		.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
		.expect(200)
	expect(res.body.length).toBe(2)
})