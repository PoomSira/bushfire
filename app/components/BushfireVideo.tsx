import React from "react";
import Image from "next/image";

const BushfireVideo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto  p-4 bg-[#FFFBF2] rounded-xl">
      {/* Right side with video */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          width="500"
          height="500"
          className="rounded-xl"
        >
          <source
            src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto,f_auto/v1726649696/fire_tjpjly.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Left side with question and explanation */}
      <div className="w-full md:w-2/3 flex flex-col justify-between p-4 rounded-xl transform transition-transform duration-300 hover:scale-105">
        {/* Question Section */}
        <div className="flex items-center mb-6">
          <div className="ml-0 md:ml-4 p-4 bg-[#FFE6C5] rounded-xl">
            <p className="text-2xl font-semibold text-gray-700">
              From the clip, can you explain the 2 factors that wind can spread
              the bushfire strongly and quickly?
            </p>
          </div>
        </div>

        {/* Explanation Section */}
        <div className="flex items-center">
          <div className="ml-0 md:ml-4 p-4 bg-[#FFE6C5] rounded-xl">
            <p className="text-xl text-gray-700">
              <strong>1. Spot Fires from Hot Embers:</strong> Strong winds can
              carry hot embers over long distances, often several kilometers
              ahead of the main fire. These embers can start new fires, known as
              spot fires, which makes the bushfire spread quickly and
              unpredictably across a larger area. This creates multiple fire
              fronts that are harder to control and contain.
            </p>
            <p className="text-xl text-gray-700 mt-4">
              <strong>2. Rapid Spread due to Wind Direction Change:</strong> If
              the wind suddenly changes direction, often due to a weather
              pattern like a cool change or cold front, it can push the fire in
              a new direction, making it grow even faster. This unexpected shift
              can make the bushfire more dangerous as it spreads into new areas
              rapidly, catching firefighters and communities off guard, and
              increasing the difficulty of controlling the fire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BushfireVideo;
