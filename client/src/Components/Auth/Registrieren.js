import React, { Component } from "react";
import axios from "axios";
export default class Registrieren  extends Component {
  constructor(props) {
    super(props);
   this.state={
     nachname:"",
     vorname:"",
     email:"",
     password:"",
     accountType:"",
     plz:"",
     strnr:"",
   };
this.registerHandler=this.registerHandler.bind(this);
  }

  
  registerHandler(e) {
    axios
    .post("/api/register", this.state)
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
        <h1>Register Seite</h1>
        <p>registriere dich bei uns!</p>
        <hr />
        <label htmlFor="nachname">
          <b>Nachname</b>
        </label>
        <input
          onChange={(e)=> this.setState({nachname: e.target.value})}
          type="text"
          placeholder="Enter Nachname"
          name="nachname"
          id="nachname"
          required
        />
        <label htmlFor="vorname">
          <b>Vorname</b>
        </label>
        <input
          onChange={(e)=> this.setState({vorname: e.target.value})}
          type="text"
          placeholder="Enter Vorname"
          name="vorname"
          id="vorname"
          required
        />
        <label htmlFor="plz/ort">
          <b>plz/Ort</b>
        </label>
        <input
          onChange={(e)=> this.setState({plz: e.target.value})}
          type="text"
          placeholder="Plz/Ort"
          name="plz"
          id="plz"
          required
        />

        <label htmlFor="strassen_Nr">
          <b>Straßen Nr</b>
        </label>
        <input
          onChange={(e)=> this.setState({strnr: e.target.value})}
          type="text"
          placeholder="Nibelungenstraße 6"
          name="strnr"
          id="strnr"
          required
        />
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

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          onChange={(e) => this.setState({ password: e.target.value })}
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
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

        <button onClick={this.registerHandler} className="registerbtn">
          Registrieren
        </button>
      </div>
    );
  }
}
