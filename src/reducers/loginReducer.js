export default (state, action) => {
  switch (action.type) {
    case "login":
      return {
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};
