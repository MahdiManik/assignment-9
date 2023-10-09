import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { LiaUniversitySolid } from "react-icons/lia";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  const [sameId, setSameId] = useState({});

  useEffect(() => {
    const findData = details.find((detail) => detail.id == idInt);
    setSameId(findData);
  }, [details, idInt]);

  const { image, price, description, title } = sameId || {};

  console.log(sameId);

  return (
    <div>
      <div className="mt-20 ">
        <h4 className="text-5xl font-bold bg-[#f4f4f4] text-center p-6 text-[#001335]">
          Card Details
        </h4>
        <div className="bg-[#001535]">
          <h4 className="max-w-6xl mx-auto text-[#ffffff] py-4 flex justify-start  items-center">
            <span className="text-xl pr-2">
              <LiaUniversitySolid></LiaUniversitySolid>
            </span>
            <span className=" flex justify-start items-center text-md">
              M-Unique-Study Global
            </span>
          </h4>
        </div>

        <div className="md:min-h-full">
          <div className="">
            <img
              data-aos="zoom-out"
              className="md:h-[650px] w-full"
              src={image}
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
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 mb-20 flex flex-col gap-5 justify-center items-start">
        <h3 className="text-4xl font-bold text-[#000000]">{title}</h3>
        <p className="text-[#370000]">
          {description} M-Unique-Study has a long and successful heritage of
          creating value from our research knowledge.
          <br />
          Our market-leading commercial consultancy and award-winning technology
          commercialization provides considerable value to those we work with
          and the economy, through knowledge transfer partnerships, licensing,
          consultancy and more
          <br />
          Our strength is in taking our world-class research and turning it into
          useful knowledge, tangible products and even companies.
          <br />
          Join our mailing list to be the first to hear about the latest
          updates, including event launches, agenda releases and speaker
          announcements.
        </p>
        <p
          className="font-medium 
			  text-[#041e42] text-center 
			    border-2 py-2 px-6 rounded-xl border-[#041e42]"
        >
          Price: {price}
        </p>
      </div>
    </div>
  );
};

ServiceDetails.propTypes = {};

export default ServiceDetails;
