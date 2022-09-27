const express = require("express")
const path = require("path")
const public = path.join(__dirname, "../public")
const port = process.env.PORT || 3000
const app = express()
express.use(express.static(public))

app.listen(port, () => console.log("server started at port " + port))