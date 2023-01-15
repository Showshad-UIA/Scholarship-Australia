import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import GovernmentScolarship from './components/Navbar/GovernmentScolarship';
import Navbar from './components/Navbar/Navbar';
import SecondNavbar from './components/Navbar/SecondNavbar';
import ExternalScholarships from './components/Pages/ExternalScholarships';
import WesternSydney from './components/Pages/WesternSydney';

function App() {
  return (
    <div className="max-w-[1600px] mx-auto bg:gray-500 ">
      <SecondNavbar></SecondNavbar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/government"
          element={<GovernmentScolarship></GovernmentScolarship>}
        ></Route>
        <Route
          path="/external"
          element={<ExternalScholarships></ExternalScholarships>}
        ></Route>
        <Route
          path="/findScholarship"
          element={<WesternSydney></WesternSydney>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
