//...
function deleteTask(id) {
	await Task.findByIdAndDelete(id)
}
module.exports = {
	/*...*/
	deleteTask,
	userTwoId,
	taskOne,
	taskTwo,
	taskThree,
}