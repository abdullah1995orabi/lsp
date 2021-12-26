import React, { Component } from 'react'
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
// import img3 from "./images/img3.jpg";
// import img4 from "./images/img4.jpg";
export default class Überuns extends Component {
    render() {
        return (
            <div>
             <img style={{height:"200px"}} src={img1} className="rounded float-start" alt="..." />
             <img style={{height:"200px"}} src={img2} className="rounded float-start" alt="..." />
          </div>
          
        );
      }
    };