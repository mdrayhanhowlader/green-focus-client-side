import { Button, Card } from "flowbite-react";
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
      <div className="About w-4/5 mx-auto my-12">
        {/* <div className="card card-side bg-base-100 shadow-xl w-full mx-auto md:grid grid-cols-2">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/13158034/pexels-photo-13158034.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="dream photo"
          />
          <div className="card-body">
            <h2 className="card-title">Dreams</h2>
            <p>
              It was a dream when i saw my father. His photography was so good.
              Now I am a photographer. I like to take wild photo, Beautiful
              nature, animals, specially deers. I like to take deer photos. they
              are so humble and friendly. I have a story of Sundarban forest
              with dear. If i get a time sometimes i will share with you. Thank
              you..
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div> */}

        <div className="w-full mx-auto md:grid md:grid-cols-2">
          <div>
            <img
              src="https://images.pexels.com/photos/13158034/pexels-photo-13158034.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="dream photo"
            />
          </div>
          <div className="p-8 mt-2 ">
            <h2 className="font-bold text-slate-800 text-3xl pb-4">Dreams</h2>
            <p className="font-medium text-md text-slate-700">
              It was a dream when i saw my father. His photography was so good.
              Now I am a photographer. I like to take wild photo, Beautiful
              nature, animals, specially deers. I like to take deer photos. they
              are so humble and friendly. I have a story of Sundarban forest
              with dear. If i get a time sometimes i will share with you. Thank
              you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
