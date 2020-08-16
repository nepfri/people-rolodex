import React from "react";
import "./cardListStyle.css";
import Card from "../Card/card";

const cardList = (props) => {
  return (
    <div className="card-list">
      {props.people.map((p) => (
        <Card key={p.id} people={p} />
      ))}
    </div>
  );
};

export default cardList;
