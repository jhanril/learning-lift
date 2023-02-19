import React from "react";

import teaching from "../assets/svg/teaching.svg";
import wave1 from "../assets/svg/wave1.svg";
import Createfuture from "../assets/images/createfuture.jpg";
function whatis() {
  return (
    <>
      <div className="container-w mt-5 row">
        <div className="col-lg-6 col-md-6 col-sm-12" data-aos="zoom-in-right">
          <img src={`${teaching}`} className="hero-home-img" alt="" />
          {/* <img src={`${onlineLearning}`} className="hero-home-img" alt="" /> */}
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
          data-aos="zoom-in-left"
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
      </div>

      <div data-aos="fade-up">
        <img src={`${wave1}`} alt="" />
      </div>

      <div className="bg-color-lb text-light">
        <div className="container-w py-5 row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
            data-aos="zoom-in"
          >
            <h1 className="text-center">Vision</h1>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
            data-aos="zoom-in"
          >
            <p className="align-justify">
              To become the leading online learning platform that transforms the
              way students and educators approach learning and teaching,
              enabling them to achieve their full potential and fulfill their
              goals.
            </p>
          </div>
        </div>

        <div className="container-w py-5 row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
            data-aos="zoom-in"
          >
            <h1 className="text-center">Mission</h1>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
            data-aos="zoom-in"
          >
            <p className="align-justify">
              To empower students and educators with innovative tools and
              resources that enhance the learning experience and help bridge the
              learning gap.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-down">
        <img className="flip-v" src={`${wave1}`} alt="" />
      </div>

      <div className="container-w py-5 row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
          data-aos="zoom-in"
        >
          <h4 className="align-justify">
            We believe that education is the key to unlocking your full
            potential and creating a better future for yourself and for the
            world. At Learning Lift, we're committed to providing you with the
            tools and resources you need to succeed in your academic journey and
            beyond.
          </h4>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
          data-aos="zoom-in"
        >
          <img className="create-future" src={`${Createfuture}`} alt="" />
        </div>
      </div>
    </>
  );
}

export default whatis;
