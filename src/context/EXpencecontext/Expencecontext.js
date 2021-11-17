import React, { createContext, useReducer } from "react";
import ExpenceReducer from "./ExpenceReducer";
const initialState = {
  expence: [],
  newname:"Budget App",
  filterData:[],
  id:"",
  theme:{
    Todoform:{
      backgroundColor:"#ccc"
    },
    ExpenseFilterform:{
      backgroundColor:"#ccc"
    },
    Profile:{
      backgroundColor:"#ccc",
      color:"black"
    },
    Navbar:{
      color:"white"
    },
    main:{
      backgroundColor:"white"
    },
    Expensefilterform:{
      color:"black"
  },
  ExpenseItemList:{
    color:"black"
  },
  themebox:{
    color:"black"
  },
  Appearance:{
    color:"black"
  }


  },
  Edit:{

    Utilities:"",
amount:"",
date:"",
textarea:"",
id:"",
edit:false
  }
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
const initialTheme= (text) =>{
  dispatch({
    type:"INITIAL_THEME",
    payload:text,
  });
};
const editTodo = (data) =>{
  dispatch({
    type:"EDIT_DATA",
    payload:data,
  });
};

  return (
    <GlobalContext.Provider
      value={{
        theme:state.theme,
        expence: state.expence,
        newname:state.newname,
        filterData:state.filterData,
        Edit:state.Edit,
        filterdata,
        newName,
        addExpence,
        deleteExpence,
        handleDeleteFilter,
        initialTheme,
        editTodo
      }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};