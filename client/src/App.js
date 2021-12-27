import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Anmenlung from "./Components/Auth/Anmendung";
import Registrieren from "./Components/Auth/Registrieren";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Sportarten from "./Components/Sport/Sportarten";
import Überuns from "./Components/Überuns/Überuns";
import Kontakt from "./Components/Kontakt/Kontakt";
// import Carousel from "./Components/Carousel/Carousel";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
class App extends React.Component {
  componentDidMount() {
    // let favicon = document.getElementById("favicon")
    // favicon = "/static/media/img1.3878a86d.png"
  }
  render() {
    return (
      <div className="container-fluid">
        <ToastContainer autoClose={3000} />
        <Navigation />
        <br />
        <br />
        <br />

        {/* <Carousel /> */}
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anmenlung" element={<Anmenlung />} />
          <Route path="/registrieren" element={<Registrieren />} />

          <Route
            path="/Sportarten"
            element={
              this.props.isAuthenticated ? (
                <Sportarten />
              ) : (
                <Navigate to="/anmenlung" />
              )
            }
          />

          <Route path="/überuns" element={<Überuns />} />
          <Route path="/Kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    );
  }
}
const getValuesFromReduxStore = (store) => {
  return {
    isAuthenticated: store.userRed.token,
  };
};

export default connect(getValuesFromReduxStore)(App);
