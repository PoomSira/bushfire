"use client";

import React from "react";
import { SmoothScrollWrapper } from "../components/SmoothScrollWrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const page = () => {
  return (
    <SmoothScrollWrapper>
      <div className="bg-[#FFFBF2] mx-auto max-w-screen">
        <Navigation />
        {/* Hero Section */}
        <div className="relative isolate h-[90vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/instruction.webp')] bg-cover bg-center">
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

          {/* Content Overlay */}
          <div className="relative mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Help you need with Bushfire Brigade
                <br />
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
};

export default page;
