import { useState } from "react";
import styles from "./NewExpenseForm.module.css";
import Button from "../UI/Button";

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
    if (
      userInput.enteredTitle === "" ||
      userInput.enteredAmount === "" ||
      userInput.enteredDate === ""
    ) {
      return;
    }

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
          <label htmlFor="expense_title">Expense Title</label>
          <input
            id="expense_title"
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className={styles["new-expense_control"]}>
          <label htmlFor="expense_amount">Expense Amount</label>
          <input
            id="expense_amount"
            type="number"
            min="0.1"
            step="0.1"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className={styles["new-expense_control"]}>
          <label htmlFor="expense_date">Date</label>
          <input
            id="expense_date"
            type="date"
            min="2019-01-01"
            max="2022-01-01"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
        <div className={styles.btn_holder}>
          <Button onClick={props.onCancel} type="button">
            Cancel
          </Button>
          <Button onClick={submitHandler} type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
export default NewExpenseForm;
