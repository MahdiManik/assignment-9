const Apply = () => {
  return (
    <div className="">
      <div className="">
        <img
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
