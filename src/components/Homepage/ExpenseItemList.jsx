import React, { Fragment,useContext } from "react";
import ExpenseListItem from "./ExpenseListItem";
import { GlobalContext } from "../../context/EXpencecontext/Expencecontext";

const ExpenseItemList = () => {
  let {expence,theme}=useContext(GlobalContext);

  return (

    <Fragment>
      <div className="container" style={theme.ExpenseItemList}>
        <ul className="ExpenseItemList">
        {!expence.length ? (
        <h1>Sorry, No expence</h1>
      ) : (
        expence.map((item, idx) => <ExpenseListItem item={item} idx={idx} />)
      )}
        </ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;
