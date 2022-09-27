const request = require('request')
function forecast(latit, longt, callback) {
	const url = `https://api.darksky.net/forecast/[auth-token]/37.8267,-122.4233`
	request({ url, json: true }, (err, res) => {
		if (err) return callback('Unable to connect')
		if (res.body.error) return callback('invalid location')
		callback(undefined, `It's ${res.body.currently.tempreture} degrees out, there is ${res.body.currently.precipProbability} chance of rain`)
	})
}