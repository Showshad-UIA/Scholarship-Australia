import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import SecondNavbar from "./components/Navbar/SecondNavbar";
import Footer from "./components/Footer/Footer";
import GovernmentScolarship from "./components/Navbar/GovernmentScolarship";
import ExternalScholarships from "./components/Pages/ExternalScholarships";

function App() {
	return (
		<Router>
			<SecondNavbar></SecondNavbar>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
			</Routes>
			<Routes>
				<Route
					path="/government"
					element={<GovernmentScolarship></GovernmentScolarship>}
				></Route>
			</Routes>
			<Routes>
				<Route
					path="/external"
					element={<ExternalScholarships></ExternalScholarships>}
				></Route>
			</Routes>
			<Footer></Footer>
		</Router>
	);
}

export default App;
