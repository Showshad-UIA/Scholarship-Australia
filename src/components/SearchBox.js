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
			data?.govtStatus === selectedScholarship &&
			data?.levelStudy === selectedLevel
	);

	const searchedData = universityName?.filter(
		(data) =>
			data?.govtStatus
				?.toLowerCase()
				?.includes(selectedScholarship.toLowerCase()) &&
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
			<h1 className="text-xl text-center text-[#304F40] items-center container mx-auto font-bold mt-5 rounded-3xl   ">
				<p className="lg:mx-28 text-center px-2">
					Scholarship Australia is the first scholarship consultancy online
					platform. Hire the best consultant for your scholarship application.
					Get feedback from previous scholarship recipients.
				</p>
			</h1>
			<div className="lg:flex md:flex  w-full justify-center mt-5 lg:gap-5 md:gap-3   ">
				<div className="relative px-1.5 w-full lg:w-60 lg:max-w-sm dropdown ">
					<select
						onChange={(e) => setSelectedScholarship(e.target.value)}
						className=" p-1  w-full  bg-white border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  text-white"
					>
						<option className="font-bold dropdown inline ">
							Select a scholarships{" "}
						</option>
						<option>University scholarships</option>
						<option>Government scholarships</option>
						<option>External scholarships </option>
					</select>
				</div>

				<div className="relative w-full px-1.5 lg:w-60 lg:max-w-sm dropdown">
					<select
						onChange={(e) => setSelectedLevel(e.target.value)}
						className="p-1  w-full  bg-white border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  text-white"
					>
						<option className=" font-bold">Select a study level</option>
						<option>Postgraduate</option>
						<option>Undergraduate</option>
					</select>
				</div>

				<button
					onClick={() => setSearchButton(!searchButton)}
					className="relative w-full lg:max-w-sm lg:w-60 p-1 ml-1 px-5    rounded-3xl shadow-sm outline-none appearance-none focus:border-indigo-600 text-white cursor-pointer bg-[#304F40]"
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
						<div className=" mx-auto shadow-sm ">
							<div className="lg:mx-24 ">
								<div className=" w-full flex flex-wrap p-3 mb-5 lg:gap-20 lg:mt-5">
									<div className="lg:w-[15%] sm:w-full  ">
										<div className="flex flex-wrap justify-center sm:w-full">
											<img
												src={d.primaryImg}
												alt=""
												className="lg:h-28 lg:w-[120px] border-2  h-20 min-w-full   "
											/>
										<p className="bg-[#304F40] rounded-2xl text-white text-center cursor-pointer  px-3 mt-2">
											View courses
										</p>
										</div>
									</div>

									<div className="lg:w-[75%] sm:w-full   border-t-2 border-gray-400 py-2">
										<div className="text-xl mt-5 text-black  font-bold underline cursor-pointer ">
											{d.scholarQuality}
										</div>
										<div>
											<p className="text-md font-bold mb-2 text-black hover:underline cursor-pointer">
												{d.uniName}
											</p>
										</div>

										<div className="flex w-full lg:gap-[120px] gap-3 md:gap-5">
											<p className=" text-black font-bold">Level of study:</p>
											<p className=" text-black ">{d.levelStudy}</p>
										</div>
										<div className="flex  w-full lg:gap-[107px] gap-8 ">
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
											<div className="flex lg:gap-[110px] gap-12">
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
												<p className=" text-md text-justify text-black">
													Would you like someone experienced to review and give
													feedback prior to submitting your scholarship
													application? Scholarships Australia can assist you to
													get connected with consultants who are previous
													scholarship recipients in your field to ensure you
													submit a competitive application{" "}
													<span className="bg-[#304F40] mx-7 px-2 lg:mx-3 py-1 text-white rounded-2xl ">
														Enquiry now
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
