import React, { useState, useEffect } from "react";
import EducatorCard from "./educatorCard";
import "./index.css";

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
