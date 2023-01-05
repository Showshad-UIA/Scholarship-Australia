import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import WesternSydney from "./Pages/WesternSydney";
import Searchbox from "../components/Searchbox.css";

const SearchBox = ({ universityName }) => {
	const [selectUniversity, setSelectUniversity] = useState("");
	const [searchButton, setSearchButton] = useState(false);
	const [yearSelect, setYearSelect] = useState([]);
	const [selectedScholarship, setSelectedScholarship] = useState("");
	const [selectedLevel, setSelectedLevel] = useState("");

	const selectedData = universityName?.filter(
		(data) =>
			data?.govtStatus === selectedScholarship ||
			data?.levelStudy === selectedLevel
	);

	const searchedData = universityName?.filter(
		(data) =>
			data?.govtStatus
				?.toLowerCase()
				?.includes(selectedScholarship.toLowerCase()) ||
			data?.levelStudy?.toLowerCase()?.includes(selectedLevel.toLowerCase())
	);

	const filteredData = selectedData?.length ? selectedData : searchedData;

	const dataToShow = filteredData?.length ? filteredData : universityName;
	console.log(dataToShow);

	useEffect(() => {
		fetch("yearfakedata.json")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data)
				setYearSelect(data);
			});
	}, []);

	return (
		<div>
			<h1 className="text-xl text-center text-[#304F40] items-center container mx-auto font-bold mt-5 rounded-3xl border-2 border-[#304F40] shadow-md p-2 ">
				Scholarship Australia is the first scholarship consultancy online
				platform. Hire the best consultant for your scholarship application. Get
				feedback from previous scholarship recipients.
			</h1>
			<div className="flex justify-center mt-5 gap-5 ">
				<div className="relative  lg:max-w-sm dropdown ">
					<select
						onChange={(e) => setSelectedScholarship(e.target.value)}
						className="p-2.5 lg:w-60 w-full  bg-white border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  text-white"
					>
						<option className="font-bold dropdown inline">
							Select a scholarships{" "}
						</option>
						<option>Government scholarships</option>
						<option>University scholarships</option>
						<option>External scholarships </option>
					</select>
				</div>

				<div className="relative  lg:max-w-sm dropdown">
					<select
						onChange={(e) => setSelectedLevel(e.target.value)}
						className="p-2.5 lg:w-60 w-full  bg-white border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  text-white"
					>
						<option className="font-bold">Select a study level</option>
						<option>Undergraduate</option>
						<option>Postgraduate</option>
					</select>
				</div>

				<button
					onClick={() => setSearchButton(!searchButton)}
					className="p-2.5 lg:w-60 w-full  rounded-3xl shadow-sm outline-none appearance-none focus:border-indigo-600 text-white cursor-pointer bg-[#304F40]"
				>
					Search
				</button>
				{/* <button className="rounded-3xl text-white bg-[#304F40] p-2">
					Post your Scholarship Query
				</button> */}
			</div>

			{searchButton ? (
				<>
					{" "}
					{dataToShow.map((data) => (
						<WesternSydney d={data}></WesternSydney>
					))}
				</>
			) : (
				<>
					{universityName.map((d) => (
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

									<div className="w-[75%] border-t-2 py-2">
										<p className="text-xl mt-5 text-black  font-bold underline cursor-pointer ">
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
											<div className="flex lg:gap-[150px]">
												<p className="mb-3 text-black font-bold ">
													Who can apply?
												</p>
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
													feedback prior to submitting your scholarship
													application? Scholarships Australia can assist you to
													get connected with consultants who are previous
													scholarship recipients in your field to ensure you
													submit a competitive application{" "}
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
					))}
				</>
			)}
		</div>
	);
};

export default SearchBox;
