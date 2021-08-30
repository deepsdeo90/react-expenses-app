import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expense = props.amount;

  //const [title, setTitle] = useState(expenseTitle);

  // function clickHandler(){
  //   setTitle('updated');
  //   console.log(expenseTitle);
  // }

  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate expenseDate={expenseDate} />
        <div className={styles["expense-item__description"]}>
          <h2 className={styles["expense-item__title"]}>{expenseTitle}</h2>
          <div className={styles["expense-item__price"]}>${expense}</div>
        </div>
        {/* <button onClick={clickHandler}>Clickme</button> */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
