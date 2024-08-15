"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import CharacterWalk from "./CharacterWalk";

export default function Hero() {
  return (
    <section>
      <div className="items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="nes-container is-rounded max-w-5xl bg-[#FFF8C7] p-3 text-2xl font-bold tracking-tighter text-black md:text-4xl lg:text-5xl lg:max-w-7xl">
                <Typewriter
                  options={{
                    strings: [
                      'Begin Your Journey <br className="hidden lg:block" /> Defend Against Bushfires',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                  }}
                />
              </h1>
              {/* <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
                built with Tailwind CSS, HTML &amp; Next.js.
              </p> */}
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <CharacterWalk />
              </div>

              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button
                    type="button"
                    className="nes-btn is-primary px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Start game
                  </button>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button
                    type="button"
                    className="nes-btn items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    See features
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
