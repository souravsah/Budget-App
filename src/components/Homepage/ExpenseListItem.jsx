import React, { useContext } from "react";
import { MdDelete } from 'react-icons/md';
import { GlobalContext } from "../../context/EXpencecontext/Expencecontext";
const ExpenseListItem = ({idx,item}) => {
  let {deleteExpence,handleDeleteFilter}=useContext(GlobalContext)
  const handleDelete = (id) =>{
    deleteExpence(id);
  }
  const handleDeleteFiltera = (id) =>{
    handleDeleteFilter(id);
  }
  return (
    <li className="expense-item" key={idx}>
      <span>
        <h5>{item.Utilities}</h5>
        <h6>{item.date}</h6>
      </span>

      <strong>$ {item.amount}{" "}
      <span onClick={
        ()=>{
          handleDelete(item.id)
          handleDeleteFiltera(item.id)
        }
      }><MdDelete/></span></strong>
      
    </li>
  );
};

export default ExpenseListItem;
