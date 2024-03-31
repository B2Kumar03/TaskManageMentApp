import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Edit from "../components/Edit";
import TaskDetails from "../components/TaskDetails";


const Allrouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/task/:id" element={<TaskDetails/>}/>
    </Routes>
  );
};

export default Allrouter;
