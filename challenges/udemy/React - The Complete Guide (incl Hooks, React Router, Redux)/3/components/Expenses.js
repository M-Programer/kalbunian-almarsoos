import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter'
import "./Expenses.css";
export default props => {
  let expenses = props.expenses
  function onChangeHandeler(data) {
    expenses = expenses.filter(expense => expense.date.getFullYear() == data)
  }
  return (
    <>
      <ExpensesFilter onChange={onChangeHandeler}/>
      <div className="expenses">
        {expenses.forEach(expense => <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />)}
      </div>
    </>
  );
}