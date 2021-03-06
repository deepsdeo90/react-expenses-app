import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  if (props.filteredExpense.length === 0) {
    return (
      <Card className={styles["expense-item-error"]}>
        No Expenses item found.
      </Card>
    );
  }
  return (
    <ul>
      {props.filteredExpense.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
