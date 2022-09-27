//...
test("login fail for nonexsiten user", async () => await request(app)
	.post("/users/login")
	.send({ name: "lkdfsjldkf", password: "dksfjlfjdldk" })
	.expect(400)
)
//...