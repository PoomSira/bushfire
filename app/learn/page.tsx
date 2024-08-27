"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HistoryTimeline from "../components/HistoryTimeline";
import Image from "next/image";
import CauseBushfire from "../components/CauseBushfire";

const page = () => {
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <Navigation />
      {/* Hero Section */}
      <div className="relative isolate h-[75vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('/home-landing.webp')] bg-cover bg-center">
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm"></div>

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
      <div className="py-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black mb-4">
          History of bushfire in past 20 years
        </h1>
        <hr className="w-full max-w-lg border-gray-400" />
      </div>
      <div className="p-12">
        <HistoryTimeline />
      </div>
      <div className="py-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black mb-4">
          Cause of Bushfire
        </h1>
        <hr className="w-full max-w-lg border-gray-400" />
      </div>
      <div>
        <CauseBushfire />
      </div>
      <Footer />
    </div>
  );
};

export default page;
