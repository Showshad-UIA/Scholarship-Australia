import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../Image/logo.png";
// import { Link } from "react-scroll";

function Navbar() {
	const [nav, setNav] = useState(false);
	const links = [
		{
			id: 1,
			link: "Government Scholarships",
		},
		{
			id: 2,
			link: "University Scholarships",
		},
		{
			id: 3,
			link: "External Scholarships",
		},
		{
			id: 4,
			link: "Resources",
		},
		{
			id: 5,
			link: "Our Services",
		},
	];

	return (
		<div className="bg-[#1E282D] sticky top-0 z-10">
			<div className="">
				<div className="flex justify-around  w-full items-center h-20 text-white  px-4  ">
					<div>
						<img src={image} className="lg:w-[180px] h-10" alt="" />
					</div>
					<ul className="hidden md:flex">
						{links.map(({ id, link }) => (
							<li
								key={id}
								className="px-4 cursor-pointer capitalize font-medium text-md text-white hover:scale-105 duration-200"
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
		</div>
		
	);
}

export default Navbar;
