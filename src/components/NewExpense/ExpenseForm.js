import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [addNewExpenses, setaddNewExpenses] =useState(false);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate: ''
  // });

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  //   setUserInput((prevState) => {
  //     return{
  //       ...prevState,
  //     enteredTitle: event.target.value,
  //     }
  //   });
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  //   setUserInput((prevState) =>{
  //     return{
  //     ...prevState,
  //     enteredAmount: event.target.value,
  //     }
  //   })
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  //   setUserInput((prevState) =>{
  //     return{
  //     ...prevState,
  //     enteredDate: event.target.value,
  //     }
  //   })
  }

  function submitHandler(e) {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const handleAddNewExpense =()=> {
    setaddNewExpenses(true);
       
  }
  const handleCloseNewExpense =() => {
    setaddNewExpenses(false);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls"style={{display: addNewExpenses === true ? 'flex' : 'none'}}>
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" 
          value={enteredTitle}
          onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2023-12-31"
            value={enteredDate} 
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions" style={{display: addNewExpenses === true ? 'block' : 'none'}}>
      <button type="submit" onClick={handleCloseNewExpense}>Close</button>
        <button type="submit" >Add Expense</button>
        
      </div>
      {
       ! addNewExpenses && 
        <div className="add-new-expense__actions">
        <button onClick={handleAddNewExpense}> Add New Expense</button>
      </div>
      }
    </form>
    
    
  );
}
export default ExpenseForm;
