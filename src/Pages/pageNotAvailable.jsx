import React from "react";

import Nothing from "../assets/svg/nothing.svg";

function pageNotAvailable() {
  return (
    <>
      <div className="centered-page">
        <div className="centered-page-inner mx-4">
          <img src={`${Nothing}`} alt="" />
          <h4 className="mt-5 mb-3 pt-5">Sorry for inconvenience</h4>
          <h5>
            We appreciate your desired to explore but this feature is not
            available yet. Please come back later.
          </h5>
        </div>
      </div>
    </>
  );
}

export default pageNotAvailable;
