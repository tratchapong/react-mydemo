import React, { useState } from 'react'
import Header from './Header'
import Card from './Card'


function App() {


  const [list, setList] = useState([
    { id: 1, task: 'Job1', status: 'todo' },
    { id: 2, task: 'Job1', status: 'todo' },
    { id: 3, task: 'Job2', status: 'todo' },
    { id: 4, task: 'Job3', status: 'todo' },
    { id: 5, task: 'Job4', status: 'doing' },
    { id: 6, task: 'Job5', status: 'done' },
  ]);

  const handleDelete = id => {
    setList(
      list.filter((item) => item.id !== id)
    );
  };

  const handleNext = id => {
    setList(
      list.map( item => 
        item.id === id 
        ? { ...item, status: item.status === 'todo'? 'doing' : 'done'}  
        : item 
      )
    )
  }
  const handleEdit = id => {
    const textToEdit = prompt('Enter task');
    setList(
      list.map(item =>
        item.id === id 
          ? { ...item, task: textToEdit }
          : item
      )
    );
  };
  
  return (
    <div className="App">
      <Header list={list} setList={setList} />
      <div className="card-area">
        <Card 
          name="Todo"
          list={list.filter(x => x.status === 'todo')} 
          setList={setList}
          handleDelete={handleDelete} 
          handleNext={handleNext} 
          handleEdit={handleEdit}
        />
        <Card 
          name="Doing"
          list={list.filter(x => x.status === 'doing')} 
          setList={setList}
          handleDelete={handleDelete}
          handleNext={handleNext}
          handleEdit={handleEdit}   
        />
        <Card 
          name="Done"
          list={list.filter(x => x.status === 'done')} 
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

