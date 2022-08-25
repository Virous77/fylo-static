import React from "react";
import "./Emailmodal.css";

const EmailModal = () => {
  return (
    <section className="modal">
      <div className="modal-info">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.{" "}
        </p>
      </div>

      <div className="email-section">
        <input type="email" />
        <button>Get Started For Free</button>
      </div>
    </section>
  );
};

export default EmailModal;
