import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../../context/EXpencecontext/Expencecontext";
import moment from "moment";

const ExpenseFilterForm = () => {
  let [startDate, setStartDate] = useState(new Date());
  let [toggle,settoggle]=useState(0);
  let history = useHistory();
  let [filter,setfilter]=useState({
      date:moment(startDate).format("MMM Do YY"),
  });
  let {filterdata}=useContext(GlobalContext);
  const handleSubmit = (e) =>{
    e.preventDefault();
    filterdata(filter)
    filter={
      date:moment(startDate).format("MMM Do YY"),

    }    
    history.push("/search")
  }
  const handleChange=(e)=>{
    setfilter({...filter,[e.target.name]:e.target.value})
  }
  console.log(filter)
  const handleToggle = (e) =>{
    console.log(e.target.value)
    if(e.target.value==1){
      settoggle(false)
    }
    else{
      settoggle(true)
    }
  }
  return (
    <div className="ExpenseFilterForm">
      <form onSubmit={handleSubmit} className="container filter-content">
        <input
          type="text"
          placeholder="Search Expenses"
          name="searchInput"
          autoComplete="off"
          onChange={handleChange}
        />
        <select name="filterDropdown" onClick={handleToggle} onChange={handleChange} className="filter-dropdown">
          <option value="1"  >
            Date
          </option>
          <option value="2" >Amount</option>
        </select>
        <h1> {
          toggle?<input type="number" name="amount" id="" onChange={handleChange} />:    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        }   
      </h1>
      <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseFilterForm;
