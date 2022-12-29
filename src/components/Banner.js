import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();
	return (
		<div className="bg-gradient-to-tr from-purple-100 to-cyan-800 relative h-[300px]   w-full">
			<div
				className=" w-full h-full object-cover absolute mix-blend-overlay    "
				style={{
					backgroundImage: `url("https://i.ibb.co/6NLnM8Y/AU-PUWeb-Banner-AU.png")`,
				}}
			>
				<div className="lg:mx-[330px] mx-20 pt-20">
					<h1 className="text-white text-4xl  mb">
						Hire the best consultant for your scholarship application.
					</h1>
					<div className="my-5 text-white text-md">
						<li> Australia’s first scholarship consultancy online platform</li>
						<li> Get feedback from previous scholarship recipients</li>
					</div>
				</div>
				<div className="flex gap-5 lg:mx-[330px] mx-20 ">
					<button className="rounded bg-green-600 text-white p-2 text-xl">
						Hire a consultant
					</button>
					<button className="rounded bg-green-600 p-2 text-xl text-white">
						Get information more
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
