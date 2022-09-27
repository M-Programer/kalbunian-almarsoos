const msg1 = document.querySelector("#msg1")
const msg2 = document.querySelector("#msg2")
document.querySelector("form").addEventListener(e => {
	e.preventDefault()
	msg1.textContent = "Loading..."
	msg2.textContent = ""
	fetch(`url?address=${document.querySelector("input").value}`)
		.then(x => x.json())
		.then(data => {
			if (data.error) return msg1.textContent = data.error
			msg1.textContent = data.forecast
			msg2.textContent = data.location
		})
})