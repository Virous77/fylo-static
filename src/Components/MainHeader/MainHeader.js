import React from "react";
import "./Mainheader.css";
import mainImg from "../images/illustration-intro.png";

const MainHeader = () => {
  return (
    <header className="header">
      <img src={mainImg} alt="head-img" className="head-img" />

      <div className="header-info">
        <h1 className="header-title">
          All your files in one secure location, accessible anywhere.
        </h1>

        <p className="header-para">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers
        </p>

        <button className="header-button">Get Started</button>
      </div>
    </header>
  );
};

export default MainHeader;
