import React, { useEffect, useState } from "react";
import Western_Sydney from "../../Image/western sydney.jpg";

const WesternSydney = ({ d }) => {
	return (
		<div className="container mx-auto">
			<div className="  mt-32">
				<div className="flex  shadow-md p-3 mb-5 gap-16 lg:mt-5">
					<div className="">
						<a>
							<img
								src={d.primaryImg}
								alt=""
								className="lg:h-28 lg:w-[200px] border-2  h-20 w-[150px]"
							/>
						</a>
						<p className="bg-[#304F40] rounded-2xl p-1 my-2 text-white text-center">
							Website
						</p>
					</div>
					<div className="w-[75%]">
						<p className="text-3xl mb-2 text-black ">{d.scholarQuality}</p>
						<p className="text-lg font-bold mb-2 text-black">{d.uniName}</p>

						<div className="flex w-full lg:gap-40">
							<p className="mb-3 text-black font-bold">Level of study:</p>
							<p className="mb-3 text-black ">{d.levelStudy}</p>
						</div>
						<div className="flex  w-full lg:gap-24 ">
							<p className="mb-3 text-black font-bold ">
								Scholarship inclusions:
							</p>
							<p className="mb-3 text-black  ">
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
								<p className="mb-3 text-black font-bold lg:w-3/5 ">
									Need Help with Your Application:
								</p>
								<p className="mb-3 text-bl ">
									Would you like someone experienced to review and give feedback
									prior to submitting your scholarship application? Scholarships
									Australia can assist you to get connected with consultants who
									are previous scholarship recipients in your field to ensure
									you submit a competitive application{" "}
									<span className="bg-[#304F40] px-3 py-1 text-white rounded-2xl">
										Enquire now
									</span>
								</p>
							</div>
						</div>
						{/* <div className=" flex justify-between">
							<div className="flex lg:gap-[300px]">
								<p className="  text-black font-bold ">
								Need Help with Your Application:
								</p>
								<p className="mb-3   text-black ">
									Would you like someone experienced to review and give feedback
									prior to submitting your scholarship application? Scholarships
									Australia can assist you to get connected with consultants who
									are previous scholarship recipients in your field to ensure
									you submit a competitive application <span className="px-2 lg:w-60 w-full    bg-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  text-white">Enquire now</span>
								</p>
							</div>
						</div> */}
					</div>
				</div>
				{/* <div className="flex  shadow-md p-3 mb-5 gap-5 lg:mt-5">
					<div className="">
						<a>
							<img
								src={Western_Sydney}
								alt=""
								className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
							/>
						</a>
						<p className="bg-sky-700 rounded-2xl p-1 my-2 text-center">
							Website
						</p>
					</div>
					<div className="w-[75%]">
						<p className="text-3xl mb-2 text-black ">
							WSU Higher Degree Research (HDR) Scholarships
						</p>
						<p className="text-lg font-bold mb-2 text-black">
							Western Sydney University
						</p>

						<div className="flex lg:gap-[110px]">
							<p className="mb-3 text-black font-bold">Level of study:</p>
							<p className="mb-3 text-black ">Postgraduate</p>
						</div>
						<div className="flex lg:gap-[50px] w-full ">
							<p className="mb-3 text-black font-bold">
								Scholarship inclusions:
							</p>
							<p className="mb-3 text-black  ">
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
						<div className=" flex justify-between">
							<div className="flex lg:gap-[100px]">
								<p className="mb-3 text-black font-bold ">Who can apply?</p>
								<p className="mb-3 text-black ">
									Domestic and international applicants.
								</p>
							</div>
						</div>
						<div className=" flex justify-between">
							<div className="flex lg:gap-[70px]">
								<button className="  text-black font-bold">
									For application guide
								</button>
								<button className="mb-3  rounded-md px-3  bg-sky-700 text-white ">
									Hire a consultant
								</button>
							</div>
						</div>
					</div>
				</div> */}

				{/* <div className="flex  shadow-md p-3 mb-5 gap-5 lg:mt-5">
					<div className="">
						<a>
							<img
								src={Western_Sydney}
								alt=""
								className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
							/>
						</a>
						<p className="bg-sky-700 rounded-2xl p-1 my-2 text-center">
							Website
						</p>
					</div>
					<div className="w-[75%]">
						<p className="text-3xl mb-2 text-black ">
							WSU Higher Degree Research (HDR) Scholarships
						</p>
						<p className="text-lg font-bold mb-2 text-black">
							Western Sydney University
						</p>

						<div className="flex lg:gap-[110px]">
							<p className="mb-3 text-black font-bold">Level of study:</p>
							<p className="mb-3 text-black ">Postgraduate</p>
						</div>
						<div className="flex lg:gap-[50px] w-full ">
							<p className="mb-3 text-black font-bold">
								Scholarship inclusions:
							</p>
							<p className="mb-3 text-black  ">
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
						<div className=" flex justify-between">
							<div className="flex lg:gap-[100px]">
								<p className="mb-3 text-black font-bold ">Who can apply?</p>
								<p className="mb-3 text-black ">
									Domestic and international applicants.
								</p>
							</div>
						</div>
						<div className=" flex justify-between">
							<div className="flex lg:gap-[70px]">
								<button className="  text-black font-bold">
									For application guide
								</button>
								<button className="mb-3  rounded-md px-3  bg-sky-700 text-white ">
									Hire a consultant
								</button>
							</div>
						</div>
					</div>
				</div> */}

				{/* <div className="flex  shadow-md p-3 mb-5 gap-5 lg:mt-5">
					<div className="">
						<a>
							<img
								src={Western_Sydney}
								alt=""
								className="lg:h-28 lg:w-[200px] h-20 w-[150px]"
							/>
						</a>
						<p className="bg-sky-700 rounded-2xl p-1 my-2 text-center">
							Website
						</p>
					</div>
					<div className="w-[75%]">
						<p className="text-3xl mb-2 text-black ">
							WSU Higher Degree Research (HDR) Scholarships
						</p>
						<p className="text-lg font-bold mb-2 text-black">
							Western Sydney University
						</p>

						<div className="flex lg:gap-[110px]">
							<p className="mb-3 text-black font-bold">Level of study:</p>
							<p className="mb-3 text-black ">Postgraduate</p>
						</div>
						<div className="flex lg:gap-[50px] w-full ">
							<p className="mb-3 text-black font-bold">
								Scholarship inclusions:
							</p>
							<p className="mb-3 text-black  ">
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
						<div className=" flex justify-between">
							<div className="flex lg:gap-[100px]">
								<p className="mb-3 text-black font-bold ">Who can apply?</p>
								<p className="mb-3 text-black ">
									Domestic and international applicants.
								</p>
							</div>
						</div>
						<div className=" flex justify-between">
							<div className="flex lg:gap-[70px]">
								<button className="  text-black font-bold">
									For application guide
								</button>
								<button className="mb-3  rounded-md px-3  bg-sky-700 text-white ">
									Hire a consultant
								</button>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default WesternSydney;
