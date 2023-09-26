import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import Hero from "./components/Hero";
import Services from "./Services";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Servicespg from "./pages/Servicespg";
const App = () => {
  return (
    <div className="main">
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Servicespg />} />
        <Route path="/lawyer/:id" element={<Profile />} />
      </Routes>
      {/* <Hero className="hero" /> */}
      {/* <Services /> */}
    </div>
  );
};

export default App;
