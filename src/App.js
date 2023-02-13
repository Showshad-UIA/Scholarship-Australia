import React, { useState } from 'react';

import { Route, Routes, useParams } from 'react-router-dom';
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
import AllScholarships from './components/Home/AllScholarships';
import FindScholarship from './components/Pages/FindScholarship';
import Enquire from './components/Pages/Enquire';
import ProjectScholarship from './components/Pages/ProjectScholarship';
import ExternalEnquireFrom from './components/Pages/ExternalEnquireFrom';
import SignUp from './components/Navbar/SignUp';
import Login from './components/Navbar/Login';
import JobChoice from './components/Navbar/JobChoice';
import Consultant from './components/Navbar/Consultant';
import Profile from './components/UserProfile/Profile';
import StudentProject from './components/StudentDetails/StudentProject';


function App() {
  const [selectScholarships, setSelectScholarships] = useState(0);

  return (
    <div className="max-w-[1900px] mx-auto bg-[#F7F7F7] relative ">
      <SecondNavbar></SecondNavbar>
      <Navbar></Navbar>
      {/* <Banner/>
      <SearchBox/> */}

      {/* <Home/> */}
      <Routes>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>

        <Route path="/jobChoices" element={<JobChoice></JobChoice>}></Route>
        <Route path="/consultant" element={<Consultant></Consultant>}></Route>
        <Route path="/student" element={<StudentProject></StudentProject>}></Route>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="search" element={<SearchBox></SearchBox>}></Route>
        <Route
          path="/university"
          element={<UniversityScolarships></UniversityScolarships>}
        ></Route>

        <Route path="/enquire/:enquireId" element={<Enquire></Enquire>}></Route>
        <Route path="/external_enquire" element={<ExternalEnquireFrom />} />
        <Route
          path="/government"
          element={<GovernmentScholarships></GovernmentScholarships>}
        ></Route>
        <Route
          path="/project"
          element={<ProjectScholarship></ProjectScholarship>}
        ></Route>
        <Route
          path="/external"
          element={<ExternalScholarships></ExternalScholarships>}
        ></Route>

        <Route
          path="/searchScholarships/:scholarship/:graduation"
          element={
            <FindScholarship
              setSelectScholarships={setSelectScholarships}
            ></FindScholarship>
          }
        ></Route>

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
