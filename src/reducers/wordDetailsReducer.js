
const initialState = {
    wordDetails: null,
  };
  
  const wordDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_WORD_DETAILS":
        return {
          ...state,
          wordDetails: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default wordDetailsReducer;
  