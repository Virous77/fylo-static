import React from "react";
import "./Fylodeatils.css";
import store from "../images/icon-any-file.svg";
import files from "../images/icon-access-anywhere.svg";
import realTime from "../images/icon-collaboration.svg";
import security from "../images/icon-security.svg";

const FyloDetails = () => {
  return (
    <section className="section">
      <div className="first-details">
        <div className="files">
          <img src={files} alt="files-logo" />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>

        <div className="files security-name">
          <img src={security} alt="security-logo" />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
      </div>

      <div className="first-details">
        <div className="files">
          <img src={realTime} alt="files-logo" />
          <h2>Real time Collaoration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>

        <div className="files security-name">
          <img src={store} alt="security-logo" />
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared
          </p>
        </div>
      </div>
    </section>
  );
};

export default FyloDetails;
