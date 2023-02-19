import React from "react";

function LessonCard(props) {
  const { title, cover } = props;
  return (
    <>
      <div className="lesson-card" data-aos="zoom-in">
        <div className="img-container">
          <img
            className="lesson-card-img"
            src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`}
            alt=""
          />
          <div className="description card-content">
            <span className="title">{title}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LessonCard;
