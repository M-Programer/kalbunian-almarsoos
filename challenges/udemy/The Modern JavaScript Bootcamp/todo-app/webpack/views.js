import { getTodos } from "./todos"
import { getFilters } from "./filters"
// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
	const todos = getTodos()
	const todosEl = document.querySelector('#todos')
	const { searchText, hideCompleted } = getFilters()
	todosEl.innerHTML = ''
	todosEl.appendChild(generateSummaryDOM(todos.filter(todo => !todo.completed)))
	todos.forEach(todo => {
		if (hideCompleted && !todo.completed && todo.text.includes(searchText)) {
			todosEl.appendChild(generateTodoDOM(todo.text, todo.completed))
		}
	})
}
// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (text, done) => {
	const todoEl = document.createElement('div')

	const textEl = document.createElement('span')
	textEl.textContent = text

	const checkbox = document.createElement('input')
	checkbox.setAttribute('type', 'checkbox')
	checkbox.checked = done

	const removeBtn = document.createElement('button')
	removeBtn.addEventListener('click', () => todoEl.remove())

	todoEl.appendChild(textEl)
	todoEl.appendChild(checkbox)
	return todoEl
}
// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = incompletedTodos => {
	const summaryEl = document.createElement('h2')
	const count = incompletedTodos.length
	const plural = count === 1 ? 's' : ''
	summaryEl.textContent = `You have ${count} todo` + plural
	return summaryEl
}
// Make sure to set up the exports
export { renderTodos }