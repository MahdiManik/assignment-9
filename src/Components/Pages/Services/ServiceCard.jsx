import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = (service) => {
  const { id, title, price, description, image } = service.service;

  return (
    <>
      <div
        data-aos="zoom-in"
        className="bg-white border flex flex-col h-full p-4 border-white rounded-lg 
	     shadow-2xl pb-4"
      >
        <div className="">
          <img
            className=" h-60 w-full border-b-8 hover:scale-[1.07] duration-1000 hover:border-[#005c97] border-[#001535] rounded-t-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col pt-6">
          <h5
            className="mb-5 text-2xl font-bold tracking-tight 
		  text-[#000000]"
          >
            {title}
          </h5>

          <p className="mb-3 font-normal text-[#370000]">{description}</p>
          <div className="flex flex-row-reverse mt-auto justify-between  items-center py-4">
            <Link
              to={`/service/${id}`}
              className="flex items-center gap-2 mt-auto hover:text-white
			  hover:bg-[#041e42] border-2 py-2 px-6 text-[#041e42] rounded-xl border-[#041e42]"
            >
              Service Details
            </Link>
            <p
              className="items-center mt-auto font-medium 
			  text-[#041e42] text-center 
			    border-2 py-2 px-6 rounded-xl border-[#041e42]"
            >
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
