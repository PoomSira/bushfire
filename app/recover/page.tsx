"use client";

import React from "react";
import { SmoothScrollWrapper } from "../components/SmoothScrollWrapper";
import Navigation from "../components/Navigation";
import Image from "next/image";
import PathToRecovery from "../components/PathToRecovery";
import VoiceOfRecovery from "../components/VoiceOfRecovery";
import BushfireStoryCockatoo from "../components/BushfireStoryCockatoo";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import Link from "next/link";

const RecoveryPlan = dynamic(() => import("../components/RecoveryPlan"), {
  ssr: false,
});

const page = () => {
  return (
    <SmoothScrollWrapper>
      <div className="bg-[#FFFBF2] mx-auto max-w-screen">
        <Navigation />
        {/* Hero Section */}
        <div className="relative isolate h-[90vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/recovery.jpeg')] bg-cover bg-center">
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

          {/* Content Overlay */}
          <div className="relative mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Recover with Bushfire Brigade
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

        {/* Busfire story */}
        <div className="relative py-8 flex flex-col items-center justify-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/class-room.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
              Cockatoo Ash Wednesday 1983: The People&apos;s Story
            </h1>
            <hr className="w-full max-w-2xl border-gray-700 mb-6 mx-auto" />

            <div className="flex flex-col items-center p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8 md:flex-row">
              <div className="flex-shrink-0">
                <Image
                  src="/wombat.png"
                  alt="Wombat"
                  width={150}
                  height={150}
                  className="rounded-full animate-moveSideways"
                />
              </div>
              <div className="flex-grow bg-[#FFFBF2] p-4 rounded-xl mx-4 md:p-6 lg:p-10">
                <div className="py-4 bg-[#ffe6c5] rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <p className="text-xl text-orange-600 text-center md:text-2xl">
                    Introduction
                  </p>
                  <p className="text-xl text-gray-800 text-center mb-2 p-2 lg:p-5">
                    After a bushfire, it&apos;s normal to feel a lot of
                    different emotions. In Cockatoo in the Dandenong Ranges
                    after the Ash Wednesday fires in 1983, Daisy and Bobby
                    experienced this. They had to find ways to cope with their
                    feelings and begin the process of recovery. Let&apos;s
                    follow them on their journey to recovery!
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-black text-center text-gray-700 mb-4 mt-8">
              Healing After the Fire - Daisy and Bobby&apos;s Journey
            </h2>
            <hr className="w-full max-w-lg border-gray-700 mb-6 mx-auto" />
            {/*Rainbow after the storm*/}
            <BushfireStoryCockatoo />
          </div>
        </div>
        {/*Path to recovery*/}
        <div className="relative py-8 flex flex-col items-center justify-center w-full">
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image2.jpg')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
          <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
            The Path to Recovery
          </h1>
          <hr className="w-full max-w-xs border-gray-700 mb-4 mx-auto" />
          <div className="relative w-full flex items-center justify-center">
            <PathToRecovery />
          </div>
        </div>
        {/*Voice of recovery*/}
        <div className="relative py-8 flex flex-col items-center justify-center w-full">
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/timeline-1.png')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
          <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
            Voice of Recovery
          </h1>
          <hr className="w-full max-w-xs border-gray-700 mb-4 mx-auto" />
          <div className="relative w-full flex items-center justify-center">
            <VoiceOfRecovery />
          </div>
        </div>
        {/*RecoveryPlan*/}
        <div className="relative py-8 flex flex-col items-center justify-center w-full">
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/3.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
          <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
            My Recovery Plan
          </h1>
          <hr className="w-full max-w-xs border-gray-700 mb-4 mx-auto" />
          <div className="relative w-full flex flex-col items-center justify-center">
            <RecoveryPlan />
          </div>
        </div>

        {/* User journey */}
        <div className="relative flex flex-col md:flex-row items-center justify-center p-4">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/quiz-section.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

          {/* Left Box with Text and Button */}
          <div className="bg-[#ffe6c5] w-full md:w-1/2 rounded-lg p-4 shadow-lg mb-4 md:mb-0 relative z-10">
            <p className="text-center font-bold text-gray-700 text-xl mb-4">
              Want to test your knowledge and strengthen your skills?
            </p>
            <p className="text-center text-gray-700 text-xl mb-4">
              Jump to the Quiz section and challenge yourself with fun quizzes
              that prepare you for bushfire readiness!
            </p>
            <div className="flex justify-center">
              <Link href="/quiz" className="inline-block">
                <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
                  Quiz
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
                  href="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/wombat.png"
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
