import React, { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "./Logo/img1.png";
import { connect } from "react-redux";
import {logoutAction} from "../../Redux/actions/UserActions"
class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light text-primary  ">
        <Link className="navbar-brand " to="/">
          <img
            style={{
              width: "70px",
              height: "50px",
              boxShadow: "2px 2px 2px 2px",
            }}
            className="bg-light"
            src={img1}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          MENU
          {/* <span className="navbar-toggler-icon "></span> */}
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link seiten-style" to="/">
                Startseite
              </Link>
            </li>
         

            <li className="nav-item">
              <Link className="nav-link seiten-style" to="/Kontakt">
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link seiten-style" to="/Überuns">
                Überuns
              </Link>
            </li>
            {this.props.isAuthenticated ? (
              <li className="nav-item">
                <button onClick={() => this.props.logoutAction()} className="btn nav-link seiten-style text-danger" >
                  Abmelden
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link seiten-style" to="/anmenlung">
                    Anmelden
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link seiten-style" to="/registrieren">
                    Registrieren
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const getValuesFromReduxStore = (store) => {
  return {
    isAuthenticated: store.userRed.token,
  };
};

export default connect(getValuesFromReduxStore, {logoutAction})(Navigation);
