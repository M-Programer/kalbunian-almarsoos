// notes.js
const chalk = require('chalk')

const listNotes = () => {
	console.log(chalk.inverse('Your notes'))
	loadNotes().forEach(note => {
		console.log(note.title)
	});
}

module.exports = {
	listNotes
}

// app.js
const listNotes = require('./notes').listNotes
const yargs = require('yargs')

yargs.command({
	command: 'list',
	handler(argv) { listNotes() },
	describe: 'List all notes.'
})
