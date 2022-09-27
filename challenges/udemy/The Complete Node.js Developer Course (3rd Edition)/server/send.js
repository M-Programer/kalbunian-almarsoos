const app = require("express")()
app.get("/about", (_, res) => res.send("<h1>About</h1>"))
app.get("/weather", (_, res) => res.send({
	forecast: "",
	location: "",
}))