import './FilterExpenses.css';
import Card from '../UI/Card';



const FilterExpenses = (props) =>{
    const changeFilterHandler = (event) =>{
        event.preventDefault();
        props.onFilterExpenses(event.target.value);
    }

    return(
        <Card className="filter_outer">
            <form className="filter_inner_year">
            <select  onChange={changeFilterHandler}>
                <option value="2020">2022</option>
                <option value="2019">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
            </select>   
            </form>
            <div className="filter_inner_month">
             <div>Jan</div> 
             <div>Feb</div>   
             <div>Mar</div> 
             <div>Apr</div> 
             <div>May</div> 
             <div>Jun</div> 
             <div>Jul</div>   
             <div>Aug</div> 
             <div>Sep</div> 
             <div>Oct</div> 
             <div>Nov</div> 
             <div>Dec</div> 
            </div>
        </Card>
    );
}
export default FilterExpenses;