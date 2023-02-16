import React from "react";

import teaching from "../assets/svg/teaching.svg";
import onlineLearning from "../assets/svg/online_learning.svg";

function whatis() {
  return (
    <>
      <div className="container-w mt-5 row">
        <div
          className="container-w50 col-flex-center gap"
          data-aos="zoom-in-right"
        >
          <h1 className="text-center">
            Achieve your academic goals and teach with ease
          </h1>
          <p className="align-justify">
            <strong>Learning Lift </strong> is a comprehensive online learning
            platform designed to bridge the learning gap between students and
            educators. We provide a wide range of features and tools to help
            students and teachers enhance their learning and teaching
            experience, respectively.
          </p>
          <div className="row">
            <div className="col-md-8">
              <h5>
                Join Learning Lift today and discover a new way of learning
              </h5>
            </div>
            <div className="col-md-4">
              <button className="btn-rounded btn-large">
                <span>Join now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container-w50" data-aos="zoom-in-left">
          <img src={`${teaching}`} className="hero-home-img" alt="" />
          {/* <img src={`${onlineLearning}`} className="hero-home-img" alt="" /> */}
        </div>
      </div>
    </>
  );
}

export default whatis;
