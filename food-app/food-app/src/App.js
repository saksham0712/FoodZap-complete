import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/restaurant/restaurant";
function App() {
  return (
   <Router>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/restaurant" element={<Restaurant />}/>
   </Routes>
   </Router>
  );
}

export default App;
