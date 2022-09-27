const account = {
	name: 'Andrew Mead',
	expenses: [],
	income: [],
	addExpense: (text, amount) => {
		this.expenses.push({
			text: text,
			amount: amount,
		})
	},

	addIncome: (text, amount) => {
		this.income.push({
			text: text,
			amount: amount
		});
	},

	getSummary: () => {
		let totalExpenses = 0;
		this.expenses.forEach(expense => {
			totalExpenses = totalExpenses + expense.amount
		})

		let totalIncome = 0;
		this.expenses.forEach(anIncome => {
			totalExpenses = totalExpenses + anIncome.amount
		})
		return `${this.name} has a balance of $${totalIncome - totalExpenses}, $${totalIncome} in income and $${totalExpenses} in expenses`
	},
}

account.addExpense('Rent', 950)
account.addExpense('Coffe', 2)
account.addIncome('Job', 1000)
console.log(account.getSummary())