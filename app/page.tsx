"use client";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";
import Journey from "./components/Journey";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const togglePopup = (): void => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <Navigation />
      {/* <main className="h-[100vh] w-full bg-[url('/home-landing.webp')] bg-center bg-cover bg-no-repeat"></main> */}
      {/* Hero Section */}
      <div className="relative isolate h-[100vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('/kangaroo-home.png')] bg-cover bg-center">
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-filter backdrop-blur-[2px]"></div>

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
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/" className="inline-block">
                <button className="px-4 py-2 text-lg font-semibold  text-white bg-black  hover:bg-white hover:text-black transition-colors duration-300 rounded-md">
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Test Section */}
      <div className="relative py-8 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/home-new.webp')] bg-cover bg-center brightness-75"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-black text-center text-white mb-4">
            Get to know your tutors
          </h1>
          <hr className="w-full max-w-lg border-white mb-4 mx-auto" />
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="relative aspect-square bg-[#FFFBF2] rounded-full overflow-visible">
                <div className="absolute bg-[#FFE6C5] right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md hover:bg-orange-300">
                  <button onClick={togglePopup}>Click to know me</button>
                </div>
                <Image
                  src="/koala-t.png"
                  alt="Koala doctor with presentation"
                  width={200} // Specify width
                  height={200} // Specify height
                  className="object-cover animate-moveSideways"
                />
                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h2 className="text-xl font-bold mb-4">
                        Hello! I'm Chloe, the koala
                      </h2>
                      <p className="mb-4">
                        I love helping you learn about bushfires, step by step.
                        If you stick with me, you'll definitely get a HD+ in the
                        bushfire subject!
                      </p>
                      <button
                        className="bg-[#FFE6C5] text-black py-2 px-4 rounded hover:bg-orange-300"
                        onClick={togglePopup}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative aspect-square bg-[#FFFBF2] rounded-full overflow-visible">
                <div className="absolute bg-[#FFE6C5] right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md hover:bg-orange-300">
                  <button onClick={togglePopup}>Click to know me</button>
                </div>
                <Image
                  src="/kangaroo.png"
                  alt="Koala doctor with presentation"
                  width={270} // Specify width
                  height={270} // Specify height
                  className="object-cover animate-moveSideways"
                />
                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h2 className="text-xl font-bold mb-4">
                        Hello! I'm Chloe, the koala
                      </h2>
                      <p className="mb-4">
                        I love helping you learn about bushfires, step by step.
                        If you stick with me, you'll definitely get a HD+ in the
                        bushfire subject!
                      </p>
                      <button
                        className="bg-[#FFE6C5] text-black py-2 px-4 rounded hover:bg-orange-300"
                        onClick={togglePopup}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative aspect-square bg-[#FFFBF2] rounded-full overflow-visible">
                <div className="absolute bg-[#FFE6C5] right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md hover:bg-orange-300">
                  <button>Click to know me</button>
                </div>
                <Image
                  src="/wombat.png"
                  alt="Koala doctor with presentation"
                  width={220} // Specify width
                  height={220} // Specify height
                  className="object-cover animate-moveSideways"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Journey Section */}
      <div className="relative py-8 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/journey.webp')] bg-cover bg-center brightness-75"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-black text-center text-white mb-4">
            Start your journey
          </h1>
          <hr className="w-full max-w-lg border-white mb-4 mx-auto" />
          <div className="p-6">
            {/* Full-width card Section */}
            <Journey />
          </div>
        </div>
      </div>
         
      <Footer />
    </div>
  );
}
