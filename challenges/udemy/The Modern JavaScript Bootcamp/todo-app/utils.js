// refactor
const load = key => {
	const data = localStorage.getItem(key)
	if (data == null) return []
	return JSON.parse(data)
}
const todoList = load('todos')
const filters = {
	search: '',
	hideCompleted: false
}

const save = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data))
}

const remove = id => {
	const todoI = todoList.findIndex(todo => {
		return todo.id === id
	});
	todoList.splice(todoI, 1)
}

const makeTodoDom = todo => {
	const todoE = document.createElement('div')

	const checkbox = document.createElement('input')
	checkbox.setAttribute('type', 'checkbox')
	checkbox.checked = todo.done
	checkbox.addEventListener('change', e => {
		todo.done = e.target.checked
		save('todos', todoList)
		render(todoList, filters)
	})

	const text = document.createElement('span')
	text.textContent = todo.text

	const btn = document.createElement('button')
	btn.addEventListener('click', e => {
		remove(todo.id)
		save('todos', todoList)
		render(todoList, filters)
	})
	btn.textContent = 'X'

	todoE.appendChild(checkbox)
	todoE.appendChild(text)
	todoE.appendChild(btn)
	return todoE
}

const makeSummaryDom = todos => {
	todos = todos.filter(todo => {
		return !todo.done
	})
	const summary = document.createElement('h2')
	const plural = todos.length === 1 ? `` : `s`
	summary.textContent = `You have ${todos.length} todo${plural}`
	return summary
}

const render = (todoList, filters) => {
	const todoE = document.querySelector('#todos')
	todoE.innerHTML = ''
	const todos = todoList.filter(todo => {
		let condition = todo.text.toLowerCase().includes(filters.search)
		if (filters.hideCompleted) {
			condition = condition && !todo.done
		}
		//debugger
		return condition
	})
	todoE.appendChild(makeSummaryDom(todos))
	if (todos.length > 0) {
		for (const todo of todos) {
			todoE.appendChild(makeTodoDom(todo))
		}
	} else {
		const msg = document.createElement(`p`)
		msg.classList.add(`empty-message`)
		msg.textContent = `There's no todos.`
		todoE.appendChild(msg)
	}
}
