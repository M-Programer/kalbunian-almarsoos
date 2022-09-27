//...
navigator.geolocation.getCurrentPosition(data =>
	socket.emit(
		"sendLocation",
		{
			latitude: data.coords.latitude,
			longitude: data.coords.longitude,
		},
		() => console.log('location sent!')
	)
)
//...