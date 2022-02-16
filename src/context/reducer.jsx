export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        token: action.token,
      };
    case "logout":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export const initialState = {
  token: null,
};
