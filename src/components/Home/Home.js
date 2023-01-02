import React, { useEffect, useState } from "react";
import Banner from "../Banner";
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

		<div>
			<Banner></Banner>
			<Intro></Intro>
			<SearchBox universityName={universityName}></SearchBox>
			{/* <WesternSydney></WesternSydney> */}
			
		</div>
	);
};

export default Home;
