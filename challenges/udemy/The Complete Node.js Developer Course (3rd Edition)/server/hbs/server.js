//...
app.set("view engine", "hbs")
//...
app.get("/help", (req, res) => res.render("help", { title: "Help" }))