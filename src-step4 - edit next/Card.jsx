import React from 'react';
import "./App.css";


function Card(props) {
  // console.log(props);
  const deleteItem = (id) => props.handleDelete(id)
  const nextStatus = (id) => props.handleNext(id)
  const editItem = (id) => props.handleEdit(id)

  return(
    <div className="card">
      <h3>{props.name} </h3>
      {props.list.map( (x,i) => (
        <div key={x.id}>
        <span>{x.id} : {x.task}</span>
        <button onClick={()=>editItem(x.id)}>Edit</button>
        <button onClick={()=>deleteItem(x.id)}>Delete</button>
        { x.status !=='done' && <button onClick={()=>nextStatus(x.id)} >next</button> }
        </div>
      ))
      }
    </div>
  )
}

export default Card
