import { useState } from "react";
import styles from "./NewExpenseForm.module.css";

const NewExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
    props.submitExpenseData(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className={styles["new-expense_control"]}>
          <label>Expense Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className={styles["new-expense_control"]}>
          <label>Expense Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className={styles["new-expense_control"]}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-01-01"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
        <div className={styles.btn_holder}>
          <button className={styles.btn} onClick={props.onCancel}>
            Cancel
          </button>
          <button className={styles.btn} type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
export default NewExpenseForm;
