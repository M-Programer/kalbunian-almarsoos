const yargs = require('yargs')
const chalk = require('chalk')

function removeNote(title) {
	// console.log(title)
	const loadedNotes = loadNotes()
	const notes = loadedNotes.filter(note => note.title !== title)
	saveNotes(notes)
	console.log(notes.length === loadedNotes.length ? chalk.red.inverse('Note not found') : chalk.green.inverse('Note removed!'))
}

yargs.command({
	command: 'remove',
	builder: {
		title: {
			demandOption: true,
			type: 'string',
			describe: 'note title'
		}
	},
	handler(argv) {
		removeNote(argv.title)
	}
})