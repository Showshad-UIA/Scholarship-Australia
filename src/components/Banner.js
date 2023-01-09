import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();

	const banner = {
		backgroundImage: "url('https://i.ibb.co/QC1gbGm/Blue-Gold-Rustic-Artisinal-Remote-Graduation-Banner-5.png') ",
		height: "500px",
		
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
	return (
		<div style={banner} className="lg:[630px]"></div>

		// <div className="bg-[#304F40]  border-t-4 h-[400px] border-t-green-900 shadow-4xl items-center justify-center">
		// 	{/* <div className="lg:px-[300px]  ">

		// 		<h1 className="text-white text-2xl py-5 mt-5 ">
		// 			Hire the best consultant for your scholarship application.
		// 		</h1>
		// 		<div className="pb-10 text-white text-xl">
		// 			<li> Australia’s first scholarship consultancy online platform</li>
		// 			<li> Get feedback from previous scholarship recipients</li>
		// 		</div>
		// 	</div> */}

		// </div>
	);
};

export default Banner;
