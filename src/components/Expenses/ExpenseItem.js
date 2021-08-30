import './ExpenseItem.css';
import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) =>{
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
    <Card className="expense-item">
     <ExpenseDate expenseDate={expenseDate} /> 
      <div className="expense-item__description">
        <h2 className="expense-item__title">{expenseTitle}</h2>
        <div className="expense-item__price" >${expense}</div>
      </div>
      {/* <button onClick={clickHandler}>Clickme</button> */}
    </Card>
    </li>
  );
}
export default ExpenseItem;
