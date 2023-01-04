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
			{/* <Intro></Intro> */}

			<SearchBox universityName={universityName}></SearchBox>
			{/* {universityName.map((d) => (
				<div className="container mx-auto ">
					<div className="  ">
						<div className="flex   p-3 mb-5 gap-20 lg:mt-5">
							<div className="">
								<a>
									<img
										src={d.primaryImg}
										alt=""
										className="lg:h-28 lg:w-[120px] border-2  h-20 w-[150px]"
									/>
								</a>
								<p className="bg-[#304F40] rounded-2xl p-1 my-2 text-white text-center cursor-pointer">
									Website
								</p>
							</div>

							<div className="w-[75%] border-t-2">
								<p className="text-xl mt-3 text-black  font-bold underline cursor-pointer ">
									{d.scholarQuality}
								</p>
								<p className="text-md font-bold mb-2 text-black hover:underline cursor-pointer">
									{d.uniName}
								</p>

								<div className="flex w-full lg:gap-40">
									<p className=" text-black font-bold">Level of study:</p>
									<p className=" text-black ">{d.levelStudy}</p>
								</div>
								<div className="flex  w-full lg:gap-24 ">
									<p className=" text-black font-bold ">
										Scholarship inclusions:
									</p>
									<p className=" text-black  ">
										Scholarships include a stipend of $30,000(AUD) per annum for
										three (3) years.
										<p>
											- For domestic students, tuition fees are covered by the
											Australian Government Research Training Program (RTP).
										</p>
										<p>
											- For international students, a tuition fee waiver will be
											awarded.
										</p>
									</p>
								</div>
								<div className=" flex justify-between w-full">
									<div className="flex lg:gap-[150px]">
										<p className="mb-3 text-black font-bold ">Who can apply?</p>
										<p className="mb-3 text-black ">
											Domestic and international applicants.
										</p>
									</div>
								</div>
								<div className=" flex justify-between w-full">
									<div className="flex ">
										<p className=" text-black font-bold lg:w-3/5 ">
											Need Help with Your Application:
										</p>
										<p className=" text-md ">
											Would you like someone experienced to review and give
											feedback prior to submitting your scholarship application?
											Scholarships Australia can assist you to get connected
											with consultants who are previous scholarship recipients
											in your field to ensure you submit a competitive
											application{" "}
											<span className="bg-[#304F40] px-3 py-1 text-white rounded-2xl">
												Enquire now
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))} */}

			{/* <WesternSydney></WesternSydney> */}
		</div>
	);
};

export default Home;
