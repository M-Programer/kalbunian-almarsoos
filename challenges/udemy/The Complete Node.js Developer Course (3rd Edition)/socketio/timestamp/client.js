//...
const $msgs = document.querySelector("#msgs")
const $locationTemplate = document.querySelector("#lt")
//...
socket.on("getLocation", (location) => {
	const date = moment().format('h:mm')
	const html = Mustache.render($locationTemplate, {
		location,
		date
	})
	$msgs.insertAdjacentHTML("beforeend", html)
})
//...