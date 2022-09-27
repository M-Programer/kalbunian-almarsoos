let fToAll = f => {
	return {
		c: (f - 32) * 5 / 9,
		k: (f + 459.67) * 5 / 9
	}
}