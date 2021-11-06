import React, { Fragment,useContext,useState } from 'react'
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import { GlobalContext } from '../../context/EXpencecontext/Expencecontext'
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
const Todoform = () => {
    const history = useHistory()
    let [startDate, setStartDate] = useState(new Date());

    let {addExpence} = useContext(GlobalContext);
    let [data,setData]=useState({
        Utilities:"",
        amount:"",
        date:moment(startDate).format("MMM Do YY"),
        textarea:"",
        id:"",
    })
    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value,["id"]:uuidv4()})
    }
    const clearData = () =>{
        setData({
            Utilities:"",
            amount:"",
            date:"",
            textarea:"",
            id:"",
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        addExpence(data)
        // clear Inputs
        clearData();
        history.push('/')
    }
    return (
        <Fragment>
        <div className="heading">
        <div className="container header">
            <h2>Add Expense</h2>
            </div>

        </div>
            <form className="container"
                  
                  onSubmit={handleSubmit}>
        <div className="form-box">
            <input type="text" placeholder="Utilities" name="Utilities" value={data.Utilities} onChange={handleChange} autoComplete="off" />
        </div>
        <div className="form-box">
            <input type="number" placeholder="Amount" name="amount" value={data.amount} onChange={handleChange} autoComplete="off"/>
        </div>
        <div className="form-box">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />        </div>

            <div className="form-box">
                <textarea name="" id="" cols="83" rows="8" placeholder="Add a note for your expence" name="textarea" value={data.textarea} onChange={handleChange} ></textarea>
            </div> 
            <button type="submit">Save Expense</button>
        </form>

        </Fragment>
    )
}

export default Todoform
