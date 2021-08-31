import styles from "./NewExpense.module.css";
import NewExpenseForm from "./NewExpenseForm";
import { useState } from "react";
import Button from "../UI/Button";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitExpenseDataHandler = (expenseData) => {
    const newexpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.newExpenseData(newexpenseData);
    stopEditing();
  };
  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles["new-expense__controls"]}>
      {isEditing && (
        <NewExpenseForm
          submitExpenseData={submitExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
      {!isEditing && <Button onClick={startEditing}>Add New Expense</Button>}
    </div>
  );
};
export default NewExpense;
