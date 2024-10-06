"use client";

import React from "react";
import { SmoothScrollWrapper } from "../components/SmoothScrollWrapper";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Footer from "../components/Footer";
import QuizGame from "../components/QuizGame";
import Link from "next/link";

const page = () => {
  return (
    <SmoothScrollWrapper>
      <div className="bg-[#FFFBF2] mx-auto max-w-screen">
        <Navigation />
        {/* Hero Section */}
        <div className="relative isolate h-[90vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/quiz-section.webp')] bg-cover bg-center">
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

          {/* Content Overlay */}
          <div className="relative mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Test Your Bushfire Safety Knowledge!
                <br />
                Are You Ready for the Challenge?
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Join our fun quiz and see how much you know about staying safe
                during a bushfire.
                <br />
                Learn, play, and become a bushfire hero!
              </p>
            </div>
          </div>
        </div>

        {/* Testing knowledge */}
        <div className="relative py-8 flex flex-col items-center justify-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/class-room.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
              Test your knowledge
            </h1>
            <hr className="w-full max-w-2xl border-gray-700 mb-6 mx-auto" />

            <div className="w-full">
              {/* Quiz Game */}
              <QuizGame />
            </div>
          </div>
        </div>
        {/* User journey */}
        <div className="relative flex flex-col md:flex-row items-center justify-center p-4">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/instruction.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

          {/* Left Box with Text and Button */}
          <div className="bg-[#ffe6c5] w-full md:w-1/2 rounded-lg p-4 shadow-lg mb-4 md:mb-0 relative z-10">
            <p className="text-center font-bold text-gray-700 text-xl mb-4">
              Need guidance or support?
            </p>
            <p className="text-center text-gray-700 text-xl mb-4">
              Explore the Help section to find resources and manuals that make
              navigating bushfire preparedness easy for everyone!
            </p>
            <div className="flex justify-center">
              <Link href="/help" className="inline-block">
                <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
                  Help
                </button>
              </Link>
            </div>
          </div>

          {/* Right Box with SVG Image */}
          <div className="flex justify-center md:ml-8 relative z-10">
            <div className="bg-[#ffe6c5] rounded-full p-6 shadow-lg flex items-center justify-center">
              <svg height="260" width="260">
                <circle cx="80" cy="80" r="80" fill="none" />
                <image
                  href="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/koala-p.png"
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

export default page;
