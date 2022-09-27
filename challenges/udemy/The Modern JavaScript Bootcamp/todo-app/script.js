// dom manipulation
const ps = document.querySelectorAll('p')
ps.forEach(p => {
	if (p.textContent.includes('the')) {
		p.remove()
	}
})
// add elements to dom
/* local storage moved to utils.js (refactor)*/
// todoList moved to utils.js
const todos = todoList.filter(todo => {
	return !todo.done
})
const body = document.querySelector('body')
const summary = document.createElement('h2')
summary.textContent = `You have ${todos.length} things todo`
body.appendChild(summary)
for (const todo of todos) {
	const p = document.createElement('p')
	p.textContent = todo.text
	body.appendChild(p)
}
// button
document.querySelector('button').addEventListener('click', e => {
	console.log('You clicked me!')
})
// target by id
document.querySelector('#btn').addEventListener('click', e => {
	console.log('I am clicked!!')
})
// text input
document.querySelector('#logme').addEventListener('input', e => {
	console.log(e.target.value)
})

// filter data challenge
/*moved to utils.js*/
const todoE = document.querySelector('#todos')
// render function moved to utils.js
render(todoList, filters)
document.querySelector('#search').addEventListener('input', e => {
	filters.search = e.target.value
	render(todoList, filters)
})
// form
document.querySelector('#add-todo').addEventListener('submit', e => {
	e.preventDefault()
	const input = document.querySelector('#todo-text')
	const text = input.value.trim()
	if (text === ``) {
		return
	}
	todoList.push({
		id: uuidv4(),
		text,
		done: false,
	})
	/*refactor*/save('todos', todoList) // local storage moved to utils.js
	input.value = ''
	render(todoList, filters)
})
// checkbox
document.querySelector('#hide-done').addEventListener('change', e => {
	filters.hideCompleted = e.target.checked
	render(todoList, filters)
})