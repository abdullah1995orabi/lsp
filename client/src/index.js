import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import combineReducers from "./Redux/combineReducers";
import { createStore,  applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import decode from "jwt-decode"
const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);


if(localStorage.loginToken){
  let payload = decode(localStorage.loginToken)
  store.dispatch({
    type: "LOGIN_ACTION",
    payload: {
      token: localStorage.loginToken,
      userId: payload.userId,
      accountType: payload.accountType,
      isActive: "",

    }
  })
}



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
