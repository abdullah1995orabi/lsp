import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";

// Components
import Anmenlung from "./Components/Auth/Anmendung";
import Registrieren from "./Components/Auth/Registrieren";
import ForgetPassword from "./Components/Auth/ForgetPassword";
import ResetPassword from "./Components/Auth/ResetPassword"
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Sportarten from "./Components/Sport/Sportarten";
import SportHinZufugen from "./Components/Sport/SportHinZufugen";

import Überuns from "./Components/Überuns/Überuns";
import Kontakt from "./Components/Kontakt/Kontakt";
// import Carousel from "./Components/Carousel/Carousel";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import Kurse from "./Components/Sport/Kurse";

class App extends React.Component {
  //this.setState({ isActive: this.state.isActive === "" ? "active" : "" });

  render() {
    return (
      <div className="wrapper">
        <ToastContainer autoClose={3000} />
        <nav id="sidebar" className={this.props.isActive}>
          <div className="sidebar-header">
            <h3>Dashboard</h3>
          </div>

          <ul className="list-unstyled components">
            <p></p>
            {/* <li className="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Sportarten
              </a>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">list Sportarten</a>
                </li>
                <li>
                  <a href="#">Sportarten hinzufügen</a>
                </li>
                <li>
                  <a href="#">Home 3</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="#">About</a>
            </li>

            {this.props.isAuthenticated && (
              <li>
                <Link className="nav-link seiten-style" to="/sportarten">
                  Sportarten
                </Link>
              </li>
            )}

            {this.props.isAuthenticated  && (
                <li>
                  <Link className="nav-link seiten-style" to="/sportarthinzufugen">
                    Sporthinzufügen
                  </Link>
                </li>
              )}

            {this.props.isAuthenticated  && (
                <li>
                  <Link className="nav-link seiten-style" to="/kurse">
                    Kurse
                  </Link>
                </li>
              )}
          </ul>
        </nav>
        <div id="content">
          <nav s className="navbar navbar-expand-lg navbar-light bg-light">
            <div style={{ width: "100%" }}>
              <Navigation />
              <br />

              {/* <Carousel /> */}
              <br />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anmenlung" element={<Anmenlung />} />
                <Route path="/registrieren" element={<Registrieren />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                 <Route path="/resetpasswordtoken/:token" element={<ResetPassword />} /> 
                {/* http://localhost:3000/resetpasswordtoken/eyJhbGzuf6n_OnUfXSVE1YmHeVFQaYwisbU */}
                <Route
                  path="/sportarten"
                  element={
                    this.props.isAuthenticated ? (
                      <Sportarten />
                    ) : (
                      <Navigate to="/anmenlung" />
                    )
                  }
                />

                <Route
                  path="/sportarthinzufugen"
                  element={
                    this.props.isAuthenticated /* && this.props.accountType === "..." */
                     ? (
                      <SportHinZufugen />
                    ) : (
                      <Navigate to="/anmenlung" />
                    )
                  }
                />
                <Route
                  path="/kurse"
                  element={
                    this.props.isAuthenticated
                     ? (
                      <Kurse />
                    ) : (
                      <Navigate to="/anmenlung" />
                    )
                  }
                />

                <Route path="/überuns" element={<Überuns />} />
                <Route path="/kontakt" element={<Kontakt />} />
              </Routes>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
const getValuesFromReduxStore = (store) => {
  return {
    isAuthenticated: store.userRed.token,
    accountType: store.userRed.accountType,
    isActive: store.userRed.isActive,
  };
};

export default connect(getValuesFromReduxStore)(App);
