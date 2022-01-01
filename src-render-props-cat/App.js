// render-props like Example from reactjs.org.
// However, This is Functional component.

import React, { useState } from "react";

const Cat = ({ mouse }) => {
  // console.log(mouse.x);
  return (
    <>
      <h2>Mouse x= {mouse.x}</h2>
      <h2>Mouse y= {mouse.y}</h2>
      <img
        src="https://png.pngtree.com/png-clipart/20201011/ourmid/pngtree-hand-drawn-cartoon-yellow-cat-clipart-png-image_2363379.jpg"
        alt="cat"
        style={{
          position: "absolute",
          top: mouse.y - 25,
          left: mouse.x - 25,
          width: "50px"
        }}
      />
    </>
  );
};

const Mouse = (props) => {
  const [state, setState] = useState({});

  const handleMouseMove = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {props.render(state)}
    </div>
  );
};

const MouseTracker = () => {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse render={(mouse) => <Cat mouse={mouse} />} />
    </div>
  );
};

export default function App() {
  return (
    <div className="App" style={{cursor:'none'}}>
      {/* <Mouse render={(mouse) => console.log(mouse.y)} /> */}
      <MouseTracker />
    </div>
  );
}
