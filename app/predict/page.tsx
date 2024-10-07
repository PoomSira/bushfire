"use client";

import React from "react";
import {
  SmoothScrollWrapper,
  MotionH1,
  MotionDiv,
} from "../components/SmoothScrollWrapper";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import BushfirePrediction from "../components/BushfirePrediction";

const page = () => {
  return (
    <SmoothScrollWrapper>
      <div className="bg-[#FFFBF2] mx-auto max-w-screen">
        <Navigation />
        {/* Hero Section */}
        <div className="relative isolate h-[90vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kid-computer.webp')] bg-cover bg-center">
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

          {/* Content Overlay */}
          <div className="relative mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <MotionH1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              >
                Become a Weather Detective with Machine Learning!
              </MotionH1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-xl leading-8 text-white"
              >
                Join our exciting challenge and use real weather data to predict
                bushfire risks!
              </motion.p>
            </div>
          </div>
        </div>

        {/* Machine Learning Section */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center w-full px-6 lg:px-12">
          {/* Background */}
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/timeline-1.png')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

          {/* Bushfire Prediction Section (responsive: full width on mobile, 3/5 on larger screens) */}
          <div className="relative my-6 w-full lg:w-3/5 bg-[#ffe6c5]">
            <BushfirePrediction />
          </div>

          {/* Informational Section (responsive: full width on mobile, 2/5 on larger screens) */}
          <div className="w-full lg:w-2/5 flex flex-col items-center m-2">
            <div className="w-full p-6 bg-[#ffe6c5] rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <p className="text-center text-xl font-semibold italic text-gray-800">
                Do you Know? <br />
                <span className="text-lg font-normal">
                  With machine learning, you can explore how temperature, wind,
                  and rain all affect bushfire chances. Test your skills, play
                  with the sliders, and learn how weather changes impact
                  bushfire safety. Become a bushfire safety hero and protect
                  your community!
                </span>
              </p>
            </div>

            {/* Koala Image */}
            <div className="mt-4">
              <Image
                src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/koala-t.png"
                alt="Koala doctor with presentation"
                width={260}
                height={260}
                className="object-cover animate-moveSideways"
              />
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
