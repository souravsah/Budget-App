export default (state, action) => {
    switch (action.type) {
      case "ADD_EXPENCE":
        return {
          ...state,
          expence: [...state.expence, action.payload],
        };
      default:
        return state;
    }
  };