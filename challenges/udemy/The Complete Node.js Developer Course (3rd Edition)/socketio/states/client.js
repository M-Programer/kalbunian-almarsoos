//...
const $msgs = document.querySelector("#msgs")
const $locationTemplate = document.querySelector("#lt")
//...
socket.on("getLocation", (location) => {
	const html = Mustache.render($locationTemplate, {
		location
	})
	$msgs.insertAdjacentHTML("beforeend", html)
})
//...