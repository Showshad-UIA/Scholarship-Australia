import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import WesternSydney from "./Pages/WesternSydney";

const SearchBox = ({ universityName }) => {
	const [selectUniversity, setSelectUniversity] = useState("");
	const [searchButton, setSearchButton] = useState(false);
	const [yearSelect, setYearSelect] = useState([]);
	const [selectedYear, setSelectedYear] = useState("");
	const [selectedLevel, setSelectedLevel] = useState("");
	const selectedData = universityName?.filter(
		(data) =>
			data?.institutions === selectUniversity ||
			data?.year === selectedYear ||
			universityName?.scholarShipList?.levelStudy === selectedLevel
	);

	// console.log(selectedYear);
	const searchedData = universityName?.filter(
		(data) =>
			data?.institutions
				?.toLowerCase()
				?.includes(selectUniversity.toLowerCase()) ||
			data?.year?.toLowerCase()?.includes(selectedYear.toLowerCase())
	);
	console.log(searchedData);
	//   ||  yearSelect?.filter((data) =>
	//   data?.year?.toLowerCase()?.includes(selectedYear?.toLowerCase()))

	//   const selectYearData = yearSelect?.filter((data) =>
	//     data?.year?.toLowerCase()?.includes(selectedYear?.toLowerCase())
	//   );

	//   console.log(selectYearData);

	const filteredData = selectedData?.length ? selectedData : searchedData;
	//   const filterYearData = selectYearData?.length ? selectYearData : searchedData;
	//   console.log(filteredData);
	const dataToShow = filteredData?.length ? filteredData : universityName;
	//   const dataYearToShow = filterYearData?.length
	//     ? filterYearData
	//     : universityName;
	//   console.log(dataToShow);
	useEffect(() => {
		fetch("yearfakedata.json")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data)
				setYearSelect(data);
			});
	}, []);

	return (
		<>
			<div className="flex justify-center mt-5 gap-5 pb-28">
				<div className="relative  lg:max-w-sm">
					<select
						onChange={(e) => setSelectedYear(e.target.value)}
						className="p-2.5 lg:w-60 w-full  bg-white border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  text-black"
					>
						<option className="bg-[#2E6644]">Select a Year</option>
						<option>Year 2022</option>
						<option>Year 2023</option>
					</select>
				</div>

				<div className="relative  lg:max-w-sm">
					<select
						onChange={(e) => setSelectedLevel(e.target.value)}
						className="p-2.5 lg:w-60 w-full  bg-white border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  text-black"
					>
						<option className="bg-[#2E6644]">Select a study level</option>
						<option>Undergraduate</option>
						<option>Postgraduate</option>
					</select>
				</div>

				<div className="relative lg:max-w-sm">
					<select
						onChange={(e) => setSelectUniversity(e.target.value)}
						className=" p-2.5 lg:w-60 w-full  bg-white border-2 border-[#304F40] rounded-3xl shadow-sm outline-none appearance-none  text-black"
					>
						<option className="bg-[#2E6644]">Select a university</option>
						{universityName.map((data) => (
							<option>{data.institutions}</option>
						))}
					</select>
				</div>
				<button
					onClick={() => setSearchButton(!searchButton)}
					className="p-2.5 lg:w-60 w-full  rounded-3xl shadow-sm outline-none appearance-none focus:border-indigo-600 text-white cursor-pointer bg-[#304F40]"
				>
					Search
				</button>
			</div>

			{/* {searchButton && (
				<>
					{dataYearToShow?.map((data) => (
						<>
							{data.scholarShipList.map((d) => (
								<>
									<WesternSydney d={d} />
								</>
							))}
						</>
					))}
				</>
			)} */}
			{searchButton && (
				<>
					{" "}
					{dataToShow.map((data) => (
						<div>
							{data.scholarShipList.map((d) => (
								<>
									{" "}
									<WesternSydney d={d}></WesternSydney>
								</>
							))}
						</div>
					))}
				</>
			)}
		</>
	);
};

export default SearchBox;
