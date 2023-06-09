import React from "react";

const Specialist = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div>
        <h2 className="text-3xl font-semibold text-center pt-12 mb-2">
          my specialties
        </h2>
        <p className="text-slate-500 font-semibold text-center mb-12">
          Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id
          nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus
          auctor fringilla. Donec sed odio dui.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="relative">
          <img
            src="https://demos.elemisthemes.com/lydia/style/images/art/s1.jpg"
            alt=""
            className="w-full h-full"
          />
          <span className="absolute bottom-6 right-0 text-lg font-semibold text-white bg-gray-800 bg-opacity-50 py-2 px-4">
            Fashion Photography
          </span>
        </div>
        <div className="relative">
          <img
            src="https://demos.elemisthemes.com/lydia/style/images/art/s2.jpg"
            alt=""
            className="w-full h-full"
          />
          <span className="absolute bottom-6 right-0 text-lg font-semibold text-white bg-gray-800 bg-opacity-50 py-2 px-4">
            Fashion Photography
          </span>
        </div>
        <div className="relative">
          <img
            src="https://demos.elemisthemes.com/lydia/style/images/art/s3.jpg"
            alt=""
            className="w-full h-full"
          />
          <span className="absolute bottom-6 right-0 text-lg font-semibold text-white bg-gray-800 bg-opacity-50 py-2 px-4">
            Fashion Photography
          </span>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
