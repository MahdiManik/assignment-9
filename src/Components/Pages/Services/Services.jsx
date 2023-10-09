import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-20">
      <h3 className="text-5xl font-bold text-[#000000]">Our Services</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
