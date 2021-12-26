import React, { Component } from 'react'
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
export default class Carousel extends Component {
    render() {
        return (
            <div 
         
            id="carouselExampleIndicators"
            className="carousel slide container"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img style={{height:"600px"}} className="d-block w-100" src={img1} alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Erste Angebot</h5>
                  <p>
                  Stretching im Sportunterricht
                  
                  </p>
                </div>
              </div>
              <div className="carousel-item ">
                <img style={{height:"600px"}} className="d-block w-100" src={img2} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Zweite Angebot</h5>
                  <p>
                  dies sind Elemente, die den Schwimmunterricht so attraktiv machen. 
                  ... meister innen, Schwimmausbilderinnen, Schülerinnen etc. stets mit ein.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img style={{height:"600px"}} className="d-block w-100" src={img3} alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Driete Angebot</h5>
                  <p>
                  Athletik-Training ist das Training für eine spezielles Sportliches ereigniss für deine Sportart, 
                  Fußball, Football, Handball, Basketball, Ringen und viele mehr.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        )
    }
}
