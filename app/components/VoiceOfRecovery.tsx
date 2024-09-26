import React from "react";

const VoiceOfRecovery = () => {
  return (
    <div className="flex flex-col p-8 rounded-xl">
      {/* First Layout: Video 1 and Summary */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-10">
        {/* Video 1 */}
        <div className="w-full md:w-1/2 p-2">
          <iframe
            className="w-full h-52 md:h-80 rounded-lg"
            src="https://www.youtube.com/embed/Lsu3SrzhI-Y"
            title="Path to Recovery"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Summary Card for Video 1 */}
        <div className="w-full md:w-1/2 p-6 bg-orange-200 rounded-xl flex flex-col justify-center shadow-lg">
          <h2 className="text-xl text-[#EA580B] text-center font-bold mb-2">
            Survivor&apos;s Story of Black Saturday Bushfires
          </h2>
          <p className="text-gray-700 text-lg">
            In this video, a survivor reflects on the tragic events of Black
            Saturday (February 7, 2009), when the devastating bushfires took her
            son&apos;s life and destroyed her home. She shares the emotional
            aftermath, the chaos, and confusion experienced by those who lost
            loved ones. A turning point came seven weeks later during a
            community meeting, where she found comfort in connecting with others
            who shared the pain of loss, realizing they were linked by their
            grief and experiences.
          </p>
        </div>
      </div>

      {/* Second Layout: Summary 2 and Video 2 */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Summary Card for Video 2 */}
        <div className="w-full md:w-1/2 p-6 bg-orange-200 rounded-xl flex flex-col justify-center shadow-lg">
          <h2 className="text-xl text-[#EA580B] text-center font-bold mb-2">
            Black Saturday Survivor&apos;s Story: From Devastation to Giving
            Back
          </h2>
          <p className="text-gray-700 text-lg">
            In this video, a survivor of the Black Saturday bushfires recounts
            the devastating experience of losing her home. She describes the
            overwhelming sight of destruction and the emotional toll it took.
            The Red Cross played a crucial role in supporting her during this
            difficult time, providing comfort and aid. Inspired by the help she
            received, she now volunteers to give back to others in need. The
            video highlights the importance of emotional support and how shared
            experiences, like losing a home, can create a deep understanding
            between survivors. Despite the challenges, she holds hope for the
            future.
          </p>
        </div>

        {/* Video 2 */}
        <div className="w-full md:w-1/2 p-2">
          <iframe
            className="w-full h-52 md:h-80 rounded-lg"
            src="https://www.youtube.com/embed/arSOsoTDLY8"
            title="Significant Memories in Fire Management"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VoiceOfRecovery;
