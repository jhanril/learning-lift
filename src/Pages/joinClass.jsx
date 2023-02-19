import React from "react";

import logo from "../assets/images/logo.png";

function JoinClass() {
  return (
    <>
      <div className="centered-page">
        <div className="centered-page-inner mx-4">
          <img src={`${logo}`} alt="" />

          <h3 className="mb-4">
            Enter code that your teacher gave you to join class
          </h3>
          <input type="text" placeholder="enter code" />
        </div>
      </div>
    </>
  );
}

export default JoinClass;
