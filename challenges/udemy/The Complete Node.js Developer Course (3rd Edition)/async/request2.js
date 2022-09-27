const request = require('request')
const url = '[url]'
request({ url, json: true }, (err, res) => {
	console.log(res.body.features[0].center[0])
	console.log(res.body.features[0].center[1])
})