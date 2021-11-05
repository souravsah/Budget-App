import React, { useContext } from "react";

const ExpenseListItem = ({idx,item}) => {
  return (
    <li className="expense-item" key={idx}>
      <span>
        <h5>{item.Utilities}</h5>
        <h6>{item.date}</h6>
      </span>

      <strong>$ {item.amount}</strong>
    </li>
  );
};

export default ExpenseListItem;
