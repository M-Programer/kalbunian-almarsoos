const yargs = require(`yargs`)
yargs.command({
	command: `list`,
	describe: `Lists all notes`,
	handler() { console.log(`listing`) }
})
yargs.command({
	command: `read`,
	describe: `displays the note content`,
	handler() { console.log(`reading`) }
})