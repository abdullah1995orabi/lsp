import UserApi from "../API/UserApi";
import { toast } from "react-toastify";

export const loginAction = (data) => (dispatch) => {
  return UserApi.user.login(data).then((data) => {
    dispatch({
      type: "LOGIN_ACTION",
      payload: {
        token: data.loginData.token,
        userId: data.loginData.userId,
        accountType: data.loginData.accountType,
        isActive: "",
      },
    });
    localStorage.setItem("loginToken", data.loginData.token);
    return data;
  });
};

export const registerAction = (data) => (dispatch) => {
  return UserApi.user.register(data).then((data) => {
    dispatch({
      type: "REGISTER_ACTION",
      payload: {
        token: data.loginData.token,
        userId: data.loginData.userId,
        accountType: data.loginData.accountType,
        isActive: "",
      },
    });
    localStorage.setItem("loginToken", data.loginData.token);
    return data;
  });
};
export const forgetPasswordAction = (data) => () => {
  return UserApi.user.forgetPassword(data).then(data => {
    return data
  })
}

export const resetPasswordAction = (data) => () => {
  return UserApi.user.resetPassword(data).then(data => {
    return data
  })
}

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: "LOGOUT_ACTION",
  });
  localStorage.removeItem("loginToken");
  toast("see you later!");
};
