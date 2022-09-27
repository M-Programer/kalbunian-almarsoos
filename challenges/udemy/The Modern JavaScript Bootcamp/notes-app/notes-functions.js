// Read existing notes from localStorage
const getSavedNotes = () => {
	const notesJSON = localStorage.getItem('notes')

	if (!/*truthy falsy*/notesJSON /*!== null*/) {
		return JSON.parse(notesJSON)
	} else {
		return []
	}
}

// Save the notes to localStorage
const saveNotes = notes => {
	localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = id => {
	const noteIndex = notes.findIndex(note => note.id === id)

	if (noteIndex > -1) {
		notes.splice(noteIndex, 1)
	}
}

// Generate the DOM structure for a note
const generateNoteDOM = note => {
	const noteEl = document.createElement('div')
	const textEl = document.createElement('a')
	const button = document.createElement('button')

	// Setup the remove note button
	button.textContent = 'x'
	noteEl.appendChild(button)
	button.addEventListener('click', () => {
		removeNote(note.id)
		saveNotes(notes)
		renderNotes(notes, filters)
	})

	// Setup the note title text
	textEl.setAttribute('href', `./edit.html#${note.id}`)
	if (note.title.length > 0) {
		textEl.textContent = note.title
	} else {
		textEl.textContent = 'Unnamed note'
	}
	noteEl.appendChild(textEl)

	return noteEl
}
/*adding date support (start)*/
const sortNotes = (notes, sortBy) => {
	if (sortBy === 'byEdited') {
		notes.sort((a,b) => {
			a = a.updatedAt
			b = b.updatedAt
			if (a > b) return -1
			if (a < b) return 1
			return 0
		})
	} else if (sortBy === 'byCreated') {
		notes.sort((a,b) => {
			a = a.createdAt
			b = b.createdAt
			if (a > b) return -1
			if (a < b) return 1
			return 0
		})
	} else if (sortBy === 'alphabetical') {
		notes.sort((a,b) => {
			a = a.title.toLowerCase()
			b = b.title.toLowerCase()
			if (a > b) return 1
			if (a < b) return -1
			return 0
		})
	} else {
		return notes
	}
}
/*adding date support (end)*/

// Render application notes
const renderNotes = (notes, filters) => {
	const filteredNotes = notes.filter(note => {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
	})

	document.querySelector('#notes').innerHTML = ''

	filteredNotes.forEach(note => {
		const noteEl = generateNoteDOM(note)
		document.querySelector('#notes').appendChild(noteEl)
	})
}