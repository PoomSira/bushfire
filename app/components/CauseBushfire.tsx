import React from "react";
import Image from "next/image";
import FlameSection from "./FlameSection";

const CauseBushfire = () => {
  return (
    <div>
      <div className="flex items-center justify-center max-w-screen-xl mx-auto p-4 rounded-lg">
        <div className="flex w-full">
          {/* Koala Section */}
          <div className="flex w-1/2 justify-center items-center">
            <div className="w-56 aspect-square overflow-visible transition-transform duration-500 hover:scale-105">
              <Image
                src="/koala-t.png"
                alt="Koala doctor with presentation"
                width={450}
                height={450}
                className="object-cover animate-moveSideways"
              />
            </div>
          </div>

          {/* Flame Section */}
          <FlameSection />
        </div>
      </div>

      <div className="bg-[#FFFBF2] p-12 rounded-lg">
        <div className="py-4 bg-[#ffe6c5] rounded-lg shadow-lg">
          <p className="text-2xl text-orange-600 text-center">Cause</p>
          <p className="text-xl font-medium text-gray-800 text-center mb-2 p-5">
            In a bushfire, potential fuels include things like dry grass,
            leaves, twigs, and branches. These fuels can catch fire, or ignite,
            if they get too hot, especially during hot and dry weather.
            Sometimes, lightning or even human activity, like a campfire or a
            spark from machinery, can start a fire. To control and put out a
            bushfire, firefighters work hard by creating firebreaks, which are
            gaps in the vegetation that stop the fire from spreading. They also
            use water and fire retardants to slow down and extinguish the
            flames, protecting people, animals, and homes from the fire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CauseBushfire;
