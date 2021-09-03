import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
const App = () => {
  /*const expenses =[
    {id:1,date:new Date(2021, 6 ,26),title:'Car Insurance',amount:230.3},
    {id:2,date:new Date(2021, 6 ,27),title:'Property Tax',amount:2200.3},
    {id:3,date:new Date(2021, 5 ,26),title:'Health Care',amount:300.3},
    {id:4,date:new Date(2020, 6 ,26),title:'Travel',amount:500.3},
    {id:5,date:new Date(2021, 3 ,26),title:'HOA',amount:400},
    
  ];*/
  const adminDetails = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [expenses, setExpenses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const newExpenseDataHandler = (newExpense) => {
    console.log(newExpense);
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  const loggedInHandler = (userDetails) => {
    if (
      userDetails.userEmail === adminDetails.email &&
      userDetails.userPassword === adminDetails.password
    ) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setIsLoggedIn(false);
      setError("EmailId and Password  do not match");
    }
  };

  const loggedOutHandler = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login loggedIn={loggedInHandler} error={error} />;
  } else {
    return (
      <React.Fragment>
        <Header logout={loggedOutHandler} />
        <NewExpense newExpenseData={newExpenseDataHandler}></NewExpense>
        <Expenses expenses={expenses} />
      </React.Fragment>
    );
  }
};

export default App;
