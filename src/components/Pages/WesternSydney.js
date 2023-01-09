import React, { useEffect, useState } from "react";
import Western_Sydney from "../../Image/western sydney.jpg";

const WesternSydney = ({ d }) => {
	return (
		<div className="container mx-auto  ">
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
						<p className="bg-[#304F40] rounded-2xl text-white text-center cursor-pointer  px-3  mt-2">
							View courses
						</p>
					</div>

					<div className="w-[75%] border-t-2 py-2">
						<p className="text-xl  text-black  font-bold underline cursor-pointer ">
							{d.scholarQuality}
						</p>
						<div>
						<h1 className="text-md font-bold mb-2 text-black hover:underline cursor-pointer underline">
							{d.uniName}
						</h1>
						</div>

						<div className="flex w-full lg:gap-[155px] my-1 text-[16px]">
							<p className=" text-black font-bold">Level of study:</p>
							<p className=" text-black start">{d.levelStudy}</p>
						</div>
						<div className="flex  w-full lg:gap-[87px] my-1 text-[16px]">
							<p className=" text-black font-bold start">Scholarship inclusions:</p>
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
						<div className=" flex justify-between w-full text-[16px] ">
							<div className="flex lg:gap-[143px] my-1">
								<p className="mb-3 text-black font-bold start ">Who can apply?</p>
								<p className="mb-3 text-black ">
									Domestic and international applicants{" "}
									<span className="underline">Find out more</span>
								</p>
							</div>
						</div>
						<div className=" flex justify-between w-full text-[16px] text-black">
							<div className="flex ">
								<p className=" text-black font-bold lg:w-3/5 ">
									Need Help with Your Application:
								</p>
								<p className="  text-justify ">
									Would you like someone experienced to review and give feedback
									prior to submitting your scholarship application? Scholarships
									Australia can assist you to get connected with consultants who
									are previous scholarship recipients in your field to ensure
									you submit a competitive application{" "}
									<span className="bg-[#304F40] px-3 py-1  text-white rounded-2xl">
										Get your application advice
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WesternSydney;
