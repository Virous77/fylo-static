import React from "react";
import "./Authors.css";
import firstAuthor from "../images/profile-1.jpg";
import secondAuthor from "../images/profile-2.jpg";
import thirdAuthor from "../images/profile-3.jpg";

const Authors = () => {
  return (
    <section className="authors-section">
      <div className="first-author">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>

        <div className="author-data">
          <img src={firstAuthor} alt="admin" />
          <div className="author-name">
            <h2>Satish Patel</h2>
            <p>Founder & CEO,Huddle</p>
          </div>
        </div>
      </div>

      <div className="first-author">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>

        <div className="author-data">
          <img src={secondAuthor} alt="admin" />
          <div className="author-name">
            <h2>Bruce Mckenzie</h2>
            <p>Founder & CEO,Huddle</p>
          </div>
        </div>
      </div>

      <div className="first-author">
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>

        <div className="author-data">
          <img src={thirdAuthor} alt="admin" />
          <div className="author-name">
            <h2>Iva Boyd</h2>
            <p>Founder & CEO,Huddle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
