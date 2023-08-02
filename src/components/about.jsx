import React from "react";
import footballBackground from "../assets/img/background-football.jpg";

export const About = () => {
  return (
    <div className="about full">
      <div className="image-container">
        <img src={footballBackground} alt="" />
        <div className="content">
          <h1>אודות הליגה</h1>
          <p>
            i'll be your homeroom teacher for this year. i'm very excited to teach
            and get to know everyone!
          </p>
          <p>
            let's always observe our classroom guidelines and be kind to one
            another.
          </p>
        </div>
      </div>
    </div>
  );
};
