import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";



function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<Routes>
			<Route path="/" element={<Home></Home>}></Route>
			</Routes>
		</Router>
	);
}

export default App;
