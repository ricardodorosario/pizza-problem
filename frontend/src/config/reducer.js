const initialState = {
  loggedIn: false,
  rankingChart: null,
  userLogged: "",
  votes: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, loggedIn: action.payload };
    case "USER_LOGGED":
      return {
        ...state,
        userLogged: action.payload.username,
        votes: action.payload.votes,
      };
    case "SET_RANKING_CHART":
      return { ...state, rankingChart: action.payload };
    case "VOTED":
      return { ...state, votes: action.payload.votes };

    default:
      return state;
  }
};
