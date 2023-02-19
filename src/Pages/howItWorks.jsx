import React from "react";

import online_connection from "../assets/svg/online_connection.svg";
import interactiveSite from "../assets/svg/interactive-site.svg";
import knowledge from "../assets/svg/knowledge.svg";
import readbook from "../assets/svg/readbook.svg";

function HowItWorks() {
  return (
    <>
      <div className="container-w mt-5 row">
        <div className="col-lg-6 col-md-6 col-sm-12" data-aos="zoom-in-right">
          <img src={`${online_connection}`} className="hero-home-img" alt="" />
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap pt-5"
          data-aos="zoom-in-left"
        >
          <h1>
            Learning Lift is a revolutionary platform designed to help students
            and teachers
          </h1>
          <p className="">
            Our state-of-the-art technology ensures that you have a seamless
            learning experience, no matter where you are or what device you're
            using. With Learning Lift, you have the power to create your own
            future and take control of your academic journey.
          </p>
        </div>
      </div>

      <div className="mt-5 py-5 text-center bg-color-lb">
        <h2 data-aos="zoom-in">How it works</h2>
        <p data-aos="zoom-in">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ducimus adipisci dolorem molestias porro a?</p>
      </div>

      <div className="container-w row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
          data-aos="fade-right"
        >
          <h4 className="align-justify">Make every lessons interactive</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            delectus eveniet repudiandae error? Voluptate, suscipit eius nemo
            mollitia voluptatum facilis veritatis maiores alias quaerat
            assumenda molestiae labore, hic aspernatur cupiditate.
          </p>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
          data-aos="fade-left"
        >
          <img className="img-circle-hiw" src={`${interactiveSite}`} alt="" />
        </div>
      </div>

      <div className="container-w row">
      <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
          data-aos="fade-right"
        >
          <img className="img-circle-hiw-r" src={`${knowledge}`} alt="" />
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
          data-aos="fade-left"
        >
          <h4 className="align-justify">Make every lessons interactive</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            delectus eveniet repudiandae error? Voluptate, suscipit eius nemo
            mollitia voluptatum facilis veritatis maiores alias quaerat
            assumenda molestiae labore, hic aspernatur cupiditate.
          </p>
        </div>
      </div>

      <div className="container-w row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
          data-aos="fade-right"
        >
          <h4 className="align-justify">Make every lessons interactive</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            delectus eveniet repudiandae error? Voluptate, suscipit eius nemo
            mollitia voluptatum facilis veritatis maiores alias quaerat
            assumenda molestiae labore, hic aspernatur cupiditate.
          </p>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap"
          data-aos="fade-left"
        >
          <img className="img-circle-hiw" src={`${readbook}`} alt="" />
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
