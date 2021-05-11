import React, { useState } from "react";
import "./App.css";

function Header({ list, setList, ts, setTs, addMode, setAddMode }) {
  const [text, setText] = useState("");
  const [searchMode, setSearchMode] = useState(true);
  // console.log(props);

  const handleAdd = () => {
    setAddMode(!addMode);
  };
  // const handleAdd = () => {
  //   setList([
  //     ...list,
  //     { id: list[list.length - 1].id + 1, task: text, status: "todo" }
  //   ]);
  //   setText("");
  // };
  const handleSearch = () => {
    if (searchMode) {
      setTs(text);
    } else {
      setTs("");
      setText("");
    }
    setSearchMode(!searchMode);
  };
  return (
    <div className="header">
      <p>Todo App</p>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* { searchMode 
          ? <button onClick={handleSearch}>Search</button>
          : <button onClick={handleSearch}>Clear Search</button> } */}
        <button onClick={handleSearch}>
          {searchMode ? "Search" : "Clear Search"}
        </button>
        <button onClick={handleAdd}>
          {addMode ? "Close Add bar" : "Add new"}
        </button>
      </div>
    </div>
  );
}

export default Header;
