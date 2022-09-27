//...
request({ url, json: true }, (err, { body }) => {
	if (err) return console.log("Unable to request data")
	if (body.error) return console.log("Invalid data")
	const data = body.daily.data[0]
	const data2 = body.currently
	callback(undefined, `${data.summary} It's ${data2.summary.tempreture} degrees out, with high of ${data.tempretureHigh} and low of ${data.tempretureLow} there is ${data2.summary.precipProbability} chance of rain`)
})
//...