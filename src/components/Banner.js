import { useNavigate } from "react-router-dom";

const Banner = () => {
	const navigate = useNavigate();
	return (
		// <div className="bg-gradient-to-tr from-purple-100 to-cyan-800 relative h-[300px]   w-full">
		// 	<div
		// 		className=" w-full h-full object-cover absolute mix-blend-overlay    "
		// 		style={{
		// 			backgroundImage: `url("https://i.ibb.co/6NLnM8Y/AU-PUWeb-Banner-AU.png")`,
		// 		}}
		// 	>
		// 		<div className="lg:mx-[330px] mx-20 pt-20">
		// 			<h1 className="text-white text-4xl  mb">
		// 				Hire the best consultant for your scholarship application.
		// 			</h1>
		// 			<div className="my-5 text-white text-md">
		// 				<li> Australia’s first scholarship consultancy online platform</li>
		// 				<li> Get feedback from previous scholarship recipients</li>
		// 			</div>
		// 		</div>
		// 		<div className="flex gap-5 lg:mx-[330px] mx-20 ">
		// 			<button className="rounded bg-green-600 text-white p-2 text-xl">
		// 				Hire a consultant
		// 			</button>
		// 			<button className="rounded bg-green-600 p-2 text-xl text-white">
		// 				Get information more
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>
		<div className="bg-[#304F40]  border-t-4 h-[400px] border-t-green-900 shadow-4xl items-center justify-center">
			<div className="lg:px-[300px]  ">
				<h1 className="text-white text-2xl my-5">Scholarships in Australia</h1>
				<p className="text-white  text-xl">
					No matter what you are intending to study and where, you will be sure
					to find some financial assistance on offer to help you pay for it.
				</p>
				<p className="text-white text-xl">
					There are currently more than 3000 scholarships available to
					Australian students, across both the higher education and vocational
					sectors. Scholarships can cover an array of costs from tuition fees to
					living and accommodation costs, our advice is to investigate your
					options early on as the amount of information to get through and
					applications to fill can be overwhelming.
				</p>
				<h1 className="text-white text-2xl py-5 mt-5 ">
					Hire the best consultant for your scholarship application.
				</h1>
				<div className="pb-10 text-white text-xl">
					<li> Australia’s first scholarship consultancy online platform</li>
					<li> Get feedback from previous scholarship recipients</li>
				</div>
			</div>
		</div>
	);
};

export default Banner;
