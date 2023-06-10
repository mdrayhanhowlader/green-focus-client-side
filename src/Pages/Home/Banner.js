import { Carousel } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className="w-5/5 mx-auto">
      <div className="h-4/5 sm:h-4/5 md:h-screen">
        <Carousel>
          <img
            className="w-full"
            src="https://images.pexels.com/photos/1196121/pexels-photo-1196121.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          <img
            src="https://images.pexels.com/photos/2229671/pexels-photo-2229671.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="..."
          />
          <img
            src="http://demo.enpek.com/html-templates/dye/assets/images/slider/slider-3.jpg"
            alt="..."
          />
          <img
            src="http://demo.enpek.com/html-templates/dye/assets/images/slider/slider-1.jpg"
            alt="..."
          />
          <img
            src="http://demo.enpek.com/html-templates/dye/assets/images/slider/slider-2.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
