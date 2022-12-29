import React from "react";
import Banner from "../Banner";
import WesternSydney from "../Pages/WesternSydney";
import SearchBox from "../SearchBox";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<SearchBox></SearchBox>
			<WesternSydney></WesternSydney>
		</div>
	);
};

export default Home;
