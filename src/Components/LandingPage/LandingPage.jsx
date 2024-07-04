import React from "react";
import "./LandingPage.css";
import design from "../../../public/Images/design.png";
import Libstude from "../../../public/Images/Libstude.png";

const LandingPage = () => {
  return (
    <>
      <div className="mainDiv">
        <div className="textContent">
          <h1 className="heading">
            Leagends <br />
            <span className="span">library</span>
          </h1>
          <p>
            Discover the world of knowledge, adventure, and <br />community at legrnds
            library.
          </p>
          <p>
            We are more than just a collection of books; we are a <br />hub for
            learning, creativity and connection.
          </p>
          <input type="button" className="btn1" value="Book your seat now" />
        </div>
        <div className="imgContents">
          <img src={design} alt="" />
        </div>
      </div>
        <div className="img">
            <img src={Libstude} alt="" />
        </div>
    </>
  );
};

export default LandingPage;
