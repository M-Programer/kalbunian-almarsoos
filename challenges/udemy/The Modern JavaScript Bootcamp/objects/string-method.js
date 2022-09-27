let isValidPassword = password => {
	return password.length > 8 && !password.includes('password')
}