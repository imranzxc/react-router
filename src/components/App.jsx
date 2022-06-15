import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./app.module.css";
import Homepage from "./pages/home/main/Index";
import Features from "./pages/features/Features";
import Contacts from "./pages/contact/Contact";
import Header from "./header";

const App = () => {
  return (
    <div className={style.container}>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;