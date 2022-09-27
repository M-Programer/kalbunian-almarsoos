const express = require('express')
const app = express()

app.get("/about", (req, res) => {
	res.send("about")
})
app.get("/weather", (req, res) => {
	res.send("weather")
})