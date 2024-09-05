/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HistoryTimeline from "../components/HistoryTimeline";
import TableauViz from "../components/TableauViz";
import TableauPictograph from "../components/TableauPictograph";
import TableauCluster from "../components/TableauCluster";

import CauseBushfire from "../components/CauseBushfire";
import EffectBushfire from "../components/EffectBushfire";
const page = () => {
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <Navigation />
      {/* Hero Section */}
      <div className="relative isolate h-[90vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('/learning-landing.jpeg')] bg-cover bg-center">
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

        {/* Content Overlay */}
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Learn with Bushfire Brigade
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

      {/* Tableau Visualizations */}
      <section className="relative py-12 px-4">
        <div className="absolute inset-0 bg-[url('/bushfire-effect.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center text-gray-700 mb-4">
            Bushfire Data Visualizations
          </h2>
          <hr className="w-full max-w-lg border-gray-700 mb-8 mx-auto" />

          {/* TableauViz */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Bushfire History Timeline
            </h3>
            <div className="lg:flex lg:items-start lg:justify-between">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <TableauViz />
              </div>
              <div className="lg:w-1/3 lg:pl-8">
                <h4 className="text-xl font-bold mb-4">Let's Get Started!</h4>
                <p className="mb-4">
                  Step 1: Go to the Bushfire Year Box and click ▶
                </p>
                <p className="mb-4">
                  Watch the years pass by and see how the fires have changed.
                </p>
                <p className="font-semibold">
                  Answer: Bushfires have been getting worse over the years
                  because the climate is getting hotter and drier. This makes it
                  easier for fires to start and spread.
                </p>
              </div>
            </div>
          </div>

          {/* TableauPictograph */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Schools Affected by Bushfires
            </h3>
            <div className="lg:flex lg:items-start lg:justify-between">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <TableauPictograph />
              </div>
              <div className="lg:w-1/3 lg:pl-8">
                <h4 className="text-xl font-bold mb-4">
                  Can you guess how many schools have been affected by
                  bushfires?
                </h4>
                <p className="mb-4">
                  667 schools are identified to be at bushfires risk areas
                </p>
                <p className="mb-4">What do the risks mean?</p>
                <ul className="list-disc list-inside">
                  <li>
                    Extreme RISK: Big, dangerous fires. Be very careful and stay
                    safe!
                  </li>
                  <li>
                    High Risk: Strong fires possible. Stay alert and follow
                    safety rules.
                  </li>
                  <li>
                    Medium Risk: Small fires likely. Still, be careful and
                    follow fire safety.
                  </li>
                  <li>
                    Low Risk: Very safe from fires. Know safety rules just in
                    case.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* TableauCluster */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center">
              Bushfire Risk Areas
            </h3>
            <div className="lg:flex lg:items-start lg:justify-between">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <TableauCluster />
              </div>
              <div className="lg:w-1/3 lg:pl-8">
                <h4 className="text-xl font-bold mb-4">
                  Which areas are mostly at risk of bushfires?
                </h4>
                <p className="mb-4">Step 1: Click on High Risk Bubble</p>
                <p className="mb-4">
                  Step 2: Hover over the largest bubble inside it
                </p>
                <p className="mb-4">
                  Yarra Ranges have 13 schools at high risk
                </p>
                <p className="mb-4">Step 3: Click on Medium Risk Bubble</p>
                <p className="mb-4">
                  Step 4: Hover over the largest 2 bubbles inside it
                </p>
                <p className="mb-4">
                  Yarra Ranges and Greater Bendigo have the most schools with
                  medium risk
                </p>
                <h4 className="text-xl font-bold mt-8 mb-4">
                  Is your school here?
                </h4>
                <p className="font-semibold">
                  If so, time to become a BUSHFIRE SAFETY EXPERT!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
