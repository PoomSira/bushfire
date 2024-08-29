import { useState } from "react";

const KoalaPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const togglePopup = (): void => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto mb-8">
      <div className="flex w-full">
        <div className="w-1/2 p-12">
          <button
            onClick={togglePopup}
            className="bg-black text-white text-2xl py-2 px-4 rounded hover:bg-orange-300"
          >
            Please Don't Click Me
          </button>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-full max-h-full mx-4 overflow-auto">
                <p className="mb-4 text-2xl font-bold">Work in Progress...</p>
                <div className="flex justify-center mb-4">
                  <video
                    src="/D&W-bye.mp4"
                    className="max-w-full max-h-96 object-contain"
                    autoPlay
                    loop
                    controls
                    muted
                  />
                </div>
                <button
                  className="bg-[#FFE6C5] text-black py-2 px-4 rounded hover:bg-orange-300"
                  onClick={togglePopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KoalaPopup;
