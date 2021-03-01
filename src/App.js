import React from "react";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

export default App;

// resource : https://www.youtube.com/watch?v=Law7wfdg_ls
// Clip name : React Router Tutorial | React For Beginners
// Author: DevEd

