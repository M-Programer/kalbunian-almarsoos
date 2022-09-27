//...
await req.user.populate({
	path: "tasks",
	match,
	options: {
		limit: +req.query.limit,
		skip: +req.query.skip,
	}
})
//...