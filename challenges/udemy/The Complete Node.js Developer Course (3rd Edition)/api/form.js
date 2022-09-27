document.querySelector("form").addEventListener(e => {
	e.preventDefault()
	fetch(`url?address=${document.querySelector("input").value}`)
		.then(x => x.json())
		.then(console.log)
})