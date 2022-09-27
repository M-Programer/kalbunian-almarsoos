let getTip = (total, precent = .2) => {
	let result = total * precent
	// return result
	return `A ${precent * 100}% tip on $${total} would be $${result}`
}