import styles from "./Expenses.module.css";
import FilterExpenses from "../FilterExpenses/FilterExpenses";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const filterExpenseHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    if (filteredYear) {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return true;
    }
  });
  return (
    <>
      <FilterExpenses
        selected={filteredYear}
        onFilterExpenses={filterExpenseHandler}
        expenses={filteredExpense}
      />

      <div className={styles.expenses}>
        <ExpensesList filteredExpense={filteredExpense} />
      </div>
    </>
  );
};
export default Expenses;
