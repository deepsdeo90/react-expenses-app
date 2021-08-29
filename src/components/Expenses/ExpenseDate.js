import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const locale = "en-us";
  const month = props.expenseDate.toLocaleString(locale, { month: "long" });
  const day = props.expenseDate.toLocaleString(locale, { day: "numeric" });
  const year = props.expenseDate.toLocaleString(locale, { year: "numeric" });
  return (
    <div className="expense-item__date">
      <div className="expense-item__day">{month}</div>
      <div className="expense-item__month">{day}</div>
      <div className="expense-item__year">{year}</div>
    </div>
  );
}
export default ExpenseDate;
