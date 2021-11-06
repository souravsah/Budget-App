import React, { createContext, useReducer } from "react";
import ExpenceReducer from "./ExpenceReducer";
const initialState = {
  expence: [],
  newname:"Budget App",
  filterData:[],
  id:"",
};
// Created Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpenceReducer, initialState);

  //   actions
  const addExpence = (newExpence) => {
    dispatch({
      type: "ADD_EXPENCE", //mandatory
      payload: newExpence,
    });
  };
  const newName = (Name) => {
    dispatch({
      type: "ADD_NAME", //mandatory
      payload: Name,
    });
  };
  const filterdata = (data) => {
    dispatch({
      type: "FILTER_DATA", //mandatory
      payload: data,
    });
  };
  const deleteExpence = (id) => {
    dispatch({
      type: "DELETE_EXPENCE", //mandatory
      payload: id,
    });
  };
  const handleDeleteFilter = (id) =>{
    dispatch({
      type:"DELETE_DATAA",
      payload: id,
    });
  };


  return (
    <GlobalContext.Provider
      value={{
        expence: state.expence,
        newname:state.newname,
        filterData:state.filterData,
        filterdata,
        newName,
        addExpence,
        deleteExpence,
        handleDeleteFilter,
      }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};