import React, { useContext, useState } from "react";
import { BsFillMoonFill,BsFillSunFill, } from 'react-icons/bs';
import { FiSettings} from 'react-icons/fi';
import { useHistory } from "react-router";
import { GlobalContext } from "../context/EXpencecontext/Expencecontext";
const Navbar = () => {
  let {newname,theme}=useContext(GlobalContext);
  console.log(newname)
  let history = useHistory();
  const handleSettings = () =>{
      history.push("/settings")
  }
  const handleBudget = () =>{
    history.push("/")
  }
  return (
    <div className="navbar" style={
      theme.Navbar
    }>
      <div className="container navbar-wrapper">
        <h1 onClick={handleBudget}>{newname || "Budget App"}</h1>
        <h3><span onClick={handleSettings}><FiSettings/></span></h3>
      </div>
    </div>
  );
};

export default Navbar;
