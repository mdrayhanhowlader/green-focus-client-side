import React from "react";
import { AiOutlineMinus, AiOutlineInstagram } from "react-icons/ai";

const InstagramGallary = () => {
  return (
    <div className="bg-red-700 opacity-90 bg-cover bg-center py-10 text-white">
      <div className="w-4/5 mx-auto">
        <h1 className="flex items-center gap-2 text-5xl pb-16">
          <AiOutlineMinus className="fill-white" />{" "}
          <span>Instragram Gallery</span>
        </h1>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <h4 className="text-xl font-semibold">ThemeTidy</h4>
            <h6 className="text-lg pt-1">@GreenFocus</h6>
            <p className="text-justify my-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy.
            </p>
            <button className="flex items-center gap-2 text-xl font-semibold bg-slate-50 px-6 py-2 rounded text-red-700">
              <AiOutlineInstagram />
              <span>Follow us</span>
            </button>
          </div>
          <div>
            <img
              src="http://demo.enpek.com/html-templates/dye/assets/images/banner/banner-small-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="http://demo.enpek.com/html-templates/dye/assets/images/banner/banner-small-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="http://demo.enpek.com/html-templates/dye/assets/images/banner/banner-small-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramGallary;
