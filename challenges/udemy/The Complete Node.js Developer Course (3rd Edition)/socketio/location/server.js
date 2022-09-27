//...
io.on("connection", (socket) => {
	socket.emit("getMsg", "Welcome!")
	socket.on("sendMsg", msg => io.emit("getMsg", msg))
	socket.on("sendLocation", data => socket.send(`Latitude: ${data.latitude} Longitude: ${data.longitude}`))
})
//...