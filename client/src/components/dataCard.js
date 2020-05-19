import React from "react";

export default function DataCard(props) {
  return (
    <div className="data-card" key={props.id}>
      <h2>Name: {props.name}</h2>
      <p>Country: {props.country}</p>
    </div>
  );
}
