// sync
const id = location.hash.substring(1)
let notes = getSavedNotes()
const note = notes.find(note => {
	return note.id == id
})
const title = document.querySelector('#title')
const body = document.querySelector('#body')
const updatedAt = document.querySelector('#updated-at')
title.addEventListener('input', e => {
	const now = moment()
	note.title = e.target.value
	note.updatedAt = +now
	saveNotes(notes)
	updatedAt.textContent = now.fromNow()
});
body.addEventListener('input', e => {
	const now = moment()
	note.body = e.target.value
	note.updatedAt = +now
	saveNotes(notes)
	updatedAt.textContent = now.fromNow()
})
title.textContent = note.title
body.textContent = note.body
document.querySelector('#remove').addEventListener('click', e => {
	removeNote(note.id)
	saveNotes(notes)
	location.assign('./index.html')
})