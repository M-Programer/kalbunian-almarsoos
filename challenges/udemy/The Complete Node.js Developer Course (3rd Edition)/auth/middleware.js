//...
const task = Task.findById(req.params.id)
updates.forEach(update => task[update] = req.body[update])
await task.save()
//...