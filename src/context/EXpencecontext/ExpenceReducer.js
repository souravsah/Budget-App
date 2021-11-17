export default (state, action) => {
    switch (action.type) {
      case "ADD_EXPENCE":
        return {
          ...state,
          expence: action.payload.edit==false?[...state.expence, action.payload]:[...state.expence].map((item)=>{
            if(item.id===action.payload.id){
              action.payload.edit=false
              return action.payload
            }else{
              return item
            }
          })
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
            case "INITIAL_THEME":
              return{
                ...state,
                theme:{...action.payload},
              }
              case "EDIT_DATA":
                return {
                  ...state,
                  Edit :{...action.payload}
                }
            
      default:
        return state;
    }
  };