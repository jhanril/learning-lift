import React, { useState, useEffect } from "react";
import EducatorCard from "./educatorCard";
import "./index.css";

import Educator from "../assets/svg/educator.svg";

function Educators() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=12")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container-w my-5 py-5 row">
        <div className="col-lg-6 col-md-6 col-sm-12" data-aos="zoom-in-right">
          <img src={`${Educator}`} className="hero-home-img" alt="" />
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap pt-5"
          data-aos="zoom-in-left"
        >
          <h1>Meet the educators</h1>
          <p className="">
            The importance of great educators and their vital role in shaping
            the future of students. Meet our educators who are passionate about
            sharing their knowledge and expertise with their students.
          </p>
        </div>
      </div>

      <div className="mt-5 py-5 text-center bg-color-lb">
        <h2 data-aos="zoom-in">Meet Our Commited Educators</h2>
      </div>

      <div className="container-w">
        <div className="educator-cards-container my-5 py-5 gap">
          {users.map((user) => (
            <EducatorCard key={user.login.uuid} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Educators;
