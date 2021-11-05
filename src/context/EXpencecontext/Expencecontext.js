import React, { createContext, useReducer } from "react";
import ExpenceReducer from "./ExpenceReducer";
const initialState = {
  expence: [],
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

  return (
    <GlobalContext.Provider
      value={{
        expence: state.expence,
        addExpence,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};