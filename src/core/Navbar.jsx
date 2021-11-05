import React, { useState } from "react";
import { BsFillMoonFill,BsFillSunFill, } from 'react-icons/bs';
import { FiSettings} from 'react-icons/fi';
import { useHistory } from "react-router";
const Navbar = () => {
  let [toggle,settoggle]=useState(false);
  let history = useHistory();
  const handleSettings = () =>{
      history.push("/settings")
  }
  const handledarkmode = () =>{
    settoggle(!toggle)
    let element=document.body;
    element.classList.toggle("dark-mode")
  }
  const handleBudget = () =>{
    history.push("/")
  }
  return (
    <div className="navbar">
      <div className="container navbar-wrapper">
        <h1 onClick={handleBudget}>Budget App</h1>
        <h3 ><span onClick={handledarkmode}>{toggle?<BsFillMoonFill/>:<BsFillSunFill/>}</span>{"   "}<span onClick={handleSettings}><FiSettings/></span></h3>
      </div>
    </div>
  );
};

export default Navbar;
