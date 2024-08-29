import React from "react";

const DeadpoolBye = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto mb-8">
      <div className="flex w-full">
        <div className="p-12">
          <div className="aspect-square overflow-hidden">
            <video
              src="/D&W-bye.mp4" // Replace with your video file path
              width={600} // Specify width
              height={600} // Specify height
              className="object-cover"
              autoPlay
              loop
              controls
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col h-1/2 items-center justify-center p-12 my-auto bg-[#FFE6C5] rounded-lg shadow-md">
          <p className="text-4xl font-medium text-gray-800 text-center mb-4">
            Work in Progress...
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeadpoolBye;
