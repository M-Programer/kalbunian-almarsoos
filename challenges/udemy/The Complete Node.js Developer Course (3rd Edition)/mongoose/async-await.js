//...
function deleteTaskAndCount(id) {
	await Task.findByIdAndDelete(id)
	return await Task.countDocuments({ completed: false })
}
//...