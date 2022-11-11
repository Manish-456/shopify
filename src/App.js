import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Store from "./store/Store";
import LoadingBar from "react-top-loading-bar";

function App() { 
   const [progress,setProgress] = useState(0);
  return (
    <div>
 <LoadingBar color= '#f11946'
           progress={progress}
           waitingTime={100}
    onLoaderFinished={() => setProgress(0)} />
    <Provider store={Store}>
    <Router>

         
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home setProgress={setProgress}/> } />
          <Route path="/Cart" element={ <Cart /> } />
          
          
        </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
