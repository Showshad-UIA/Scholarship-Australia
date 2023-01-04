import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();
	return (
		<div className="bg-gradient-to-tr from-[#304F40] to-cyan-800 relative h-[450px]   w-full ">
			<div
				className=" w-full  h-full object-cover absolute mix-blend-overlay    "
				style={{
					backgroundImage: `url("https://i.ibb.co/YZ4fxTZ/banner.jpg")`,
				}}
			></div>
		</div>
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
