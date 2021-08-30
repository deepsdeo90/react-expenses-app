import "./FilterExpenses.css";
import Card from "../UI/Card";
import ExpenseChart from "../Expenses/ExpenseChart";

const FilterExpenses = (props) => {
  const changeFilterHandler = (event) => {
    event.preventDefault();
    props.onFilterExpenses(event.target.value);
  };

  return (
    <Card className="filter_outer">
      <form className="filter_inner_year">
        <select onChange={changeFilterHandler}>
          <option value="">Select</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </form>
      <ExpenseChart expenses={props.expenses} />
    </Card>
  );
};
export default FilterExpenses;
