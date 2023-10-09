import { Link } from "react-router-dom";
import student from "../../../assets/college.jpg";
import register from "../../../assets/smiling.jpg";
import { HiArrowRight } from "react-icons/hi";

const Apply = () => {
  return (
    <div className="mt-20">
      <div className="">
        <img
          src={student}
          data-aos="zoom-in"
          className="md:w-full relative top-0 bottom-0 left-0 md:h-[700px]"
          alt=""
        />
        <div
          className="flex flex-col justify-start items-start
	absolute -mt-[520px] ml-16"
        >
          <div className="flex flex-col  justify-start items-center">
            <p
              className="text-black text-xl justify-center items-center
		  font-bold px-8 py-3 bg-white flex rounded-xl"
            >
              INTERNATIONAL STUDENTS
            </p>
            <h1
              className="text-5xl font-bold bg-[#001335] 
	  text-white p-8 rounded-xl leading-tight"
            >
              Begin your UK Masters <br /> in January 2024
            </h1>
            <div>
              <p
                className="font-semibold text-white py-6 px-16 rounded-b-xl 
	  bg-[#0b1d3c] leading-8 mb-4"
              >
                Choose from over 35 Masters including computing, <br />{" "}
                engineering, law, business, accounting and <br /> international
                hospitality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero pt-24 text-[#000000] bg-[#ffffff]">
        <div className="hero-content flex-col lg:flex-row">
          <img
            data-aos="zoom-in-right"
            src={register}
            className="md:max-w-xl h-96 rounded-lg shadow-2xl"
          />
          <div className="p-4">
            <h1 className="md:text-5xl  font-bold md:font-bold">
              Register your interest
            </h1>
            <p className="py-6 mb-8 text-[#370000]">
              Sign up to find out more about starting your studies at
              M-Unique-Study in January 2024.
              <br />
              <br />
              Get the latest information on events happening online and where
              you are!
            </p>
            <Link
              to={"/register"}
              className="flex items-center gap-2 mt-auto hover:text-white
			  hover:bg-[#041e42] border-2 py-4 w-80 font-bold text-center justify-center text-[#041e42] rounded-xl border-[#041e42]"
            >
              REGISTER YOUR INTEREST
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
      <h4 className="text-5xl font-bold mt-16 bg-[#f4f4f4] text-center p-6 text-[#001335]">
        Our Events
      </h4>
      <div className="bg-[#07254e] h-[550px]  w-full ">
        <div className="  grid grid-cols-3  pt-16 items-center max-w-6xl mx-auto">
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
              Gary Young - Dispatches from the diaspora : From Nelson Mandela to
              Black Lives Matter
            </h4>
            <hr />
            <p className="pt-4">21 October 2023</p>
            <h4 className="text-lg font-semibold pb-4">Black History Summit</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
