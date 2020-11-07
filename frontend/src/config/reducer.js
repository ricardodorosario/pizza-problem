const initialState = {
  inputFilter: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_FILTER_SAVED":
      return { ...state, inputFilter: action.payload };
 
    default:
      return state;
  }
};
