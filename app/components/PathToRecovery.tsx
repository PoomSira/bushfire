import React from "react";

const PathToRecovery = () => {
  return (
    <div className="flex flex-col p-8 rounded-xl">
      {/* First Layout: Video 1 and Summary */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-10">
        {/* Video 1 */}
        <div className="w-full md:w-1/2 p-2">
          <iframe
            className="w-full h-52 md:h-80 rounded-lg"
            src="https://www.youtube.com/embed/xXHiTYXckBA"
            title="Path to Recovery"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Summary Card for Video 1 */}
        <div className="w-full md:w-1/2 p-6 bg-orange-200 rounded-xl flex flex-col justify-center shadow-lg">
          <h2 className="text-xl text-[#EA580B] text-center font-bold mb-2">
            Recovery from a bushfire - Forest Fire Management Victoria
          </h2>
          <p className="text-gray-700 text-lg">
            The video shows the recovery efforts at Martins Creek after a
            bushfire, focusing on making the land safe by removing hazardous
            trees, fixing roads, and preventing erosion. It highlights the use
            of bulldozers and graders for creating firebreaks and restoring
            access. The team also works closely with Traditional Owners to
            protect cultural heritage sites and involve them in the recovery
            process. Reopening tourist roads quickly is a priority to support
            the local community and help people return to the area.
          </p>
        </div>
      </div>

      {/* Second Layout: Summary 2 and Video 2 */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-10">
        {/* Summary Card for Video 2 */}
        <div className="w-full md:w-1/2 p-6 bg-orange-200 rounded-xl flex flex-col justify-center shadow-lg">
          <h2 className="text-xl text-[#EA580B] text-center font-bold mb-2">
            After a bushfire: How the environment recovers
          </h2>
          <p className="text-gray-700 text-lg">
            The speaker reflects on the aftermath of the 2006 Grampians
            bushfire, emphasizing the long-term impact of fire on wildlife and
            landscapes. They discuss recovery efforts after the Black Saturday
            bushfires and the importance of proper fire management, including
            winter burning, to support biodiversity. The joy of participating in
            restoration efforts and connecting burnt and unburnt forests is
            highlighted.
          </p>
        </div>

        {/* Video 2 */}
        <div className="w-full md:w-1/2 p-2">
          <iframe
            className="w-full h-52 md:h-80 rounded-lg"
            src="https://www.youtube.com/embed/CqtWo2RR4FI?feature=shared"
            title="Significant Memories in Fire Management"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Third Layout: Video 3 and Summary */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mb-10">
        {/* Video 3 */}
        <div className="w-full md:w-1/2 p-2">
          <iframe
            className="w-full h-52 md:h-80 rounded-lg"
            src="https://www.youtube.com/embed/dNKKIKPhrv8"
            title="Recovery of East Gippsland Rainforest"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Summary Card for Video 3 */}
        <div className="w-full md:w-1/2 p-6 bg-orange-200 rounded-xl flex flex-col justify-center shadow-lg">
          <h2 className="text-xl text-[#EA580B] text-center font-bold mb-2">
            Recovery of East Gippsland Rainforest
          </h2>
          <p className="text-gray-700 text-lg">
            This video explores the recovery of East Gippsland&apos;s warm
            temperate rainforest following devastating fires. It highlights the
            significant changes in the landscape, including the removal of
            vegetation and sediment buildup affecting waterways. The speaker
            discusses the uncertain future of the rainforest ecosystem, as it is
            not well-adapted to recover from fire. Encouraging signs of recovery
            are observed, such as improving water quality and the re-sprouting
            of native trees like canookas. The video emphasizes the importance
            of monitoring these unique ecosystems, particularly the special
            spotted gum forest, and celebrates the resilience of heath lands
            showing new growth.
          </p>
        </div>
      </div>

      {/* Fourth Layout: Summary and Video 4 */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Summary Card for Video 4 */}
        <div className="w-full md:w-1/2 p-6 bg-orange-200 rounded-xl flex flex-col justify-center shadow-lg">
          <h2 className="text-xl text-[#EA580B] text-center font-bold mb-2">
            Bushfire impacts on Victoria&apos;s environment
          </h2>
          <p className="text-gray-700 text-lg">
            In this video, Dr. Mark Norman and James Todd discuss the aftermath
            of severe fires across Victoria, focusing on both the extensive
            damage and areas of survival. Recent aerial surveys reveal sobering
            impacts from high-intensity fires, yet some regions have remained
            unscathed, providing hope for recovery. The Victorian government has
            allocated $17.5 million for emergency actions to support
            biodiversity recovery efforts. The video highlights resilient
            landscapes, including intact rainforests and green corridors, which
            are crucial for the survival of threatened species like the
            Brush-tailed rock-wallaby. It emphasizes the need for targeted
            recovery actions as ecosystems may take a long time to heal, with
            some areas potentially changing forever due to climate change and
            unprecedented fire conditions.
          </p>
        </div>

        {/* Video 4 */}
        <div className="w-full md:w-1/2 p-2">
          <iframe
            className="w-full h-52 md:h-80 rounded-lg"
            src="https://www.youtube.com/embed/kaGNi0WeD-U"
            title="Impact of Fire on Biodiversity in Victoria"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PathToRecovery;
