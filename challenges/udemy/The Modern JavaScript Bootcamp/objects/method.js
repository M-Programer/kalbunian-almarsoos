let restaurant = {
	name: 'ASB',
	capacity: 75,
	count: 0,
	check: partySize => {
		return partySize <= this.capacity - this.count
	},

	seat: size => {
		if (this.check(size)) {
			this.count += size
		}
	},

	remove: size => {
		this.count -= size
	},
}