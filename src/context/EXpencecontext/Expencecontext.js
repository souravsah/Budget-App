import React, { createContext, useReducer } from "react";
import ExpenceReducer from "./ExpenceReducer";
const initialState = {
  expence: [],
  newname:"Budget App",
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


  return (
    <GlobalContext.Provider
      value={{
        expence: state.expence,
        newname:state.newname,
        newName,
        addExpence,
      }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};