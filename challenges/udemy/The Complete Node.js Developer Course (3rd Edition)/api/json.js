const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//...
app.get("/weather", (req, res) => {
	const address = req.query.address
	if (!address) return res.send({ err: "must provide address" })
	geocode(address, (err, { latitude: lt, longitude: lg, location } = {}) => {
		if (err) return res.send({ err })
		forecast(lt, lg, (err, data) => {
			if (err) return res.send({ err })
			res.send({
				forecast: data,
				location,
				address,
			})
		})
	})
})
//...