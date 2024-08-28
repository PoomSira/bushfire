import React from "react";
import Image from "next/image";

const CauseBushfire = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto mb-8">
      <div className="flex w-full">
        <div className="w-1/2 p-12">
          <div className="aspect-square overflow-visible transition-transform duration-500 hover:scale-105">
            <Image
              src="/koala.png"
              alt="Koala doctor with presentation"
              width={450}
              height={450}
              className="object-cover animate-moveSideways"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col h-1/2 items-center justify-center p-12 my-auto bg-[#FFE6C5] rounded-xl shadow-md transition-transform duration-500 hover:scale-125">
          <p className="text-2xl font-medium text-gray-800 text-center mb-4">
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
