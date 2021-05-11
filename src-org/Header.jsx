import React, { useState } from 'react'
import "./App.css";

function Header({list, setList}) {
  const [text, setText] = useState('')

  // console.log(props);

  const handleAdd = () => {
    setList([...list, { id: list[list.length-1].id + 1, task: text, status: 'todo' }]);
    setText('');
  };

  return(
    
    <div className="header">
      <p>Todo App</p>
      <div>
        <input type="text" value={text} onChange={ (e)=>setText(e.target.value) } />
        <button>Search</button>
        <button onClick={handleAdd} >Add</button>
      </div>
    </div>
  )
}

export default Header