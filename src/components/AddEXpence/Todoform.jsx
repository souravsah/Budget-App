import React, { Fragment,useContext,useState } from 'react'
import { useHistory } from 'react-router';
import { GlobalContext } from '../../context/EXpencecontext/Expencecontext'
const Todoform = () => {
    const history = useHistory()
    let {addExpence} = useContext(GlobalContext);
    let [data,setData]=useState({
        Utilities:"",
        amount:"",
        date:"",
        textarea:"",
    })
    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const clearData = () =>{
        setData({
            Utilities:"",
            amount:"",
            date:"",
            textarea:"",
    
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
            <input type="date" placeholder="Amount" name="date" value={data.date} onChange={handleChange} autoComplete="off" />
        </div>

            <div className="form-box">
                <textarea name="" id="" cols="83" rows="8" placeholder="Add a note for your expence" name="textarea" value={data.textarea} onChange={handleChange} ></textarea>
            </div> 
            <button type="submit">Save Expense</button>
        </form>

        </Fragment>
    )
}

export default Todoform
