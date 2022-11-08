import { Carousel } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className="w-5/5 mx-auto">
      <div className="h-4/5 sm:h-4/5 md:h-screen">
        <Carousel>
          <img
            src="https://images.pexels.com/photos/6404904/pexels-photo-6404904.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          <img
            src="https://images.pexels.com/photos/70080/elephant-africa-african-elephant-kenya-70080.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          <img
            src="https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          <img
            src="https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          <img
            src="https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
