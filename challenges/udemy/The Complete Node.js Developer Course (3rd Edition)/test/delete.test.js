//...
test("delete with auth", async () => await request(app)
	.delete("/users/me")
	.set("Authorization", `Bearer ${userOne.tokens[0].token}`)
	.send()
	.expect(200)
)
test("fail delete without auth", () => request(app)
	.delete("/users/me")
	.send()
	.expect(200)
)
//...