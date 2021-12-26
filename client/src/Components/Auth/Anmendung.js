import React, { Component } from "react";
import axios from "axios";

export default class Anmendung extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      accountType: "",
    };
    this.anmeldenHandler = this.anmeldenHandler.bind(this);
  }

  anmeldenHandler(e) {
    axios
      .post("/api/anmelden", this.state)
      .then((x) => x.data)
      .then((data) => {
       alert(data.message)
      }).catch(err => {
        alert(err.response.data.message)
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Anmeldung</h1>
        <p>melde dich an</p>
        <hr />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          onChange={(e) => this.setState({ email: e.target.value })}
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          onChange={(e) => this.setState({ password: e.target.value })}
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />
        <select
          // onChange={function(e){console.log(e.target.value)}}
          onChange={(e) => this.setState({ accountType: e.target.value })}
          className=" auswahl form-select-lg mb-3 col-12 "
          aria-label=".form-select-lg example"
        >
          <option defaultValue>wählen sie Ihren Status aus</option>
          <option value={"trainer"}>Trainer</option>
          <option value={"auszubildender"}>Auszubildender</option>
          {/* <option value={3}>Trainer und Auszubildener</option> */}
        </select>

        <button onClick={this.anmeldenHandler} className="registerbtn">
          Anmelden
        </button>
      </div>
    );
  }
}
