const redux = require('redux')
const store = redux.createStore((state = {counter: 0}, action) => {
	let out = {...state}
	if (action.type === '+') out.counter++
	if (action.type === '-') out.counter--
	return out
})

store.subscribe(() => console.log(store.getState()))
store.dispatch({type: '+'})
store.dispatch({type: '-'})