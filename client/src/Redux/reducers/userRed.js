let initialState = {
  token: "",
  userId: "",
  accountType:"",
  isActive: "active",

};

export default function userRed(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN_ACTION":
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        accountType: action.payload.accountType,
        isActive: action.payload.isActive,

      };

    case "REGISTER_ACTION":
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        accountType: action.payload.accountType,
        isActive: action.payload.isActive,

      };

    case "LOGOUT_ACTION":
      return {
        ...state,
        token: "",
        userId: "",
        accountType: "",
        isActive: "active"
      };

    default:
      return state;
  }
}
