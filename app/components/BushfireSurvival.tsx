import React from "react";

const BushfireSurvival: React.FC = () => {
  return (
    <div className="w-full mx-auto p-4">
      {/* Section: Leave Early */}
      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-4 text-center text-gray-700">
          Leave Early
        </h3>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Leave Early Video */}
          <div className="w-full md:w-1/2">
            <video className="w-full h-auto rounded-lg" loop autoPlay>
              <source src="/Leave_Early.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Leave Early Steps Video */}
          <div className="w-full h-auto md:w-1/2 flex">
            <video
              className="w-full h-auto rounded-lg md:w-3/4 lg:w-full"
              loop
              autoPlay
            >
              <source src="/Leave_Early_Steps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section: Well Prepared */}
      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-4 text-center text-gray-700">
          Well Prepared
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Well Prepared Video */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <video className="w-full h-auto rounded-lg" loop autoPlay>
              <source src="/Well_prepared.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Prepared Steps Video */}
          <div className="w-full md:w-1/2 flex">
            <video
              className="w-full h-auto rounded-lg md:w-3/4 lg:w-full"
              loop
              autoPlay
            >
              <source src="/Prepared_steps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Section: Last Option */}
      <section>
        <h3 className="text-3xl font-bold mb-4 text-center text-gray-700">
          Last Option
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Last Option Video */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <video className="w-full h-auto rounded-lg" loop autoPlay>
              <source src="/Last_option.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Last Option Steps Video */}
          <div className="w-full md:w-1/2 flex">
            <video
              className="w-full h-auto rounded-lg md:w-3/4 lg:w-full"
              loop
              autoPlay
            >
              <source src="/Last_Resort_Flowchart.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BushfireSurvival;
