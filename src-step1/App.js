import React from "react";
import Header from './Header'
import Card from './Card'

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="card-area">
        <Card name="Todo" />
        <Card name="Doing" />
        <Card name="Done" />
      </div>
    </div>
    
  );
}

export default App;


