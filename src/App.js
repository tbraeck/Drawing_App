import React from "react";
import Game from "./Components/Game";
import Home from "./Components/Home";
import {Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
      {/* <Home /> */}
      <div>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/game" element={<Game /> } />  
            {/* <Route path="/goods"  /> */}
        </Routes>
      </div>
     
    </>
  );
}

export default App;
