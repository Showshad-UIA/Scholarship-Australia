import React from "react";

const SearchBox = () => {
	return (
		<div className="flex justify-center mt-5 gap-5">
			<div className="relative  lg:max-w-sm">
				<select className="p-2.5 lg:w-60 w-full text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
					<option>Select a Year</option>
					<option>Scholarship 2022</option>
					<option>Scholarship 2023</option>
				</select>
			</div>

			{/* <div className="relative  lg:max-w-sm">
				<select className="p-2.5 lg:w-60 w-full text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
					<option>Select a course</option>

					<option>MBA</option>
					<option>Business and Management</option>
					<option>Computer Science and IT </option>
				</select>
			</div> */}

			<div className="relative  lg:max-w-sm">
				<select className="p-2.5 lg:w-60 w-full  text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
					<option>Select a study level</option>
					<option>Undergraduate</option>
					<option>Postgraduate</option>
				</select>
			</div>

			<div className="relative lg:max-w-sm">
				<select className=" p-2.5 lg:w-60 w-full text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
					<option>Select a university</option>
					<option>University of Wollongong</option>
					<option>University of Melbourne</option>
					<option>University of Western Sydney</option>
					<option>University of Canberra</option>
				</select>
			</div>
			<button className="rounded-md bg-blue-500 p-2 text-xl">Search</button>
		</div>
	);
};

export default SearchBox;
