import React, { useContext } from "react";
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from "../../context/EXpencecontext/Expencecontext";
import { useHistory } from "react-router";
const ExpenseListItem = ({idx,item}) => {
  let history = useHistory();
  let {deleteExpence,handleDeleteFilter,editTodo}=useContext(GlobalContext)
  const handleDelete = (id) =>{
    deleteExpence(id);
  }
  const handleDeleteFiltera = (id) =>{
    handleDeleteFilter(id);
  }
  const handleedit =(item) =>{
    item.edit=true;
    editTodo(item)
    history.push('/expence')
    console.log(item)
  }
  return (
    <li className="expense-item" key={idx}>
      <span>
        <h5>{item.Utilities}</h5>
        <h6>{item.date}</h6>
      </span>

      <strong>$ {item.amount}{" "}
      <span className="delete" 
      onClick={
        ()=>{
          handleDelete(item.id)
          handleDeleteFiltera(item.id)
        }
      }><MdDelete/></span> <span className="edit" onClick={()=>handleedit(item)}><AiFillEdit/></span> </strong>
      
    </li>
  );
};

export default ExpenseListItem;
