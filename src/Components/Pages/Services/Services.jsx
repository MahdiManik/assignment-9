import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <h3 className="text-3xl">Services {services.length}</h3>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
