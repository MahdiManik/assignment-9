import { LiaUniversitySolid } from "react-icons/lia";
import eventOne from "../../../assets/event-2.jpg";
import Hero from "../Home/Hero";

const Events = () => {
  return (
    <div className="">
      <div className="mt-20 ">
        <h4 className="text-5xl font-bold bg-[#f4f4f4] text-center p-6 text-[#001335]">
          Our Events
        </h4>
        <div className="bg-[#001535]">
          <div className="max-w-6xl mx-auto">
            <h4 className=" text-[#ffffff] py-4 flex justify-start items-center">
              <span className="text-xl pr-2">
                <LiaUniversitySolid></LiaUniversitySolid>
              </span>
              <span className=" flex justify-start items-center text-md">
                M-Unique Study Global
              </span>
            </h4>
          </div>
        </div>

        <div className="flex md:min-h-full">
          <div className="md:h-[500] h-96 w-full bg-[#07254e] flex flex-col justify-center items-start pl-10">
            <h3
              className=" py-3 px-7  text-[#ffffff] mr-6 
		  loading-1 text-sm rounded-lg
		 bg-[#031336]"
            >
              FOR LOCAL AND INTERNATIONAL STUDENTS
            </h3>
            <h1
              className="md:text-5xl text-lg font-bold 
		md:leading-tight py-6 text-[#ffffff]"
            >
              Events for local <br /> and International <br /> Applicants
            </h1>
            <p className="text-[#ffffff]">
              These events will help you apply to M-unique-study. <br /> Look
              our for events in your area.
            </p>
          </div>
          <div className="">
            <img
              data-aos="zoom-in"
              className="md:h-full h-96 w-full"
              src={eventOne}
              alt=""
            />
          </div>
        </div>
      </div>
      <Hero></Hero>
    </div>
  );
};

export default Events;
