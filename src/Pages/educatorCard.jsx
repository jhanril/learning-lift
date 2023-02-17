import React from "react";

function EducatorCard(props) {
  const { user } = props;
  return (
    <>
      {/* <div>
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <p>Gender: {user.gender}</p>
        <p>Name: {user.name.first} {user.name.last}</p>
        <p>Email: {user.email}</p>
      </div> */}

      <div class="educator-card">
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
        {/* <button> Click</button> */}
      </div>
    </>
  );
}

export default EducatorCard;
