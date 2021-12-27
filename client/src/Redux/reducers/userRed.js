let initialState = {
  token: "",
  userId: "",
};

export default function userRed (state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN_ACTION":
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      }
    case "LOGOUT_ACTION":
      return {
        ...state,
        token: "",
        userId: "",
      }
      
    default:
      return state
      
  }
}
