import React from "react";

const LittleAbout = () => {
  return (
    <div className="my-32">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src="https://images.pexels.com/photos/7675088/pexels-photo-7675088.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="mx-8">
          <h2 className="text-3xl text-center font-semibold mb-2">
            a little about me
          </h2>
          <p className="text-gray-500 pb-6 text-justify">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus
            auctor fringilla. Etiam porta sem malesuada magna mollis euismod.
          </p>
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              Photoshop 90%
            </div>
            <div className=" bg-gray-200 rounded-full h-4 mb-2 dark:bg-gray-700 w-[90%]">
              <div className="bg-gray-600 h-4 rounded-full dark:bg-gray-300"></div>
            </div>
            <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
              Final Cut 80%
            </div>
            <div className=" bg-gray-200 rounded-full h-4 mb-2 dark:bg-gray-700 w-[80%]">
              <div className="bg-blue-600 h-4 rounded-full"></div>
            </div>
            <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
              Studio Photography 85%
            </div>
            <div className="w-[85%] bg-gray-200 rounded-full h-4 mb-2 dark:bg-gray-700">
              <div className="bg-red-600 h-4 rounded-full dark:bg-red-500"></div>
            </div>
            <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
              Motion Video 75%
            </div>
            <div className="w-[75%] bg-gray-200 rounded-full h-4 mb-4 dark:bg-gray-700">
              <div className="bg-green-600 h-4 rounded-full dark:bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleAbout;
