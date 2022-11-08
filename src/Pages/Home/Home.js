import { Button } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HomeService from "./HomeService";

const Home = () => {
  const home = useLoaderData([]);
  return (
    <div>
      <Banner></Banner>
      <div className="w-4/5 mx-auto my-8 grid md:grid-cols-3 gap-4">
        {home.map((service) => (
          <HomeService key={service._id} service={service}></HomeService>
        ))}
      </div>
      <div className="w-4/5 mx-auto mt-4 mb-8">
        <Link to="/services">
          <Button className="mx-auto" gradientDuoTone="greenToBlue">
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
