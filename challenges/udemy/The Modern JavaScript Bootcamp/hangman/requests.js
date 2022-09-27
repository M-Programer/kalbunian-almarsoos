const getCountry = (countryCode, callback) => {
	const xhr = new XMLHttpRequest()
	xhr.addEventListener('readystatechange', function () {
		if (this.readyState === 4) {
			if (this.status === 200) {
				callback(undefined, JSON.parse(this.responseText).filter(country => country.alpha2Code === countryCode)[0])
			} else {
				callback(`Error!!`, undefined)
			}
		}
	})
	xhr.open(`GET`, `http://restcountries.eu/rest/v2/all`)
	xhr.send()
}
getCountry(`EG`, (err, data) => {
	if (err) {
		console.log(err)
		return
	}
	console.log(data.name)
})
// promise
const getCountry2 = (countryCode) => new Promise((resolve, reject) => {
	const xhr = new XMLHttpRequest()
	xhr.addEventListener('readystatechange', function () {
		if (this.readyState === 4) {
			if (this.status === 200) {
				resolve(JSON.parse(this.responseText).filter(country => country.alpha2Code === countryCode)[0])
			} else {
				reject(`Error!!`)
			}
		}
	})
	xhr.open(`GET`, `http://restcountries.eu/rest/v2/all`)
	xhr.send()
})
getCountry2(`EG`)
	.then(data => console.log(`data: ${data}`))
	.catch(err => console.log(`ERROR: ${err}`))

// fetch
const getCountry3 = (countryCode) => fetch(`http://restcountries.eu/rest/v2/all`).then(res => {
	if (res.status === 200) {
		return res
	} else {
		throw new Error(`Error!`)
	}
}).then(res => res.json()).then(data => data.filter(country => countryCode === country.alpha2Code)[0].name)
getCountry3(`EG`)
	.then(data => console.log(`data: ${data}`))
	.catch(err => console.log(`ERROR: ${err}`))

const getLocation = () => fetch(`ipinfo.io/json?token=[token]`).then(res => {
	if (res.status != 200) {
		throw new Error(`Error!`)
	}
	return res
}).then(res => res.json())

getLocation().then(data => {
	console.log(data.country)
	console.log(data.region)
	console.log(data.country)
})

const getCountry4 = async countryCode => {
	try {
		const response = await fetch(`http://restcountries.eu/rest/v2/all`)
		if (response.status !== 200) {
			throw new Error(`Error!`)
		}
		const data = await response.json()
		return data.filter(country => countryCode === country.alpha2Code)[0].name
	} catch {
		console.log(`Error: ${err}`)
	}
}

const getLocation2 = async () => {
	try {
		const response = await fetch(`ipinfo.io/json?token=[token]`)
		if (response.status !== 200) {
			throw new Error(`Error!`)
		}
		const data = await response.json()
		return data
	} catch (err) {
		console.log(`Error: ${err}`)
	}
}

const getCurrentCountry = async () => {
	const response = await fetch(`http://restcountries.eu/rest/v2/all`)
	if (response.status !== 200) {
		throw new Error(`Error!`)
	}
	const data = await response.json()
	return new Promise((resolve) => resolve(data.filter(country => countryCode === country.alpha2Code)[0]))
}