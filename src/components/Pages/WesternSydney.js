import React, { useEffect, useState } from "react";
import Western_Sydney from "../../Image/western sydney.jpg";

const WesternSydney = ({ d }) => {
	return (
		<div className="container mx-auto shadow-sm ">
							<div className="lg:mx-24  ">
								<div className="flex flex-wrap p-3 mb-5 lg:gap-24 lg:mt-5">
									<div className="">
										<a>
											<img
												src={d.primaryImg}
												alt=""
												className="lg:h-28 lg:w-[120px] border-2  h-20  min-w-[150px] sm:text-center  w-full"
											/>
										</a>
										<p className="bg-[#304F40] rounded-2xl text-white text-center cursor-pointer  px-3 mt-2">
											View courses
										</p>
									</div>

									<div className="lg:w-[75%]  border-t-2 border-gray-400 py-2">
										<div className="text-xl mt-5 text-black  font-bold underline cursor-pointer ">
											{d.scholarQuality}
										</div>
										<div>
											<p className="text-md font-bold mb-2 text-black hover:underline cursor-pointer">
												{d.uniName}
											</p>
										</div>

										<div className="flex w-full lg:gap-[120px]">
											<p className=" text-black font-bold">Level of study:</p>
											<p className=" text-black ">{d.levelStudy}</p>
										</div>
										<div className="flex  w-full lg:gap-[107px] ">
											<p className=" text-black font-bold ">
												Scholarship inclusions:
											</p>
											<p className=" text-black  ">
												Scholarships include a stipend of $30,000(AUD) per annum
												for three (3) years.
												<p>
													- For domestic students, tuition fees are covered by
													the Australian Government Research Training Program
													(RTP).
												</p>
												<p>
													- For international students, a tuition fee waiver
													will be awarded.
												</p>
											</p>
										</div>
										<div className=" flex justify-between w-full">
											<div className="flex lg:gap-[110px]">
												<p className="mb-3 text-black font-bold ">
													Who can apply?
												</p>
												<p className="mb-3 text-black ">
													Domestic and international applicants{" "}
													<span className="underline">Find out more</span>
												</p>
											</div>
										</div>
										<div className=" flex justify-between w-full">
											<div className="flex gap-5">
												<p className=" text-black font-bold lg:w-full ">
													Need Help with Your Application:
												</p>
												<p className=" text-md text-black">
													Would you like someone experienced to review and give
													feedback prior to submitting your scholarship
													application? Scholarships Australia can assist you to
													get connected with consultants who are previous
													scholarship recipients in your field to ensure you
													submit a competitive application{" "}
													<span className="bg-[#304F40] px-3 py-1 text-white rounded-2xl ">
														Enquiry now
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
