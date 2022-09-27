const request = require('request')
const url = '[url]'
request({ url, json: true }, (err, res) => {
	if (err) return console.log('Can\'t connect to server')
	if (res.body.features.length === 0) return console.log('incorrect data')
	console.log(res.body.features[0].center[0])
	console.log(res.body.features[0].center[1])
})