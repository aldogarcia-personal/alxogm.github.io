import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Task from "./components/contact.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Task />} />
      </Routes>
    </div>
  );
};

export default App;
