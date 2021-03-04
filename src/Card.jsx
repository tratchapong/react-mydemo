import React from 'react';
import "./App.css";

function Card(props) {
  // console.log(props);
  return(
    <div className="card">
      <h3>{props.name} </h3>
      {props.list.map( (x,i) => (
        <div key={x.id}>
        <span>{x.id} : {x.task}</span>
        <button>X</button>
        { x.status !=='done' && <button>next</button> }
        </div>
      ))
      }
    </div>
  )
}

export default Card
