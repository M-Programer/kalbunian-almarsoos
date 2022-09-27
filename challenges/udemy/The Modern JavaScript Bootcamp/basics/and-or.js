let isGuest1Vegan = true
let isGuest2Vegan = true

if (isGuest1Vegan && isGuest2Vegan) {
	console.log('All vegan')
} else if (isGuest1Vegan || isGuest2Vegan) {
	console.log('Some vegan')
} else {
	console.log('No vegan')
}