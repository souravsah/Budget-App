import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/EXpencecontext/Expencecontext'
const Profile = () => {
    let {newName,newname}=useContext(GlobalContext);
    let [name,setname]=useState("");
    const handleChange = (e) =>{
            setname(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        newName(name)
    }
    return (
        <form className="formprofile" onSubmit={handleSubmit}>
            <label htmlFor="">Change App Name</label><br/><br/>
            <input type="text" value={name || newname}  onChange={handleChange}/><br/><br/>
            <button type="submit">Change</button>
        </form>
    )
}

export default Profile
