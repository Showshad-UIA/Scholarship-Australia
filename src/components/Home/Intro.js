import React from "react";

const Intro = () => {
	return (
    <div className="shadow-2xl text-justify  text-white container mx-auto px-10 text-md my-3 bg-[#304F40] rounded-3xl">
      <h1 className="text-center text-2xl font-semibold py-2 font-sans">
        Scholarships in Australia
      </h1>
      <p className="my-2 font-sans">
        No matter what you are intending to study and where, you will be sure to
        find some financial assistance on offer to help you pay for it.
      </p>
      <p className="pb-3 font-sans">
        There are currently more than 3000 scholarships available to Australian
        students, across both the higher education and vocational sectors.
        Scholarships can cover an array of costs from tuition fees to living and
        accommodation costs, our advice is to investigate your options early on
        as the amount of information to get through and applications to fill can
        be overwhelming.
      </p>
    </div>
  );
};

export default Intro;
