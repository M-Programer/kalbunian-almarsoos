const gradeCalc = (score, total) => {
	const precent = score / total * 100
	let grade = '?'
	if (precent < 60) {
		grade = 'F'
	} else if (precent < 70) {
		grade = 'D'
	} else if (precent < 80) {
		grade = 'C'
	} else if (precent < 90) {
		grade = 'B'
	} else {
		grade = 'A'
	}
	return `You got a ${grade} (${precent})!`
}

const result = gradeCalc(9, 20)
console.log(result)

// try-catch

const gradeCalc2 = (score, total) => {
	if (typeof score !== 'number' && typeof total !== 'number') {
		throw Error('All args must be numbers')
	}
	const precent = score / total * 100
	let grade = '?'
	if (precent < 60) {
		grade = 'F'
	} else if (precent < 70) {
		grade = 'D'
	} else if (precent < 80) {
		grade = 'C'
	} else if (precent < 90) {
		grade = 'B'
	} else {
		grade = 'A'
	}
	return `You got a ${grade} (${precent})!`
}