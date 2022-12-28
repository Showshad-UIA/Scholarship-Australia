import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();
	return (
		<div className="bg-gradient-to-tr from-purple-100 to-cyan-800 relative h-[600px]   w-full">
			<div
				className=" w-full h-full object-cover absolute mix-blend-overlay    "
				style={{
					backgroundImage: `url("https://i.ibb.co/6NLnM8Y/AU-PUWeb-Banner-AU.png")`,
				}}
			>
				<div className="lg:mx-[330px] mx-20 pt-20">
					<h1 className="text-white text-4xl  mb">
						Hire the best freelancers for any job, online.
					</h1>
					<div className="my-5 text-white text-md">
						<li>World's largest freelance marketplace</li>
						<li>Any job you can possibly think of</li>
						<li>Save up to 90% & get quotes for free</li>
						<li>Pay only when you're 100% happy</li>
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
