import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../../context/EXpencecontext/Expencecontext";


const ExpenseDetails = () => {
  let {expence,toggle}=useContext(GlobalContext);
  let history=useHistory();
  const handleClick = () =>{
    history.push('/expence')
  }
  return (
    <Fragment>
      <div className={`expensedetails` }>
        <div className={`container expense-content `}>
          <h1>Viewing {expence.length} expenses totalling $ {expence.reduce((acc,curr)=>{
            return acc +=Number(curr.amount);
          },0)}</h1>
          {/* <Link to="/expence">Add Expense</Link> */}
          <button className="add-expense-btn"
                  onClick={handleClick}      >Add Expense</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
