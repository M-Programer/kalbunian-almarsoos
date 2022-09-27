// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { setFilters } from "./filters";
import { createTodo, loadTodos } from "./todos";
import { renderTodos } from "./views";
// Render initial todos
renderTodos()
// Set up search text handler
document.querySelector('#search').addEventListener('input', e => setFilters({
	searchText: e.target.value
}))
// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('input', e => setFilters({
	hideCompleted: e.target.checked
}))
// Set up form submission handler
document.querySelector('#add-todo').addEventListener('submit', e => {
	e.preventDefault()
	createTodo(document.querySelector('#todo-text').value)
})
// Bonus: Add a watcher for local storage
window.addEventListener('storage', e => {
	if (e.key === 'note') {
		loadTodos()
		renderTodos()
	}
})