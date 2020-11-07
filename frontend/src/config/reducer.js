const initialState = {
  loggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, loggedIn: action.payload };

    default:
      return state;
  }
};
