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

function App() {
  const [selectScholarships, setSelectScholarships] = useState(0);
  // console.log(selectScholarships);
  // const [selectedScholarship, setSelectedScholarship] = useState('');
  // const [selectedLevel, setSelectedLevel] = useState('');
  return (
    <div className="max-w-[1900px] mx-auto bg:gray-500 ">
      <SecondNavbar></SecondNavbar>
      <Navbar></Navbar>
      {/* <Banner/>
      <SearchBox/> */}

      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="search"
          element={
            <SearchBox
              // setSelectScholarships={setSelectScholarships} setSelectedScholarship={setSelectedScholarship} setSelectedLevel={setSelectedLevel} selectedLevel={selectedLevel} selectedScholarship={selectedScholarship}
            ></SearchBox>
          }
        ></Route>
        <Route
          path="/university"
          element={<UniversityScolarships></UniversityScolarships>}
        ></Route>
        {/* <Route path="/enquire" element={<Enquire></Enquire>}></Route> */}
        <Route path="/enquire/:enquireId" element={<Enquire></Enquire>}></Route>
        <Route path='/external_enquire' element={<ExternalEnquireFrom/>}/>
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
            // selectedLevel={selectedLevel}
            // selectedScholarship={selectedScholarship}
              ></FindScholarship>
            }
          ></Route>
          {/* {
            selectedScholarship === 'External scholarships' &&   <Route
            path="/external"
            element={<ExternalScholarships></ExternalScholarships>}
          ></Route>
          } */}
        
         
     

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
