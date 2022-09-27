const socket = io()
socket.on("getMsg", console.log)
const sendMsg = (msg) => socket.emit(msg)
const input = document.querySelector("input")
document.querySelector("form").addEventListener("submit", e => {
	e.preventDefault()
	sendMsg(input.value)
})