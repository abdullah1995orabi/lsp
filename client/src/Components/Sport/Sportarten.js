import React, { Component } from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

export default class Sportarten extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row row-cols-2 row-colsmd-4"
        >
          <div className="col-4  ">
            <img height="300px" width="300px" src={img1} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Gruppensport in Freiereume</h5>
              <p className="card-text">Gruppensport</p>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Komment
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-success text-primary "
              >
                Teilnehmen
              </button>
            </div>
            <div className="card-footer">
              <small className="text-muted">anfängt 1. Jenuar 2021</small>
            </div>
          </div>
          <div className="col-4">
            <img height="300px" width="300px" src={img2} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Fahrad im Gruppe fahren</h5>
              <p className="card-text">es wird dich spaß machen</p>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Komment
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-success text-primary "
              >
                Teilnehmen
              </button>
            </div>
            <div className="card-footer">
              <small className="text-muted">anfängt 1. Jenuar 2021</small>
            </div>
          </div>
          <div className="col-4">
            <img height="300px" width="300px" src={img3} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">nimme die Zeit für dich </h5>
              <p className="card-text">eine Spezielle Trainer für dich da</p>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Komment
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-success text-primary "
              >
                Teilnehmen
              </button>
            </div>
            <div className="card-footer">
              <small className="text-muted">Jeder Zeit verfügbar</small>
            </div>
          </div>
          <div className="card col-4">
            <img height="300px" width="300px" src={img4} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">eine Spezielle Trainer für dich da</p>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Komment
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button
                type="button"
                className="btn btn-outline-success text-primary "
              >
                Teilnehmen
              </button>
            </div>
            <div className="card-footer">
              <small className="text-muted">anfängt 1. Jenuar 2021</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
