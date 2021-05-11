import React, { useState } from "react";
import Header from "./Header";
import Card from "./Card";

function App() {
  // const [list, setList] = useState([]);
  const [list, setList] = useState([
    { id: 1, task: "Job1", status: "todo" },
    { id: 2, task: "Job2", status: "todo" },
    { id: 3, task: "Job3", status: "todo" },
    { id: 4, task: "Job4", status: "todo" },
    { id: 5, task: "Job5", status: "doing" },
    { id: 6, task: "Task1", status: "todo" },
    { id: 7, task: "Task2", status: "todo" },
    { id: 8, task: "Task3", status: "doing" },
    { id: 9, task: "Task4", status: "doing" },
    { id: 10, task: "Task5", status: "done" }
  ]);

  const [ts, setTs] = useState("");
  const [task, setTask] = useState({
    id: list.length > 0 ? list[list.length - 1]?.id + 1 : 1,
    task: "",
    status: "todo"
  });
  const [addMode, setAddMode] = useState(false);

  const handleAddinApp = (e) => {
    e.preventDefault();
    // console.log(task);
    setList([...list, task]);
    setTask({ ...task, id: task.id + 1, task: "" });
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleNext = (id) => {
    setList(
      list.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "todo" ? "doing" : "done" }
          : item
      )
    );
  };
  const handleEdit = (xid, xtask) => {
    setList(
      list.map((item) =>
        item.id === xid ? { ...item, id: xid, task: xtask } : item
      )
    );
  };

  // const handleEdit = (id) => {
  //   const textToEdit = prompt("Enter task");
  //   if (!textToEdit) return;
  //   setList(
  //     list.map((item) =>
  //       item.id === id ? { ...item, task: textToEdit } : item
  //     )
  //   );
  // };

  return (
    <div className="App">
      <Header
        list={list}
        setList={setList}
        ts={ts}
        setTs={setTs}
        addMode={addMode}
        setAddMode={setAddMode}
      />
      {addMode && (
        <form onSubmit={handleAddinApp}>
          <label htmlFor="task">TASK</label>
          <input
            type="text"
            name="task"
            value={task.task}
            onChange={(e) => setTask({ ...task, task: e.target.value })}
          />
          <input type="submit" value="Add This Job" />
        </form>
      )}
      <div className="card-area">
        <Card
          name="Todo"
          list={list.filter(
            (x) =>
              x.status === "todo" &&
              x.task.toLowerCase().includes(ts.toLowerCase())
          )}
          setList={setList}
          handleDelete={handleDelete}
          handleNext={handleNext}
          handleEdit={handleEdit}
        />
        <Card
          name="Doing"
          list={list.filter(
            (x) =>
              x.status === "doing" &&
              x.task.toLowerCase().includes(ts.toLowerCase())
          )}
          setList={setList}
          handleDelete={handleDelete}
          handleNext={handleNext}
          handleEdit={handleEdit}
        />
        <Card
          name="Done"
          list={list.filter(
            (x) =>
              x.status === "done" &&
              x.task.toLowerCase().includes(ts.toLowerCase())
          )}
          setList={setList}
          handleDelete={handleDelete}
          handleNext={handleNext}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
