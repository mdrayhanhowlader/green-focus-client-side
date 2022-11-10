import React from "react";
import useTitle from "./../../Hooks/useTitle";

const About = () => {
  useTitle("About Us");
  return (
    <div className="w-3/5 mx-auto my-20 bg-slate-700 text-slate-50 text-center p-8 rounded-lg shadow-lg">
      <h2 className="font-bold text-3xl text-center text-cyan-300">About us</h2>
      <p className="text-center font-bold">
        I love photography. I sell nature beautiful photos.
      </p>
    </div>
  );
};

export default About;
