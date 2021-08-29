import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import FilterExpenses from "../FilterExpenses/FilterExpenses";
import {useState} from 'react';
import Card from '../UI/Card';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    
    const filterExpenseHandler = (filterValue) =>{
        setFilteredYear(filterValue);
        }
    const filteredExpense = props.expenses.filter((expense)=>{
        console.log(expense.date.getFullYear().toString()+"=="+filteredYear);

        return expense.date.getFullYear().toString()===filteredYear;
    });
    let expensesContent = <Card className="expense-item-error">No Expenses item found.</Card>;

    if(filteredExpense.length > 0){
        expensesContent =  filteredExpense.map((expense)=>{
            return (<ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />)
       
         });
    }
  
    return(
        <>
        <FilterExpenses selected={filteredYear} onFilterExpenses = {filterExpenseHandler}/>
        <div className="expenses">
         {expensesContent}   
        </div>
        </>
    );
}
export default Expenses;