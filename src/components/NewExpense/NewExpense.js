import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense (props) {
    function saveExpenseDataHandler (enteredExpenseData) {
        const ExpenseData= {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
       props.onAddExpense(ExpenseData);
    };
    return(
        <div className= "new-expense">
            <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}
export default NewExpense;
