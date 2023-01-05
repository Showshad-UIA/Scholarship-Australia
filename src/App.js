import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import SecondNavbar from "./components/Navbar/SecondNavbar";
import Footer from "./components/Footer/Footer";
import GovernmentScolarship from "./components/Navbar/GovernmentScolarship";

function App() {
	return (
		<Router>
			<SecondNavbar></SecondNavbar>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
			</Routes>
			<Routes>
				<Route path="/government" element={<GovernmentScolarship></GovernmentScolarship>}></Route>
			</Routes>
			<Footer></Footer>
		</Router>
	);
}

export default App;
