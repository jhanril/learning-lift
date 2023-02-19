import React from "react";
import { Link } from "react-router-dom";
import wave1 from "../assets/svg/wave1.svg";

function footer() {
  return (
    <>
      <div data-aos="fade-up">
        <div className="">
          <img src={`${wave1}`} alt="" />
        </div>
      </div>
      <div className="bg-color-lb" data-aos="zoom-in">
        <footer className="container py-5 my-0">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/whatis" className="nav-link px-2 text-light">
                What is Learning Lift
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-light">
                Lessons
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-light">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-light">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-light">
                About
              </Link>
            </li>
          </ul>
          <p className="text-center text-light">© 2023 Learning Lift</p>
        </footer>
      </div>
    </>
  );
}

export default footer;
