// Set up filters default object
let filters = {
	searchText: '',
	hideCompleted: false,
}
// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters
// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = updates => {
	const { searchText: x, hideCompleted: y } = updates
	const { searchText: a, hideCompleted: b } = filters
	filters.searchText = typeof searchText === 'string' ? x : a
	filters.hideCompleted = typeof hideCompleted === 'boolean' ? y : b
}
// Make sure to set up the exports
export { getFilters, setFilters }