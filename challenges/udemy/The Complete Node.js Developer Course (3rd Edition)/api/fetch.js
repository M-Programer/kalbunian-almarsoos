const url = "url?address=boston"
fetch(url).then(res => res.json()).then(data => {
	if (data.error) return console.log(data.error)
	console.log(data.forecast)
	console.log(data.location)
})