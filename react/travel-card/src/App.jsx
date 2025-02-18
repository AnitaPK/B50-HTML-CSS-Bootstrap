import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards.jsx";
import HomePage from "./components/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ConatctPage from "./components/ContactPAge.jsx";
import DetailsCard from "./components/DetailsCard.jsx";
import FetchAPI from "./components/FetchAPI.jsx";
import AxiosAPI from "./components/AxiosAPI.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/card" element={<Cards />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/contact' element={<ConatctPage />}></Route>
          <Route path='/card/:id' element={<DetailsCard />}></Route>
          <Route path='/userData' element={<FetchAPI />}></Route>
          <Route path='/axiosData' element={<AxiosAPI />}></Route>

        </Routes>
      </Router>

      {/* <HomePage />
    <Cards /> */}
    </>
  );
}

export default App;
