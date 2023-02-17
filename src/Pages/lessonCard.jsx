import React from "react";
import readBook from "../assets/svg/readbook.svg";

function LessonCard(props) {
  const { title, cover } = props;
  return (
    <>
      {/* <div classNameName="">
        <div classNameName="">
          <p>{title}</p>
          <img
            src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`}
            alt=""
          />
        </div>
      </div> */}
      <div className="lesson-card">
        <div className="img-container">
          <img className="lesson-card-img" src={`${readBook}`} alt="" />
          <div className="description card-content">
            <span className="title">{title}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LessonCard;
