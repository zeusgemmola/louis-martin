import React from "react";
import Converter from "./components/Converter/converter";
import Error404 from "./components/Error404/error404";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/appbar";

const App = () => (
  <div className="App">
    <header>
      <AppBar />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  </div>
);

export default App;
