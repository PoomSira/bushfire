/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { SmoothScrollWrapper } from "../components/SmoothScrollWrapper";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HistoryTimeline from "../components/HistoryTimeline";
import TableauViz from "../components/TableauViz";
import TableauPictograph from "../components/TableauPictograph";
import TableauCluster from "../components/TableauCluster";
import CauseBushfire from "../components/CauseBushfire";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const [visibleAnswer, setVisibleAnswer] = useState<number | null>(null); // Track which answer is visible

  const toggleAnswer = (index: number) => {
    // Toggle the visibility of the selected answer
    setVisibleAnswer((prev) => (prev === index ? null : index));
  };

  return (
    <SmoothScrollWrapper>
      <div className="bg-[#FFFBF2] mx-auto max-w-screen">
        <Navigation />
        {/* Hero Section */}
        <div className="relative isolate h-[90vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/learning-landing.jpeg')] bg-cover bg-center">
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

          {/* Content Overlay */}
          <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Learn with Bushfire Brigade
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

        <div className="relative py-8 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kids-talking.jpeg')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
          <div className="relative">
            <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
              History of bushfire
            </h1>
            <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto" />
            <div className="p-6">
              <HistoryTimeline />
            </div>
          </div>
        </div>

        <div className="relative py-8 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/class-room.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
          <div className="relative">
            <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
              Cause of Bushfire
            </h1>
            <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto " />
            <div className="p-6">
              <CauseBushfire />
            </div>
          </div>
        </div>

        {/* Tableau Visualizations */}
        <div className="relative py-12 px-4">
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/bushfire-effect.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
          <div className="relative max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-center text-gray-700 mb-4">
              Effect of Bushfire
            </h2>
            <hr className="w-full max-w-lg border-gray-700 mb-8 mx-auto" />

            {/* TableauViz */}
            <div className="mt-16 relative">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-700">
                Bushfire History Timeline
              </h3>
              <hr className="w-full max-w-xs border-gray-700 mb-8 mx-auto" />
              <div className="lg:flex lg:items-start lg:justify-between">
                <div className="lg:w-2/3 mb-4 lg:mb-0">
                  <TableauViz />
                </div>
                <div className="lg:w-1/3 lg:pl-8 relative">
                  <div className="bg-[#FFE6C5] rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() => toggleAnswer(1)}
                    >
                      <h4 className="text-xl font-bold mb-4 text-gray-700 flex justify-between items-center">
                        Let's Get Started!
                        {visibleAnswer === 1 ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </h4>
                      <p className="text-lg text-gray-700">
                        Step 1: Go to the Bushfire Year Box and click ▶
                      </p>
                    </div>

                    {visibleAnswer === 1 && (
                      <div className="p-6 pt-0 bg-[#FFE6C5]">
                        <p className="mb-4 text-lg text-gray-700">
                          Watch the years pass by and see how the fires have
                          changed.
                        </p>
                        <p className="font-semibold text-lg text-gray-700">
                          Bushfires have been getting worse over the years
                          because the climate is getting hotter and drier. This
                          makes it easier for fires to start and spread.
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Koala image below the card */}
                  <div className="mt-8 flex justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/koala-t.png"
                      alt="Koala doctor with presentation"
                      width={150} // Adjust size as needed
                      height={150} // Adjust size as needed
                      className="object-cover animate-moveSideways"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TableauPictograph */}
            <div className="mt-8 relative">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-700">
                Schools Affected by Bushfires
              </h3>
              <hr className="w-full max-w-xs border-gray-700 mb-8 mx-auto" />
              <div className="lg:flex lg:items-start lg:justify-between">
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                  <TableauPictograph />
                </div>
                <div className="lg:w-1/3 lg:pl-8 relative">
                  <div className="bg-[#FFE6C5] p-6 rounded-xl shadow-lg relative transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <div
                      className="cursor-pointer"
                      onClick={() => toggleAnswer(2)}
                    >
                      <h4 className="text-xl font-bold mb-4 text-gray-700">
                        Can you guess how many schools have been affected by
                        bushfires?
                        {visibleAnswer === 2 ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </h4>
                    </div>
                    {visibleAnswer === 2 && (
                      <p className="mb-4 text-lg text-gray-700">
                        667 schools are identified to be in bushfire risk areas.
                      </p>
                    )}

                    <div
                      className="cursor-pointer"
                      onClick={() => toggleAnswer(3)}
                    >
                      <p className="mb-4 text-lg font-bold text-gray-700">
                        What do the risks mean?
                        {visibleAnswer === 3 ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </p>
                    </div>
                    {visibleAnswer === 3 && (
                      <ul className="list-disc list-inside text-lg text-gray-700">
                        <li>
                          <b>Extreme RISK:</b> Big, dangerous fires. Be very
                          careful and stay safe!
                        </li>
                        <li>
                          <b>High Risk:</b> Strong fires possible. Stay alert
                          and follow safety rules.
                        </li>
                        <li>
                          <b>Medium Risk:</b> Small fires likely. Still, be
                          careful and follow fire safety.
                        </li>
                        <li>
                          <b>Low Risk:</b> Very safe from fires. Know safety
                          rules just in case.
                        </li>
                      </ul>
                    )}
                  </div>
                  {/* Kangaroo image below the card */}
                  <div className="mt-8 flex justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kangaroo.png"
                      alt="Kangaroo with presentation"
                      width={150} // Adjust size as needed
                      height={150} // Adjust size as needed
                      className="object-cover animate-moveSideways"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TableauCluster */}
            <div className="mt-8 relative">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-700">
                Bushfire Risk Areas
              </h3>
              <hr className="w-full max-w-xs border-gray-700 mb-8 mx-auto" />
              <div className="lg:flex lg:items-start lg:justify-between">
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                  <TableauCluster />
                </div>
                <div className="lg:w-1/3 lg:pl-8 relative">
                  <div className="bg-[#FFE6C5] p-6 rounded-xl shadow-lg relative transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <div
                      className="cursor-pointer"
                      onClick={() => toggleAnswer(4)}
                    >
                      <h4 className="text-xl font-bold mb-2 text-gray-700 flex justify-between items-center">
                        Which areas are mostly at risk of bushfires?
                        {visibleAnswer === 4 ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </h4>
                    </div>

                    {visibleAnswer === 4 && (
                      <div className="px-6 pb-6 pt-0 bg-[#FFE6C5]">
                        <p className="mb-4 text-lg text-gray-700">
                          Step 1: Click on High Risk Bubble
                        </p>
                        <p className="mb-4 text-lg text-gray-700">
                          Step 2: Hover over the largest bubble inside it
                        </p>
                        <p className="mb-4 text-lg text-gray-700">
                          Yarra Ranges have 13 schools at high risk
                        </p>
                        <p className="mb-4 text-lg text-gray-700">
                          Step 3: Click on Medium Risk Bubble
                        </p>
                        <p className="mb-4 text-lg text-gray-700">
                          Step 4: Hover over the largest bubble inside it
                        </p>
                        <p className="mb-4 text-lg text-gray-700">
                          Casey has 16 schools at medium risk
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Emu image below the card */}
                  <div className="mt-8 flex justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/wombat.png"
                      alt="Wombat"
                      width={150} // Adjust size as needed
                      height={150} // Adjust size as needed
                      className="object-cover animate-moveSideways"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* User journey */}
        <div className="relative flex flex-col md:flex-row items-center justify-center p-4">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/prepare.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

          {/* Left Box with Text and Button */}
          <div className="bg-[#ffe6c5] w-full md:w-1/2 rounded-lg p-4 shadow-lg mb-4 md:mb-0 relative z-10">
            <p className="text-center font-bold text-gray-700 text-xl mb-4">
              Ready to turn knowledge into action?
            </p>
            <p className="text-center text-gray-700 text-xl mb-4">
              Jump to the Prepare section and discover how to stay safe and
              ready for bushfire emergencies!
            </p>
            <div className="flex justify-center">
              <Link href="/prepare" className="inline-block">
                <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
                  Prepare
                </button>
              </Link>
            </div>
          </div>

          {/* Right Box with SVG Image */}
          <div className="flex justify-center md:ml-8 relative">
            <div className="bg-[#ffe6c5] rounded-full p-6 shadow-lg flex items-center justify-center">
              <svg height="260" width="260">
                <circle cx="80" cy="80" r="80" fill="none" />
                <image
                  href="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/koala-t.png"
                  height="220"
                  width="220"
                  className="animate-moveSideways"
                />
              </svg>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
};

export default Page;
