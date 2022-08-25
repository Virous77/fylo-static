import React from "react";
import "./Fyloarticle.css";
import groupImg from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";

const FyloArticle = () => {
  return (
    <article className="article">
      <div className="group-img">
        <img src={groupImg} alt="group-logo" />
      </div>

      <div className="group-info">
        <h2>
          Stay Productive <br />
          wherever you are
        </h2>

        <p className="groupfirst-para">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>

        <p className="groupsecond-para">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <p className="arrow-links">
          See how Fylo works{" "}
          <span>
            <img src={arrow} alt="arrow-logo" />
          </span>
        </p>
      </div>
    </article>
  );
};

export default FyloArticle;
