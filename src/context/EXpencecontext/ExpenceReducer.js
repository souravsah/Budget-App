export default (state, action) => {
    switch (action.type) {
      case "ADD_EXPENCE":
        return {
          ...state,
          expence: [...state.expence, action.payload],
        };
        case "ADD_NAME":
          return {
            ...state,
            newname:action.payload,
          }
          case "FILTER_DATA":
            return{
              ...state,
              filterData:[...state.expence].filter((item)=>{
              if(item.Utilities===action.payload.searchInput ||
              item.amount===action.payload.amount ||
              item.date ===action.payload.date
              )
              return item;
            })
            }
          case "DELETE_EXPENCE":
            return{
              ...state,
              expence:[...state.expence].filter((item)=>item.id!=action.payload)
            } 
          case "DELETE_DATAA":
            return{
              ...state,
              filterData:[...state.expence].filter((item)=>item.id!=action.payload)
            }
            
      default:
        return state;
    }
  };