//...
io.on("connection", (socket) => {
	socket.emit("getMsg", "Welcome!")
	socket.on("sendMsg", (msg) => io.emit("getMsg", msg))
})
//...