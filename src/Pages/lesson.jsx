import React, { useState, useEffect } from "react";
import LessonCard from "./lessonCard";

import Bookshelves from "../assets/svg/bookshelves.svg";

function Lesson() {
  const [subjects, setSubjects] = useState([]);
  // const [cover, setCover] = useState([]);
  useEffect(() => {
    fetch("http://openlibrary.org/subjects/english_grammar.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubjects(data.works.map((work) => work));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container-w mt-5 row">
        <div className="col-lg-6 col-md-6 col-sm-12" data-aos="zoom-in-right">
          <img src={`${Bookshelves}`} className="hero-home-img" alt="" />
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12 col-flex-center gap pt-5"
          data-aos="zoom-in-left"
        >
          <h1>
            Unlock your potential with our comprehensive learning resources
          </h1>
          <p className="">
            Explore our vast collection of subjects and discover new ways to
            learn and grow. Our user-friendly platform and innovative tools will
            help you maximize your learning potential and achieve success in
            your academic journey. Join us today and experience the power of
            Learning Lift!
          </p>
        </div>
      </div>

      <div className="mt-5 pt-5 text-center">
        <h2>Explore Lessons</h2>
        <p>Browse with our wide range of subjects</p>
        <ul className="d-flex justify-content-center flex-row flex-wrap gap-2">
          <li>
            <button className="btn-rounded">All</button>
          </li>
          <li>
            <button className="btn-rounded-outline">English</button>
          </li>
          <li>
            <button className="btn-rounded-outline">Math</button>
          </li>
          <li>
            <button className="btn-rounded-outline">Science</button>
          </li>
          <li>
            <button className="btn-rounded-outline">Computer</button>
          </li>
        </ul>
      </div>

      <div className="container-w">
        <div className="educator-cards-container my-5 gap">
          {subjects.map((subject) => (
            <LessonCard
              key={subject.key}
              title={subject.title}
              cover={subject.cover_id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Lesson;
