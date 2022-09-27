// Setup the empty todos array
let todos = []
// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
	const data = localStorage.getItem('todos')
	todos = data ? JSON.parse(data) : []
}
// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => localStorage.setItem('todos', todos)
// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos
// createTodo
// Arguments: todo text
// Return value: none
const createTodo = text => {
	todos.push({
		completed: false,
		text,
	})
	saveTodos()
}
// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = id => {
	const i = todos.findIndex(todo => todo.id === id)
	if (i !== -1) {
		todos.splice(i, 1)
	}
	saveTodos()
}
// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = id => {
	const i = todos.findIndex(todo => todo.id === id)
	if (i !== -1) {
		todos[i].done = !todos[i].done
	}
	saveTodos()
}
// Make sure to call loadTodos and setup the exports
loadTodos()
export { loadTodos, getTodos, toggleTodo, removeTodo, createTodo }