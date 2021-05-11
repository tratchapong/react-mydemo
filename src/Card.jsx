import React, { useState } from "react";
import "./App.css";

function Card(props) {
  // console.log(props);
  const [editMode, setEditMode] = useState(false);
  const [editID, setEditID] = useState(0);
  const [editText, setEditText] = useState("");

  const deleteItem = (id) => props.handleDelete(id);
  const nextStatus = (id) => props.handleNext(id);
  // const editItem = (id) => props.handleEdit(id);
  const editItem = (xid, xtask) => {
    setEditMode(!editMode);
    setEditID(xid);
    setEditText(xtask);
    if (editMode) props.handleEdit(xid, editText);
  };
  return (
    <div className="card">
      <h3>{props.name} </h3>
      {props.list.map((x, i) => (
        <div key={x.id}>
          {editMode && editID === x.id ? (
            <input
              value={editText}
              onKeyUp={(e) =>
                e.keyCode === 13
                  ? editItem(x.id, x.task)
                  : e.keyCode === 27
                  ? setEditMode(false)
                  : null
              }
              onChange={(e) => setEditText(e.target.value)}
              style={{
                fontSize: "16px",
                background: "deeppink",
                color: "whitesmoke",
                padding: "3px"
              }}
            />
          ) : (
            <input
              value={`${x.id} : ${x.task}`}
              readOnly={true}
              style={{
                background: "whitesmoke",
                border: "1px dotted lightblue",
                padding: "5px",
                color: "deeppink"
              }}
            />
          )}

          <button onClick={() => editItem(x.id, x.task)}>&#9998;</button>
          <button onClick={() => deleteItem(x.id)}>&#10006;</button>
          {x.status !== "done" && (
            <button onClick={() => nextStatus(x.id)}>&#10132;</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
