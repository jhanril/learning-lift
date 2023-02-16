import React from "react";
import "./home.css";

import illustration from "../assets/images/illustrationlearninglift.jpg";
import wave1 from "../assets/svg/wave1.svg";
import explore from "../assets/images/explore.png";
import learn from "../assets/images/learn.png";
import apply from "../assets/images/apply.png";
import interativeSlides from "../assets/icons/interactive-slides.png";
import interactiveVideos from "../assets/icons/interactive-videos.png";
import gamification from "../assets/icons/gamification.png";
import activties from "../assets/icons/activities.png";

function content() {
  return (
    <>
      <div className="container-w mt-5 row">
        <div className="container-w50" data-aos="zoom-in-right">
          <img src={`${illustration}`} className="hero-home-img" alt="" />
        </div>
        <div
          className="container-w50 col-flex-center gap"
          data-aos="zoom-in-left"
        >
          <h1>Your Everyday English</h1>
          <p className="">
            The best way to learn and teach for students and teachers. With
            interactive, personalized, and accessible learning tools, you can
            achieve your learning goals. For teachers,{" "}
            <strong> Learning lift </strong> offers collaborative teaching,
            assessment tools, and a comprehensive learning management system.
          </p>
          <button className="btn-rounded btn-large">
            <span>LEARN MORE</span>
          </button>
        </div>
      </div>
      <div data-aos="fade-up">
        <img src={`${wave1}`} alt="" />
      </div>

      <div className="bg-color-lb bg-radius">
        <div className="container-w pt-0 row">
          <div className="col-flex-center text-light">
            <h2 className="" data-aos="fade-up" data-aos-duration="1000">
              Discover the best ways to teach
            </h2>
            <ul className="container-bestway">
              <li data-aos="fade-down-right">
                <span>
                  <img src={`${interativeSlides}`} alt="" />{" "}
                </span>
                <h3>Interactive Slides</h3>
                <p>
                  Interactive slide templates that you can customize to suit
                  your teaching needs. You can add images, videos, quizzes, and
                  other interactive elements to make your slides more engaging
                  and effective.
                </p>
              </li>
              <li data-aos="fade-down-left">
                <span>
                  <img src={`${interactiveVideos}`} alt="" />{" "}
                </span>
                <h3>Interactive Videos</h3>
                <p>
                  Create interactive videos that allow your students to engage
                  with the material in real-time. Interactive videos are also a
                  great way to accommodate different learning styles and engage
                  students who may struggle with traditional teaching methods.
                </p>
              </li>
              <li className="mt-5" data-aos="fade-up-right">
                <span>
                  <img src={`${activties}`} alt="" />{" "}
                </span>
                <h3>Interactive Activities</h3>
                <p>
                  Create real-world scenarios and other interactive activities
                  that provide students with practical experience and help them
                  apply what they have learned.
                </p>
              </li>
              <li className="mt-5" data-aos="fade-up-left">
                <span>
                  <img src={`${gamification}`} alt="" />{" "}
                </span>
                <h3>Gamification</h3>
                <p>
                  Gamification is a fun and effective way to engage your
                  students and make learning more enjoyable.Create games,
                  puzzles, and other interactive activities that challenge your
                  students and motivate them to learn.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="flip-v">
          <img src={`${wave1}`} alt="" />
        </div>
      </div> */}

      <div className="container-w mt-5 flex-row">
        <div className="row justify-content-center gap">
          <h2 className="text-center mt-3">Boost your learning</h2>
          <div className="card" data-aos="flip-left">
            <div className="card-header col-flex-center justify-content-around">
              <h2 className="title">Explore</h2>
              <img src={`${explore}`} alt="" />
              <h6 className="subtitle text-center">
                Exploring is an essential part of the learning process.
              </h6>
              <button className="btn-read-more">
                <span>Read more</span>
              </button>
            </div>
            <div className="content ">
              <p className="title">
                <br />
                <span>
                  Explore your interests and learning style before diving into
                  learning. Exploring can help you gain clarity on what you want
                  to learn and how you want to learn it.
                </span>
              </p>
            </div>
          </div>
          <div className="card" data-aos="flip-up">
            <div className="card-header col-flex-center justify-content-around">
              <h2 className="title">Learn</h2>
              <img src={`${learn}`} alt="" />
              <h6 className="subtitle text-center">
                Learning is a lifelong process, and there are many ways to do
                it.
              </h6>
              <button className="btn-read-more">
                <span>Read more</span>
              </button>
            </div>
            <div className="content">
              <p className="title">
                <br />
                <span>
                  Learning lift offers personalized, interactive, and gamified
                  tools to make learning fun and engaging. You can learn at your
                  own pace and track your progress as you go.
                </span>
              </p>
            </div>
          </div>
          <div className="card" data-aos="flip-right">
            <div className="card-header col-flex-center justify-content-around">
              <h2 className="title">Apply</h2>
              <img src={`${apply}`} alt="" />
              <h6 className="subtitle text-center">
                Learning is not just about acquiring knowledge, it's also about
                applying it.
              </h6>
              <button className="btn-read-more">
                <span>Read more</span>
              </button>
            </div>
            <div className="content">
              <p className="title">
                <br />
                <span>
                  To apply your knowledge effectively, you need to practice what
                  you have learned.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <img src={`${wave1}`} alt="" />
        </div>
      </div>
    </>
  );
}

export default content;
