import React, { useState, useEffect } from "react";
import LessonCard from "./lessonCard";

function Lesson() {
  const [subjects, setSubjects] = useState([]);
  // const [cover, setCover] = useState([]);
  useEffect(() => {
    fetch("http://openlibrary.org/subjects/lesson.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubjects(data.works.map((work) => work));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container-w">
        <div className="educator-cards-container my-5 py-5 gap">
          {subjects.map((subject) => (
            <LessonCard title={subject.title} cover={subject.cover_id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Lesson;
