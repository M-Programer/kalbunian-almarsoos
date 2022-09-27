let notes = getSavedNotes()

const filters = {
	searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', e => {
	const id = uuidv4()
	const timeStamp = +moment()
	notes.push({
		id: id,
		title: '',
		body: '',
		createdAt: timeStamp,
		updatedAt: timeStamp,
	})
	saveNotes(notes)
	renderNotes(notes, filters)
	location.assign(`./edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', e => {
	filters.searchText = e.target.value
	renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', e => {
	console.log(e.target.value)
})
// sync
window.addEventListener('storage', e => {
	if (e.key !== 'notes') return
	notes = JSON.stringify(e.newValue)
	renderNotes(notes, filters)
})
// date
const date1 = new Date('feb 13 2009')
const date2 = new Date('feb 13 2017')
if (date1.setTime() > date2.setTime()) {
	console.log(date2.toString())
} else if (date1.setTime() < date2.setTime()) {
	console.log(date1.toString())
}
// moment
const moment1 = moment()
moment1.set({
	'year': 2009,
	'month': 1,
	'date': 13,
})
console.log(moment1.format('MMM D, Y'))