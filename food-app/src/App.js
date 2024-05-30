import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/restaurant/restaurant";
import Login from "./pages/register/login";
import SignUp from "./pages/register/SignUp";
import OurMenu from "./pages/Menu/OurMenu";
import { CardProvider } from "./components/layout/contextReducer";
function App() {

  return (
    <CardProvider>
   <Router>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/restaurant" element={<Restaurant />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/menu" element={<OurMenu />}/>
   </Routes>
   </Router>
    </CardProvider>
  );
}

export default App;
