import cry, { scream } from "./scream";
console.log(scream('oh no'))
console.log(cry('oh no'))
// rest param
const printTeam = (name, coach, ...players) => {
	console.log(`Team name: ${name}`)
	console.log(`Coach: ${coach}`)
	console.log(`Players: ${players.join(', ')}`)
}
// spread obj
const person = {
	name: 'Mahmoud',
	age: 13,
}
const location = {
	city: 'Cairo',
	country: 'Egypt'
}
const overview = {
	...person,
	...location
}