if (process.argv.length < 3) {
	console.log()
}
geocode(process.argv[2].replace('"', '').replace("'", ""), /*...*/)