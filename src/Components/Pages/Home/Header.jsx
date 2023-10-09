import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { LiaUniversitySolid } from "react-icons/lia";
import eventOne from "../../../assets/event-1.jpg";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: "1500", delay: "400" });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="mt-10 ">
        <h4 className="text-5xl font-bold bg-[#f4f4f4] text-center p-6 text-[#001335]">
          Our Events
        </h4>
        <div className="bg-[#001535]">
          <div className="max-w-6xl mx-auto">
            <h4 className=" text-[#ffffff] py-4 flex justify-start items-center">
              <span className="text-lg pr-2">
                <LiaUniversitySolid></LiaUniversitySolid>
              </span>
              <span className=" flex justify-start items-center text-md">
                M-Unique-Study Global
              </span>
            </h4>
          </div>
        </div>

        <div className="">
          <div className="">
            <img
              data-aos="zoom-in"
              className="md:w-full relative top-0 bottom-0 left-0 md:h-[700px]"
              src={eventOne}
              alt=""
            />
            <div
              className="flex flex-col justify-start items-start
			absolute -mt-[520px] ml-16"
            >
              <div className="flex flex-col  justify-start items-center">
                <h1
                  className="text-5xl font-bold bg-[#001335] 
			  text-white p-8 rounded-xl"
                >
                  January 2024 Intake
                </h1>
                <div>
                  <p
                    className="font-semibold text-white py-6 px-16 rounded-b-xl 
			  bg-[#0b1d3c] leading-8 mb-4"
                  >
                    Looking to study in the UK? Find your perfect <br />
                    postgraduate course at M-Unique-Study.
                  </p>
                  <Link
                    to={"/apply"}
                    className="text-black text-xl justify-center items-center
				  font-bold w-60 py-4 bg-white flex hover:text-white hover:bg-[#0b1d3c] rounded-xl"
                  >
                    APPLY NOW{" "}
                    <span
                      className=" flex hover:text-white ml-3 hover:bg-[#0b1d3c]  text-xl 
				  font-bold"
                    >
                      <HiArrowRight></HiArrowRight>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#07254e] h-[550px]  w-full ">
            <div className="  grid grid-cols-3 mt-16 pt-16 items-center max-w-6xl mx-auto">
              <div className="col-span-2">
                <h3
                  className=" py-3 px-8 w-3/5 text-[#ffffff]
		            loading-1 text-sm rounded-lg
		           bg-[#031336]"
                >
                  FOR LOCAL AND INTERNATIONAL STUDENTS
                </h3>
                <h1
                  className="md:text-5xl text-lg font-bold 
		           md:leading-tight  py-6 text-[#ffffff]"
                >
                  Events for local and <br /> International Applicants
                </h1>
                <p className="text-[#ffffff]">
                  These events will help you apply to M-unique-study. <br />
                  Look our for events in your area.
                </p>
              </div>
              <div className="col-span-1 border-l-2 p-2 pl-6 shadow-5xl justify-start items-center max-w-6xl mx-auto">
                <h1
                  className="md:text-5xl text-lg font-bold 
		           md:leading-tight py-6 text-[#ffffff]"
                >
                  Featured events
                </h1>
                <p className="pb-4">17 October 2023</p>
                <h4 className="text-lg font-semibold pb-4">
                  Gary Young - Dispatches from the diaspora : From Nelson
                  Mandela to Black Lives Matter
                </h4>
                <hr />
                <p className="pt-4">21 October 2023</p>
                <h4 className="text-lg font-semibold pb-4">
                  Black History Summit
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start font-semibold mt-8 text-lg">
          <Link
            to={"/events"}
            className="flex items-center gap-2 hover:text-white
			 hover:bg-[#041e42] border-2 py-4 px-10 
			 rounded-xl
			  border-[#041e42]
			 text-black"
          >
            <span>
              <AiOutlineRight></AiOutlineRight>
            </span>
            VIEW EVENTS
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
