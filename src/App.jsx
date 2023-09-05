// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Preview from "./Previe/Preview";
import Form from "./Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/history" />
      </Routes>
    </>
  );
}

export default App;
