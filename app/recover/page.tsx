"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Image from "next/image";
import RecoveryPlan from "../components/RecoveryPlan";
import PathToRecovery from "../components/PathToRecovery";
import BushfireStoryCockatoo from "../components/BushfireStoryCockatoo";
import Footer from "../components/Footer";

const page = () => {
  return (
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
        <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/timeline-1.png')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
            Cockatoo Ash Wednesday 1983: The People&apos;s Story
          </h1>
          <hr className="w-full max-w-2xl border-gray-700 mb-6 mx-auto" />

          <div className="bg-[#FFFBF2] p-6 rounded-xl mx-4 md:p-8 lg:p-10">
            <div className="py-4 bg-[#ffe6c5] rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <p className="text-2xl text-orange-600 text-center md:text-3xl">
                Introduction
              </p>
              <p className="text-base font-medium text-gray-800 text-center mb-2 p-4 md:text-2xl lg:p-5">
                After a bushfire, it&apos;s normal to feel a lot of different
                emotions. In Cockatoo in the Dandenong Ranges after the Ash
                Wednesday fires in 1983, Daisy and Bobby experienced this. They
                had to find ways to cope with their feelings and begin the
                process of recovery. Let&apos;s follow them on their journey to
                recovery!
              </p>
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
      {/*RecoveryPlan*/}
      <div className="relative py-8 flex flex-col items-center justify-center w-full">
        <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/3.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
        <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
          My Recovery Plan
        </h1>
        <hr className="w-full max-w-xs border-gray-700 mb-4 mx-auto" />
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* <RecoveryPlan /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
