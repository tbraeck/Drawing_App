import React from "react";
import Home from "./Components/Home";
import {Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
      <Home />
      <Routes>
          <Route exact path="/" element={<Home /> } />  
          <Route path="/goods" element={<AllGoods   />} />
      <Routes/>
    </>
  );
}

export default App;
