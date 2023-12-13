import ExpenseItem from './ExpenseItem';
import './App.css';

function App() {
  const expense = [
    {
      title:'phone',
      amount:600,
      date:new Date(2023,11,9),
    },
    {
      title:'laptop',
      amount:4000,
      date:new Date(2023,11,9),
    },
    {
      title:'refri',
      amount:1200,
      amount:300,
      date:new Date(2023,11,9),
    },
  ]
  return (
    <div className="App">
      <ExpenseItem title = {expense[0].title} amount ={expense[0].amount}  date = {expense[2].date} />
      <ExpenseItem title = {expense[1].title} amount ={expense[1].amount}  date = {expense[1].date} />
      <ExpenseItem title = {expense[2].title} amount ={expense[2].amount}  date = {expense[2].date} />
      <ExpenseItem title = {expense[3].title} amount ={expense[3].amount}  date = {expense[3].date} />
      
    </div>
  );
}

export default App;
