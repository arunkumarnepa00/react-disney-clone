import React from "react";
import "./card.css";

export default function Cards() {
  return (
    <div className="d-flex flex-row justify-content-around flex-wrap align-content-between">

      <div className="card hoverMe m-auto" style={{ width: "12rem", backgroundColor: "#1f2a42",height:"7rem"}}>
        <video className="hidden rounded" autoPlay={true} loop={true} playsInline={true} muted width="100%" height="100%">
          <source src={require("../videos/disney.mp4")} type="video/mp4"></source>
        </video>
        <img src={require("../images/viewers-disney.png")} className="card-img-top foreground" alt="..." />
      </div>

      <div className="card hoverMe m-auto" style={{ width: "12rem", backgroundColor: "#1f2a42",height:"7rem"}}>
        <video className="hidden rounded" autoPlay={true} loop={true} playsInline={true} muted width="100%" height="100%">
          <source src={require("../videos/star-wars.mp4")} type="video/mp4"></source>
        </video>
        <img src={require("../images/viewers-starwars.png")} className="card-img-top foreground" alt="..."/>
      </div>

      <div className="card hoverMe m-auto" style={{ width: "12rem", backgroundColor: "#1f2a42",height:"7rem" }}>
        <video className="hidden rounded" autoPlay={true} loop={true} playsInline={true} muted width="100%" height="100%">
          <source src={require("../videos/marvel.mp4")} type="video/mp4"></source>
        </video>
        <img src={require("../images/viewers-marvel.png")} className="card-img-top foreground" alt="..."/>
      </div>
      
      <div className="card hoverMe m-auto" style={{ width: "12rem", backgroundColor: "#1f2a42",height:"7rem"}}>
        <video className="hidden rounded" autoPlay={true} loop={true} playsInline={true} muted width="100%" height="100%">
          <source
            src={require("../videos/national-geographic.mp4")}
            type="video/mp4"
          ></source>
        </video>
        <img
          src={require("../images/viewers-national.png")}
          className="card-img-top foreground"
          alt="..."
        />
      </div>
      <div className="card hoverMe m-auto" style={{ width: "12rem", backgroundColor: "#1f2a42",height:"7rem"}}>
        <video className="hidden rounded" autoPlay={true} loop={true} playsInline={true} muted width="100%" height="100%">
          <source
            src={require("../videos/pixar.mp4")}
            type="video/mp4"
          ></source>
        </video>
        <img
          src={require("../images/viewers-pixar.png")}
          className="card-img-top foreground"
          alt="..."
        />
      </div>
     
     
    </div>
  );
}
