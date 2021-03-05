import React from 'react';
import "./App.css";

function Card(props) {
  return(
    <div className="card">
      <p>Card {props.name} </p>
    </div>
  )
}

export default Card
