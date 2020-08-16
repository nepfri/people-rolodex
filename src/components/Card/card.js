import React from "react";
import "./cardStyle.css";

const card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="people"
        src={`https://robohash.org/${props.people.id}?set=set4&size=180x180`}
      />
      <h2>{props.people.name}</h2>
      <p>{props.people.email}</p>
    </div>
  );
};

export default card;
