import { Button, Card } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Dreams from "./Dreams";
import HomeService from "./HomeService";
import PhotoLibrary from "./PhotoLibrary";

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
      <div className="About w-4/5 mx-auto">
        <Dreams></Dreams>
      </div>
      <div className="w-4/5 mx-auto my-36">
        <h2 className="text-4xl font-semibold text-green-500 text-center py-8">
          My Library
        </h2>
        <PhotoLibrary></PhotoLibrary>
      </div>
    </div>
  );
};

export default Home;
