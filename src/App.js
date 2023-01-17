import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import GovernmentScolarship from './components/Pages/UniversityScolarships';
import Navbar from './components/Navbar/Navbar';
import SecondNavbar from './components/Navbar/SecondNavbar';
import ExternalScholarships from './components/Pages/ExternalScholarships';
import WesternSydney from './components/Pages/WesternSydney';
import UniversityScolarships from './components/Pages/UniversityScolarships';
import GovernmentScholarships from './components/Pages/GovernmentScholarships';
import Resources from './components/Pages/Resources';
import OurServices from './components/Pages/OurServices';
import Banner from './components/Banner';
import SearchBox from './components/SearchBox';
import FindScolarships from './components/Pages/FindScolarships';

function App() {
  return (
    <div className="max-w-[1900px] mx-auto bg:gray-500 ">
      <SecondNavbar></SecondNavbar>
      <Navbar></Navbar>
      {/* <Banner></Banner>
      <SearchBox></SearchBox> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/university"
          element={<UniversityScolarships></UniversityScolarships>}
        ></Route>
        <Route
          path="/government"
          element={<GovernmentScholarships></GovernmentScholarships>}
        ></Route>
        <Route
          path="/external"
          element={<ExternalScholarships></ExternalScholarships>}
        ></Route>
        <Route
          path="/searchScholarships/:schol/:grad"
          element={<WesternSydney></WesternSydney>}
        ></Route>
        {/* <Route
          path="/scholarships"
          element={<FindScolarships></FindScolarships>}
        ></Route> */}
        <Route
          path="/ourServices"
          element={<OurServices></OurServices>}
        ></Route>
        <Route path="/resources" element={<Resources></Resources>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
