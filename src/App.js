import React from "react";

import './App.css';
import X from "./Component/Navbar/Navbar";
import images from "./images.jpg";
function App() {
  return (
    <div >
      <X />
      <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
        <h1 className="titleRed">AAbd lahmid </h1>
      </div>
      <div className="images">
      <img src={images} alt="images"></img>
        <img src="./image.png" alt="png"></img></div>
        <iframe title="vid" width="560" height="315" src="https://www.youtube.com/embed/oDb0-snBvLE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
  );
}







export default App;
