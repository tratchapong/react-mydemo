import React, { useState } from 'react'
import "./App.css";

function Header(props) {
  const [text, setText] = useState('')

  // console.log(props);
  return(
    
    <div className="header">
      <p>Todo App</p>
      <div>
        <input type="text" value={text} onChange={ (e)=>setText(e.target.value) } />
        <button>Search</button>
        <button>Add</button>
      </div>
    </div>
  )
}

export default Header