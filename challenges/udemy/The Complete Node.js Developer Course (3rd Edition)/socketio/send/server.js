// in the top of all changed functions
const user = getUser(socket.id)
// broadcasting
socket.broadcast.to(user.room).emit('message', generateMessage(`${user.username} has joined!`))
// io.send
io.to(user.room).emit('locationMessage', generateLocationMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
// challenge 2 solution
const generateMessage = (user, msg) => ({ msg, user: user.username, createdAt: moment().format("h:mm a") })