import React, { Component } from "react";
import img1 from "./images/img1.jpg";
export default class Kontakt extends Component {
  render() {
    return (
      <div classname="">
        <div className="card bg-dark text-dark">
          <img src={img1} className="img-fluid " alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title text-light">
              uns zu kontaktieren ist der ersten halbe Marrathons deines Leben
            </h5>
            <p className="card-text" />
            <p className="card-text" />
          </div>
        </div>
        <div className="container">
          <div className="input-group m-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Vorname Nachname"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group m-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="E-Mail"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="row">
            <div className="input-group m-3 col-4">
              <span className="input-group-text bg-success" id="basic-addon3">
                PLZ
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
            <div className="input-group m-3 col-4">
              <span className="input-group-text bg-success col-2">TEL</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
          </div>
          <select
            className="auswahl form-select text-success w-100 m-3"
            aria-label=".form-select-lg example"
          >
            <option defaultValue>wählen Sie Ihren Status aus</option>
            <option value={1}>Trainer</option>
            <option value={2}>Auszubildender</option>
            <option value={3}>Trainer und Auszubildener</option>
          </select>

          <div className="input-group m-3">
            <span className="input-group-text bg-success">Nachricht</span>
            <textarea
              className="form-control  w-100"
              aria-label="With textarea"
              defaultValue={""}
            />

            <button type="button" className="btn btn-success col-11 m-1 ">
              Senden
            </button>
          </div>
        </div>
      </div>
    );
  }
}
