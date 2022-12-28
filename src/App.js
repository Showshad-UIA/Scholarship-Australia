import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import SecondNavbar from "./components/Navbar/SecondNavbar";

function App() {
	return (
		<Router>
			<SecondNavbar></SecondNavbar>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
			</Routes>
		</Router>
	);
}

export default App;
