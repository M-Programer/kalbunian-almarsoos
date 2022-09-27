let myAccount = {
	name: 'Andrew',
	expenses: 0,
	income: 0
}

let expense = (account, amount) => {
	account.expenses = account.expenses + amount
}

let income = (account, amount) => {
	account.income = account.income + amount
}

let reset = account => {
	account.name = ''
	account.expenses = 0
	account.income = 0
}

let summarry = account => {
	return `${account.name} has $${account.expenses - account.income}, ${account.expenses} in expenses and ${account.income} in income.`
}