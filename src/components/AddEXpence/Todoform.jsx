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
    let {addExpence,theme,newname,Edit} = useContext(GlobalContext);
    let [data,setData]=useState({
        Utilities:"",
        amount:"",
        date:"",
        textarea:"",
        id:"",
        edit:false
    })
    // if(Edit.edit===true){
    //     let x={...Edit}
    //     setData(x)
    // }


    const handleChange = (e) =>{
        if(Edit.edit===true){
            setData({...Edit,[e.target.name]:e.target.value,["date"]:moment(startDate).format("MMM Do YY")})
        }else{

        

        setData({...data,[e.target.name]:e.target.value,["id"]:uuidv4(),["date"]:moment(startDate).format("MMM Do YY")})
        }
    }
    const clearData = () =>{
        Edit.Utilities=""
        Edit.amount=""
        Edit.date=""
        Edit.textarea=""
        Edit.id=""
        Edit.edit=false
        setData({
            Utilities:"",
            amount:"",
            date:"",
            textarea:"",
            id:"",
            edit:false
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(Edit)
        console.log({...data})
        addExpence(data)
        // clear Inputs
        clearData();
        history.push('/')
    }
    return (
        <Fragment>
        <div className="heading">
        <div className=" header">
            <h2>Add Expense</h2>
            </div>

        </div>
            <form className="container"
                  
                  onSubmit={handleSubmit} style={theme.Todoform}>
        <div className="form-box">
            <input type="text" placeholder="Utilities" name="Utilities" value={data.Utilities || Edit.Utilities} onChange={handleChange} autoComplete="off" />
        </div>
        <div className="form-box">
            <input type="number" placeholder="Amount" name="amount" value={data.amount || Edit.amount} onChange={handleChange} autoComplete="off"/>
        </div>
        <div className="form-box">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />        </div>

            <div className="form-box">
                <textarea name="" id="" cols="81" rows="8" placeholder="Add a note for your expence" name="textarea" value={data.textarea || Edit.textarea} onChange={handleChange} ></textarea>
            </div> 
            <button type="submit">Save Expense</button>
        </form>

        </Fragment>
    )
}

export default Todoform
