import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
import {useState} from 'react';

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);

    const submitExpenseDataHandler = (expenseData) => {
        const newexpenseData = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.newExpenseData(newexpenseData);
        stopEditing();
    }
    const startEditing = () =>{
        setIsEditing(true);
    }
    const stopEditing = () =>{
        setIsEditing(false);
    }

    return (
        <div className="new-expense__controls">
            {isEditing && <NewExpenseForm submitExpenseData = {submitExpenseDataHandler} onCancel={stopEditing}/>}
            {!isEditing && <button onClick={startEditing} className="btn">Add New Expense</button> }
         </div>  
    );
    
}
export default NewExpense;