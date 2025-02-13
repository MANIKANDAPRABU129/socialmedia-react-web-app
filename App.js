import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import Hello from "./components/Hello";
import CommentBox from './components/Comment';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Optional for Bootstrap JS components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/hello" element={<Hello/>} />
         {/* ✅ This is where the user will navigate */}
         <Route path="/register" element={<Register />} />
         <Route path ="/comment" element = {<CommentBox/>}/>

        </Routes>
    </Router>
  );
}

export default App;
