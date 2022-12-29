import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

function Navbar() {
	const [nav, setNav] = useState(false);
	const links = [
		{
			id: 1,
			link: "About Us",
		},
		{
			id: 2,
			link: "Scholarships 2023*",
		},
		{
			id: 3,
			link: "Study in Australia",
		},

	];

	return (
		<div className="mx-auto bg-cyan-800">
			<div className="flex justify-around  w-full items-center h-20 text-white  px-4  sticky top-0 ">
				<div>
					<a href="/" className="text-3xl  ml-2">
						{" "}
						Scholarships Australia
					</a>
				</div>
				<ul className="hidden md:flex">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
						>
							<Link to={link} smooth duration={500}>
								{" "}
								{link}
							</Link>
						</li>
					))}
				</ul>
				<div
					onClick={() => setNav(!nav)}
					className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500"
				>
					{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
				</div>
				{nav && (
					<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
						{links.map(({ id, link }) => (
							<li
								key={id}
								className="text-4xl cursor-pointer capitalize  px-4 py-6"
							>
								<Link
									onClick={() => setNav(!nav)}
									to={link}
									smooth
									duration={500}
								>
									{" "}
									{link}
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
		// <>
		// 	<div className="w-full bg-[#0E1724]  text-white">
		// 		<div className="flex  items-center justify-between w-5/6 mx-52 py-2">
		// 			<div className="mr-60 cursor-pointer">ScholarShips Australia</div>
		// 			<div className="flex items-center ">
		// 				<p className="mx-2 cursor-pointer font-bold">About Us</p>
		// 				<p className="mx-2 cursor-pointer font-bold">Scholarship 2023* </p>
		// 				<p className="mx-2 cursor-pointer font-bold">Study in Australia </p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
	);
}

export default Navbar;
