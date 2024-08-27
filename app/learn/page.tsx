"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import HistoryTimeline from "../components/HistoryTimeline";

const page = () => {
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <main className="h-[70vh] w-full bg-[url('/home-landing.webp')] bg-center bg-cover bg-no-repeat">
        <Navigation />
        <Hero />
      </main>
      <div className="py-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black mb-4">
          History of bushfire in past 20 years
        </h1>
        <hr className="w-full max-w-lg border-gray-400" />
        <div className="p-12">
          <HistoryTimeline />
        </div>
      </div>
    </div>
  );
};

export default page;
