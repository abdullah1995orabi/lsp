import UserApi from "../API/UserApi";
import { toast } from "react-toastify";

export const loginAction = (data) => (dispatch) => {
  return UserApi.user.login(data).then((data) => {
    console.log(data);
    dispatch({
      type: "LOGIN_ACTION",
      payload: {
        token: data.loginData.token,
        userId: data.loginData.userId,
      },
    });
    localStorage.setItem("loginToken", data.loginData.token);
    return data;
  });
};

export const logoutAction = () => (dispatch) => {
  dispatch({
    type: "LOGOUT_ACTION",
  });
  localStorage.removeItem("loginToken");
  toast("see you later!")
};
