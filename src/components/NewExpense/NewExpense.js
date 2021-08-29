import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';


const NewExpense = (props) =>{
    const submitExpenseDataHandler = (expenseData) => {
        const newexpenseData = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.newExpenseData(newexpenseData);
    }
    return(

       <NewExpenseForm submitExpenseData = {submitExpenseDataHandler} />
    );
}
export default NewExpense;