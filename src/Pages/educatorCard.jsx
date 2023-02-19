import React from "react";

function EducatorCard(props) {
  const { user } = props;
  return (
    <>
      <div class="educator-card" data-aos="zoom-out">
        <div class="educator-card-border-top"></div>
        <div class="educator-card-img-container">
          <img
            class="educator-card-img"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
        </div>
        <span>
          {user.name.first} {user.name.last}
        </span>
        <p class="job"> Professional Teacher</p>
      </div>
    </>
  );
}

export default EducatorCard;
