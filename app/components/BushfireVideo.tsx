import React from "react";
import Image from "next/image";

const WindFactors = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto mb-8 p-8 bg-[#FFFBF2] rounded-xl">
      {/* Left side with question and explanation */}
      <div className="w-2/3 flex flex-col justify-between p-4 rounded-xl transform transition-transform duration-300 hover:scale-105">
        {/* Question Section */}
        <div className="flex items-center mb-6">
          <div className="ml-4 p-4 bg-[#FFE6C5] rounded-xl">
            <p className="text-2xl font-semibold text-gray-700">
              From the clip, can you explain the 2 factors that wind can spread
              the bushfire strongly and quickly?
            </p>
          </div>
        </div>

        {/* Explanation Section */}
        <div className="flex items-center">
          <div className="ml-4 p-4 bg-[#FFE6C5] rounded-xl">
            <p className="text-xl text-gray-700">
              Strong winds make bushfires worse by blowing flames and helping
              the fire spread quickly across the land. Winds can carry hot
              embers far away, which can start new fires, called spot fires,
              many kilometers ahead of the main fire. If the wind suddenly
              changes direction, it can make the bushfire even more dangerous
              because it can push the fire in a new direction and make it grow
              faster. This sudden change in wind is often caused by a weather
              pattern like a cold front, known as a cool change, which can make
              the fire much harder to control.
            </p>
          </div>
        </div>
      </div>

      {/* Right side with video */}
      <div className="w-1/2 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          controls
          width="500"
          height="500"
          className="rounded-xl"
        >
          <source src="/fire.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Do You Know Card Section */}
      <div className="w-full p-6 bg-[#FFE6C5] rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
        <p className="text-center text-xl font-semibold text-gray-800">
          Do you Know? <br />
          <span className="text-lg font-normal">
            The most important aspects of weather that affect fire and fuels are
            temperature, precipitation, wind, and humidity.
          </span>
        </p>
      </div>
    </div>
  );
};

export default WindFactors;
