const yargs = require(`yargs`)
yargs.command({
	name: `add`,
	builder: {
		title: {
			demandOption: true,
			type: 'string',
			describe: 'note title'
		},
		body: {
			demandOption: true,
			type: 'string',
			describe: 'note body'
		}
	},
	handler(argv) {
		console.log(argv.body)
	}
})
