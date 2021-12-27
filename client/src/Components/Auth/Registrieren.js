import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import {ErrorMessage} from "../Messages/Messages"
export default class Registrieren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nachname: "",
        vorname: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        accountType: "",
        plz: "",
        strnr: "",
      },
      redirect: false,
      errors: {},
    };
    this.registerHandler = this.registerHandler.bind(this);
  }

  validate(data) {
    let error = {};
    if (!data.vorname) error.vorname = "fistName is required!";
    if (!data.nachname) error.nachname = "lastName is required!";
    if (!data.accountType) error.accountType = "accountType is required!";
    if (!data.plz) error.plz = "plz is required!";
    if (!data.strnr) error.strnr = "strnr is required!";

    if (!data.email) error.email = "email is required!";
    if (!data.password) error.password = "password is required!";
    if (this.state.data.password !== this.state.data.passwordConfirmation)
      error.passwordConfirmation = "password did not matched!";

    return error;
  }

  registerHandler(e) {
    let errors = this.validate(this.state.data);
    this.setState({ errors: errors });

    if (Object.keys(errors).length === 0) {
      axios
        .post("/api/register", this.state.data)
        .then((x) => x.data)
        .then((data) => {
          this.setState({ redirect: true });
          toast(data.message);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.redirect && <Navigate to="/" />}
        <h1>Register Seite</h1>
        <p>registriere dich bei uns!</p>
        <hr />
        <label htmlFor="nachname">
          {this.state.errors.nachname && <ErrorMessage message={this.state.errors.nachname}/>}
        
          <b>Nachname</b>
        </label>
        <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, nachname: e.target.value },
            })
          }
          type="text"
          placeholder="Enter Nachname"
          name="nachname"
          id="nachname"
          required
        />
        <label htmlFor="vorname">
        {this.state.errors.vorname && <ErrorMessage message={this.state.errors.vorname}/>}

          <b>Vorname</b>
        </label>
        <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, vorname: e.target.value },
            })
          }
          type="text"
          placeholder="Enter Vorname"
          name="vorname"
          id="vorname"
          required
        />
        <label htmlFor="plz/ort">
        {this.state.errors.plz && <ErrorMessage message={this.state.errors.plz}/>}

          <b>plz/Ort</b>
        </label>
        <input
          onChange={(e) =>
            this.setState({ data: { ...this.state.data, plz: e.target.value } })
          }
          type="text"
          placeholder="Plz/Ort"
          name="plz"
          id="plz"
          required
        />

        <label htmlFor="strassen_Nr">
        {this.state.errors.strnr && <ErrorMessage message={this.state.errors.strnr}/>}

          <b>Straßen Nr</b>
        </label>
        <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, strnr: e.target.value },
            })
          }
          type="text"
          placeholder="Nibelungenstraße 6"
          name="strnr"
          id="strnr"
          required
        />
        <label htmlFor="email">
        {this.state.errors.email && <ErrorMessage message={this.state.errors.email}/>}

          <b>Email</b>
        </label>
        <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, email: e.target.value },
            })
          }
          type="email"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />

        <label htmlFor="password">
        {this.state.errors.password && <ErrorMessage message={this.state.errors.password}/>}

          <b>Password</b>
        </label>
        <input
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, password: e.target.value },
            })
          }
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          required
        />

        <label htmlFor="password">
        {this.state.errors.passwordConfirmation&& <ErrorMessage message={this.state.errors.passwordConfirmation}/>}

          <b>Password Wiederholung</b>
        </label>
        <input
          onChange={(e) =>
            this.setState({
              data: {
                ...this.state.data,
                passwordConfirmation: e.target.value,
              },
            })
          }
          type="password"
          placeholder="Password Wiederholung"
          name="passwordConfirmation"
          id="passwordConfirmation"
          required
        />

{this.state.errors.accountType && <ErrorMessage message={this.state.errors.accountType}/>}

        <select
          // onChange={function(e){console.log(e.target.value)}}
          onChange={(e) =>
            this.setState({
              data: { ...this.state.data, accountType: e.target.value },
            })
          }
          className=" auswahl form-select-lg mb-3 col-12 "
          aria-label=".form-select-lg example"
        >
          <option defaultValue>wählen sie Ihren Status aus</option>
          <option value={"trainer"}>Trainer</option>
          <option value={"auszubildender"}>Auszubildender</option>
          {/* <option value={3}>Trainer und Auszubildener</option> */}
        </select>

        <button onClick={this.registerHandler} className="registerbtn">
          Registrieren
        </button>
      </div>
    );
  }
}
