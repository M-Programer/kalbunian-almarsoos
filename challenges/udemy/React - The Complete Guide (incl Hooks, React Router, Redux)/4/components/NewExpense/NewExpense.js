import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
	const [viewForm, setViewForm] = useState(false)
	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
	};

	const invertView = () => setViewForm(prevState => !prevState)

	return (
		<div className='new-expense'>
			{viewForm ?
				<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} invertView={invertView} /> :
				<button onClick={invertView}>Add New Expense</button>
			}
		</div>
	);
};

export default NewExpense;
