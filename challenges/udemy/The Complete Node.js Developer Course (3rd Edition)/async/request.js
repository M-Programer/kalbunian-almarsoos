const request = require('request')
const url = 'https://api.darksky.net/forecast/[auth-token]/37.8267,-122.4233'

request({ url, json: true }, (err, res) => {
	console.log(`It's ${res.body.currently.tempreture} degrees out, there is ${res.body.currently.precipProbability} chance of rain`)
})