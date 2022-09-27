const todos = [
	{ text: 'Do challenges of "Modern js bootcamp"', done: false },
	{ text: 'see React course', done: true },
	{ text: 'Exercise', done: false },
	{ text: 'have breakfast', done: true },
	{ text: 'others', done: true },
]

todos.splice(2, 1)
todos.push("blah")
todos.shift()

console.log(`You have ${todos.length} todos`)
console.log(todos)

todos.forEach((todo, index) => {
	console.log(`${index + 1}. ${todo}`);
})

for (let i = 0; i < todos.length; i++) {
	console.log(`${i + 1}. ${todos[i]}`)
}

const deleteTodo = (todos, text) => {
	const index = todos.findIndex(todo => {
		return todo.text === text
	})
	if (index != -1) {
		todos.splice(index, 1)
	}
}

deleteTodo(todos, 'Exercise')
console.log(todos)

const getThingsTodo = todos => {
	return todos.filter(todo => {
		return !todo.done
	})
}

console.log(getThingsTodo(todos))

const sortTodos = todos => {
	todos.sort((a, b) => {
		const x = a.done
		const y = a.done
		if (!x && y) {
			return -1
		} else if (x && !y) {
			return 1
		} else {
			return 0
		}
	});
}

sortTodos(todos)
console.log(todos)