// notes.js
const chalk = require('chalk')
//...
function readNote(title) {
	const note = loadNotes().find(note => note.title === title)
	if (note == undefined) {
		console.log(chalk.red.inverse('not found'))
		return
	}
	console.log(chalk.blue.inverse(note.title))
	console.log(chalk.blue(note.body))
}
module.exports = { readNote/*...*/ }

// app.js
const yargs = require('yargs')
const readNote = require('./notes').readNote
yargs.command({
	command: 'read',
	builder: {
		title: {
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		readNote(argv.title)
	}
})