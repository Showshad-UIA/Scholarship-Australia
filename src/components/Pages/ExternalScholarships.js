import {
  faArrowUpRightFromSquare,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExternalBanner from '../Banner/ExternalBanner';
import Enquire from './Enquire';

const ExternalScholarships = () => {
  const [externalToFrom, setExternalToFrom] = useState();
  const navigate = useNavigate();
  const id = 55;

  return (
    <div>
      <ExternalBanner></ExternalBanner>
      <div
        className={
          externalToFrom ? 'hidden' : 'max-w-7xl mx-auto  lg:mb-24 lg:mt-7 '
        }
      >
        <div className="  shadow-sm mb-5">
          <div className="">
            <div className=" ">
              <div className=" pb-10  ">
                <div className=" lg:mx-10 ">
                  <p className="    font-sans   ">
                    <span className="  text-[#1E282D] font-sans text-xl font-bold p-2 px-3 ">
                      View All Available External Scholarships
                    </span>
                  </p>
                  <h1 className="mb-3 border-t-4 mx-2 border-[#1E282D]"></h1>

                  <p className=" px-3 text-[#304F40] font-semibold   text-justify mb-5  my-3 font-sans">
                    The following organisations offer scholarships to help
                    support research candidatures. Applications are made
                    directly to the relevant organisations.
                  </p>
                </div>

                <div className="lg:mx-12 ">
                  <div className="flex gap-2 px-2 ">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-6 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify  flex ">
                      <a href="https://aurorafoundation.com.au/">
                        <span className=" border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          Aurora Indigenous Scholarships Portal
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black "
                      ></FontAwesomeIcon>
                    </p>
                  </div>

                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.dcceew.gov.au/science-research/abrs/grants">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          Australian Biological Resources Study (ABRS)
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.acn.edu.au/scholarships">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          Australian College of Nursing Scholarships
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.ainse.edu.au/postgraduate/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          Australian Institute of Nuclear Science and
                          Engineering (AINSE)
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.appea.com.au/about/about-us/scholarships/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          Australian Petroleum Production & Exploration
                          Association
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://australianrotaryhealth.org.au/research/current-research/current-research/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600  ">
                          Australian Rotary Health
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://australiannursesmemorialcentre.org.au/index.php/scholarships/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          Australian Nurses Memorial Centre Scholarships
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.avantdifference.org.au/dit-scholarship/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          Avant Doctor in Training (DIT) Research Scholarship
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://cmcrc.com/education/phd-scholarships/phd-program/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          Capital Markets Cooperative Research Centre (CMCRC)
                          Scholarships
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.csiro.au/en/careers/Scholarships-student-opportunities">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          CSIRO Scholarships
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>

                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.dementia.org.au/research/grants">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          Dementia Australia Research Foundation
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://internationaleducation.gov.au/Scholarships/Scholarships-and-Fellowships/Pages/default.aspx">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          Endeavour Leadership Program
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.fulbright.org.au/applicants/australian-applicants/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          Fulbright Scholarships
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                      to study in the USA.
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.daad-australia.org/en/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          German Academic Exchange Service (DAAD)
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.heartfoundation.org.au/bundles/our-research/research/research-funding-application">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          Heart Foundation Research Funding
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>

                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://jade.finance/scholarship.php">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          Jade Finance Tertiary Studies Scholarship
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.kcl.ac.uk/menzies/study-with-us">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          Menzies Australia Institute
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.westernsydney.edu.au/schools/grs/scholarships">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          MOVE Muscle, Bone and Joint Health Scholarship Scheme
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.msaustralia.org.au/annual-funding-opportunities/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                          MS Research Australia (Multiple Sclerosis)
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.nhmrc.gov.au/funding/find-funding/postgraduate-scholarships">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          National Health and Medical Research Council (NHMRC)
                          Scholarships
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.statesuper.nsw.gov.au/about-us/scholarship">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600  ">
                          State Super Academic Scholarship Programps
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="http://wentworthgroup.org/programs/science-program/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          Wentworth Group Science Group Scholarships
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://www.wineaustralia.com/research/applying-for-funding/phd-and-masters-by-research-scholarships">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          Wine Australia PhD and Masters Scholarships
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>
                  <div className="flex gap-2  px-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-9 w-2  text-black  "
                    ></FontAwesomeIcon>

                    <p className="text-justify mb-2">
                      <a href="https://yta.se/blogg/scholarship/">
                        <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600">
                          yta.se Climate Scholarship
                        </span>
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="h-6 w-2.5 px-1 text-black  "
                      ></FontAwesomeIcon>
                    </p>
                  </div>

                  <div className=" text-justify mt-7">
                    <p className="  text-[#304F40]  ">
                      Would you like someone experienced to review and give
                      feedback prior to submitting your scholarship application?
                      Scholarships Australia can assist you to get connected
                      with consultants who are previous scholarship recipients
                      in your field to ensure you submit a competitive
                      application
                      <span
                        className="  bg-[#304F40] my-2 cursor-pointer px-2  py-1 text-white rounded-2xl "
                        // onClick={()=>setExternalToFrom(!externalToFrom)}
                        onClick={() => navigate(`/external_enquire`)}
                      >
                        {/* <a href=' '>Enquire now</a> */}
                        Enquire now
                      </span>
                      .
                    </p>
                    <p className="  mt-3 text-[#304F40] ">
                      If you would like to promote a scholarship offered by your
                      organisation on this page, please email us at{' '}
                      <span className="border-b-[1px] text-gray-800 font-sans  font-semibold border-[#1E282D] border-dotted    hover:text-red-600 ">
                        scholarships@australia.edu.au.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        // externalToFrom && <Enquire external={true}/>
      }
    </div>
  );
};

export default ExternalScholarships;
