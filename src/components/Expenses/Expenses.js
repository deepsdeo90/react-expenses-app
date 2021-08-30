import './Expenses.css';
import FilterExpenses from "../FilterExpenses/FilterExpenses";
import {useState} from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterExpenseHandler = (filterValue) =>{
        setFilteredYear(filterValue);
        }
    
    const filteredExpense = props.expenses.filter((expense)=>{
            console.log(expense.date.getFullYear().toString()+"=="+filteredYear);
    
            return expense.date.getFullYear().toString()===filteredYear;
        });
    return(
        <>
        <FilterExpenses selected={filteredYear} onFilterExpenses = {filterExpenseHandler}/>
        <div className="expenses">
             <ExpensesList filteredExpense={filteredExpense} /> 
        </div>
        </>
    );
}
export default Expenses;