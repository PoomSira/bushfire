"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Gauge from "../components/Gauge";
import BushfireAreaMap from "../components/BushfireAreaMap";
import TableauVizSeason from "../components/TableauVizSeason";
import TableauViz from "../components/TableauViz";
import TableauPictograph from "../components/TableauPictograph";
import TableauCluster from "../components/TableauCluster";
import { ChevronDown, ChevronUp } from "lucide-react";

const Page = () => {
  const [value, setValue] = useState(50);

  const [isAnswerVisibleOne, setIsAnswerVisibleOne] = useState(false);
  const [isAnswerVisibleTwo, setIsAnswerVisibleTwo] = useState(false);
  const [isAnswerVisibleThree, setIsAnswerVisibleThree] = useState(false);

  const toggleAnswerOne = () => {
    setIsAnswerVisibleOne(!isAnswerVisibleOne);
  };

  const toggleAnswerTwo = () => {
    setIsAnswerVisibleTwo(!isAnswerVisibleTwo);
  };

  const toggleAnswerThree = () => {
    setIsAnswerVisibleThree(!isAnswerVisibleThree);
  };

  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <Navigation />
      {/* Hero Section */}
      <div className="relative isolate h-[90vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('/prepare.webp')] bg-cover bg-center">
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

        {/* Content Overlay */}
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Prepare with Bushfire Brigade
              <br />
              Safety Starts with You
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Empowering young minds to be fire-smart and ready for bushfire
              challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Busfire map area */}
      <div className="relative py-8 flex flex-col items-center justify-center w-full">
        <div className="absolute inset-0 bg-[url('/class-room.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
            Assessing my risk
          </h1>
          <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto" />

          <div className="w-full flex p-12 rounded-md h-screen">
            {/* Tableau Visualization */}
            <div className="w-3/4 h-full">
              <TableauVizSeason />
            </div>

            {/* Text Content */}
            <div className="w-1/4 p-6 h-full overflow-auto bg-[#FFFBF2] rounded-lg">
              <div className="p-4 bg-[#FFE6C5] rounded-md shadow-md">
                <h2 className="text-2xl text-[#EA580B] font-bold mb-4">
                  Additional Information
                </h2>
                <div className="cursor-pointer" onClick={toggleAnswerOne}>
                  <h4 className="text-xl font-bold mb-4 text-gray-700 flex justify-between items-center">
                    When should we be careful?
                    {isAnswerVisibleOne ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </h4>
                </div>

                {isAnswerVisibleOne && (
                  <div className="bg-[#FFE6C5]">
                    <p className="mb-4 text-lg text-gray-700">
                      We know that bushfires are more likely to happen during
                      the hottest and driest times of the year.
                    </p>
                  </div>
                )}

                <div className="cursor-pointer" onClick={toggleAnswerTwo}>
                  <h4 className="text-xl font-bold mb-4 text-gray-700 flex justify-between items-center">
                    Which season should we be careful in?
                    {isAnswerVisibleTwo ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </h4>
                </div>

                {isAnswerVisibleTwo && (
                  <div className="bg-[#FFE6C5]">
                    <p className="mb-4 text-lg text-gray-700">
                      As you can see in the chart, summer is the season when
                      bushfires happen the most because it’s hot and dry. Spring
                      and autumn can also be risky.
                    </p>
                  </div>
                )}

                <div className="cursor-pointer" onClick={toggleAnswerThree}>
                  <h4 className="text-xl font-bold mb-4 text-gray-700 flex justify-between items-center">
                    Which months should we be very careful?
                    {isAnswerVisibleThree ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </h4>
                </div>

                {isAnswerVisibleThree && (
                  <div className="bg-[#FFE6C5]">
                    <p className="mb-4 text-lg text-gray-700">
                      We need to be extra careful in December, January, and
                      February because those are the hottest months of summer.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full px-6 flex">
            <BushfireAreaMap />
          </div>

          <div className="w-full px-6 flex">
            <Gauge />
          </div>
        </div>
      </div>

      {/* Survival skills section*/}
      <div className="relative py-8 flex flex-col items-center justify-center w-full">
        <div className="absolute inset-0 bg-[url('/home-new.webp')] bg-[#FFFBF2] opacity-10 bg-cover bg-center brightness-75"></div>
        <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
          Survival Skills
        </h1>
        <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto" />

        <h2 className="text-2xl font-black text-center text-gray-700 mb-4">
          What Places Should You Watch Out For?
        </h2>

        {/* Close to grass Container */}
        <div className="flex flex-col md:flex-row items-center justify-around p-8">
          {/* Image Container */}
          <div className="w-full md:w-1/2 p-4">
            <div className="transition-transform transform hover:scale-105 duration-500">
              <Image
                src="/closeToGrass.png"
                alt="Paddock"
                className="rounded-2xl w-full h-auto"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Text Card */}
          <div className="w-full md:w-auto bg-[#FFE6C5] p-6 rounded-lg shadow-lg mt-8 md:mt-0 transition-transform transform hover:scale-105 duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              1) Close to or among grass or paddocks
            </h2>
            <ul className="list-disc list-inside text-xl text-gray-700">
              <li>Dry, brown grass can catch fire really fast.</li>
              <li>Tall grass makes bigger flames.</li>
              <li>Grass fires spread quicker than forest fires.</li>
            </ul>
          </div>
        </div>
        {/* 2)	dense or open bush  Container */}
        <div className="flex flex-col md:flex-row items-center justify-around p-8">
          {/* Text Card */}
          <div className="w-full md:w-auto bg-[#FFE6C5] p-6 rounded-lg shadow-lg mt-8 md:mt-0 transition-transform transform hover:scale-105 duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              2) Dense or open bush
            </h2>
            <ul className="list-disc list-inside text-xl text-gray-700">
              <li>Both thick and open bush can be risky.</li>
              <li>
                Small sticks burn fast, and big logs stay hot for a long time.
              </li>
              <li>Smoke from the fire can make it hard to see.</li>
            </ul>
          </div>
          {/* Image Container */}
          <div className="w-full md:w-1/2 p-4">
            <div className="transition-transform transform hover:scale-105 duration-500">
              <Image
                src="/denseBush.png"
                alt="Dense Bush"
                className="rounded-2xl w-auto h-auto"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        {/* 3)	Costal scrub  Container */}
        <div className="flex flex-col md:flex-row items-center justify-around p-8">
          {/* Image Container */}
          <div className="w-full md:w-1/2 p-4">
            <div className="transition-transform transform hover:scale-105 duration-500">
              <Image
                src="/costalScrub.png"
                alt="Costal"
                className="rounded-lg w-auto h-auto"
                width={500}
                height={300}
              />
            </div>
          </div>
          {/* Text Card */}
          <div className="w-full md:w-auto bg-[#FFE6C5] p-6 rounded-lg shadow-lg mt-8 md:mt-0 transition-transform transform hover:scale-105 duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              3) Near coastal scrub
            </h2>
            <ul className="list-disc list-inside text-xl text-gray-700">
              <li>The coast fires will be very hot and spread quickly.</li>
              <li>Ocean winds can make the fire move in surprising ways.</li>
              <li>Lots of small, burning pieces will be flying around.</li>
            </ul>
          </div>
        </div>
        {/* 4) Where suburbs meet the bush or grasslands   Container */}
        <div className="flex flex-col md:flex-row items-center justify-around p-8">
          {/* Text Card */}
          <div className="w-full md:w-auto bg-[#FFE6C5] p-6 rounded-lg shadow-lg mt-8 md:mt-0 transition-transform transform hover:scale-105 duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              4) Where suburbs meet the bush or grasslands
            </h2>
            <ul className="list-disc list-inside text-xl text-gray-700">
              <li>
                Fires in parks or reserves can quickly spread to nearby fences
                and gardens.
              </li>
              <li>Fires can jump from one house to another.</li>
              <li>
                If you live near bushes, burning pieces might land on your
                house.
              </li>
              <li>Strong winds can blow burning pieces from far away.</li>
            </ul>
          </div>
          {/* Image Container */}
          <div className="w-full md:w-1/2 p-4">
            <div className="transition-transform transform hover:scale-105 duration-500">
              <Image
                src="/grassland.png"
                alt="Grassland"
                className="rounded-lg w-auto h-auto"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
