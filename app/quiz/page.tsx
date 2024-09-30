"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Hero from "../components/Hero";
import BushfireAreaMap from "../components/BushfireAreaMap";
import TableauViz from "../components/TableauViz";
import DeadpoolBye from "../components/DeadpoolBye";
import Footer from "../components/Footer";
import QuizGame from "../components/QuizGame";

const page = () => {
  return (
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
      <Footer />
    </div>
  );
};

export default page;
