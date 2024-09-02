"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HistoryTimeline from "../components/HistoryTimeline";
import Image from "next/image";

import CauseBushfire from "../components/CauseBushfire";
import EffectBushfire from "../components/EffectBushfire";
const page = () => {
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <Navigation />
      {/* Hero Section */}
      <div className="relative isolate h-[100vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('/learning-landing.jpeg')] bg-cover bg-center">
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

        {/* Content Overlay */}
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Bushfire Brigade
              <br />
              Safety Starts with You
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Inspiring a new generation to be fire-smart and prepared for
              bushfire challenges.
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-8 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/kids-talking.jpeg')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
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
        <div className="absolute inset-0 bg-[url('/class-room.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
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

      <div className="relative py-8 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/bushfire-effect.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center"></div>
        <div className="relative">
          <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
            Effect of bushfire
          </h1>
          <hr className="w-full max-w-lg border-gray-700 mb-4 mx-auto" />
          <div className="p-6">
            <EffectBushfire />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
