import React from "react";

function EducatorCard(props) {
  const { user } = props;
  return (
    <>
      <div className="educator-card" data-aos="zoom-out">
        <div className="educator-card-border-top"></div>
        <div className="educator-card-img-container">
          <img
            className="educator-card-img"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
        </div>
        <span>
          {user.name.first} {user.name.last}
        </span>
        <p className="job"> Professional Teacher</p>
      </div>
    </>
  );
}

export default EducatorCard;
