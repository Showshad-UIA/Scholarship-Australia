import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import ExternalScholarships from "../Pages/ExternalScholarships";
import WesternSydney from "../Pages/WesternSydney";
import SearchBox from "../SearchBox";
import Intro from "./Intro";

const Home = () => {
	const [universityName, setUniversityName] = useState([]);
	useEffect(() => {
		fetch("fakedata.json")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data)
				setUniversityName(data);
			});
	}, []);

	return (
		<div className="">
			<Banner></Banner>

			<SearchBox universityName={universityName}></SearchBox>
			{/* <ExternalScholarships></ExternalScholarships> */}
		</div>
	);
};

export default Home;
