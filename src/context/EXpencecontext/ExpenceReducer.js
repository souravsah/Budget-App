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
      default:
        return state;
    }
  };