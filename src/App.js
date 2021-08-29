import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';



const App = () => {
  /*const expenses =[
    {id:1,date:new Date(2021, 6 ,26),title:'Car Insurance',amount:230.3},
    {id:2,date:new Date(2021, 6 ,27),title:'Property Tax',amount:2200.3},
    {id:3,date:new Date(2021, 5 ,26),title:'Health Care',amount:300.3},
    {id:4,date:new Date(2020, 6 ,26),title:'Travel',amount:500.3},
    {id:5,date:new Date(2021, 3 ,26),title:'HOA',amount:400},
    
  ];*/
  const [expenses, setExpenses] = useState([]);

  const newExpenseDataHandler = (newExpense) =>{
    console.log(newExpense);
    setExpenses((prevExpenses)=>{
      return [newExpense, ...prevExpenses];
    })
   }

  return (
    <div>
       <div >
        <NewExpense newExpenseData={newExpenseDataHandler}></NewExpense>
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
