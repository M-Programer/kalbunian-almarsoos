const socket = io()
socket.on("getMsg", console.log)
const sendMsg = (msg) => socket.emit(msg)
const input = document.querySelector("input")
document.querySelector("form").addEventListener("submit", e => {
	e.preventDefault()
	sendMsg(input.value)
})
document.querySelector("#send-location").addEventListener("click", () => {
	if (!navigator.geolocation) return alert("Your browser doesn't support geolocation")
	navigator.geolocation.getCurrentPosition((data) =>
		socket.emit(
			"sendLocation",
			{
				latitude: data.coords.latitude,
				longitude: data.coords.longitude,
			}
		)
	)
})