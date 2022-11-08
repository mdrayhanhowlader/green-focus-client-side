import React from "react";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const services = useLoaderData([]);
  return (
    <div>
      <h2 className="text-4xl text-center font-semibold my-8 text-cyan-300">
        My Photography
      </h2>
      <div className="w-4/5 mx-auto my-8 grid md:grid-cols-3 gap-4">
        {services?.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
