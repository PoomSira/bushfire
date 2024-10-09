import React, { useState } from "react";

const BushfireSurvival: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState("");

  const openModal = (videoSrc: string) => {
    setModalVideoSrc(videoSrc);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalVideoSrc("");
  };

  return (
    <div className="w-full mx-auto p-4">
      {/* Section: Leave Early */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">
          Leave Early
        </h2>
        <hr className="w-auto max-w-xs border-gray-700 mb-6 mx-auto" />

        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <video
              className="w-full h-auto rounded-lg"
              loop
              autoPlay
              playsInline
            >
              <source
                src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726650156/Leave_Early_lb1t86.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <button
          className="mt-4 px-4 py-2 rounded-lg mx-auto block  bg-orange-400 text-white font-semibold shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105"
          onClick={() =>
            openModal(
              "https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726650163/Leave_Early_Steps_u9dppa.mp4"
            )
          }
        >
          Show Steps
        </button>
      </section>

      {/* Section: Well Prepared */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">
          Well Prepared
        </h2>
        <hr className="w-auto max-w-xs border-gray-700 mb-6 mx-auto" />

        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <video
              className="w-full h-auto rounded-lg"
              loop
              autoPlay
              playsInline
            >
              <source
                src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726650328/Well_prepared_urvvqa.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <button
          className="mt-4 px-4 py-2 rounded-lg mx-auto block  bg-orange-400 text-white font-semibold shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105"
          onClick={() =>
            openModal(
              "https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726650342/Prepared_steps_wbby1x.mp4"
            )
          }
        >
          Show Steps
        </button>
      </section>

      {/* Section: Last Option */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">
          Last Option
        </h2>
        <hr className="w-auto max-w-xs border-gray-700 mb-6 mx-auto" />

        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <video
              className="w-full h-auto rounded-lg"
              loop
              autoPlay
              playsInline
            >
              <source
                src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726649866/Last_option_rofcy2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <button
          className="mt-4 px-4 py-2 rounded-lg mx-auto block  bg-orange-400 text-white font-semibold shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105"
          onClick={() =>
            openModal(
              "https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726649875/Last_Resort_Flowchart_fvssdg.mp4"
            )
          }
        >
          Show Steps
        </button>
      </section>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="relative w-full max-w-5xl p-6">
            <div className="flex justify-end">
              <button className="text-white text-5xl mb-4" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="flex justify-center">
              <video
                className="w-full h-auto rounded-lg"
                style={{ maxHeight: "85vh", width: "auto" }} // Adjust height and keep width auto for responsiveness
                loop
                autoPlay
                playsInline
              >
                <source src={modalVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BushfireSurvival;
