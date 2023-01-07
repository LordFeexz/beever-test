const initialState = { quote: "", fav: [], myQuote: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getQoute":
      return {
        ...state,
        quote: action.payload,
      };

    case "getFav":
      return {
        ...state,
        fav: action.payload,
      };

    case "addQuote":
      return {
        ...state,
        myQuote: action.payload,
      };

    default:
      return state;
  }
};
