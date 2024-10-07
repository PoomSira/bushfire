"use client";

import React from "react";
import { SmoothScrollWrapper } from "../components/SmoothScrollWrapper";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import Predict from "../components/predict";

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
        {/* Emergency contacts */}
        <div className="relative py-8 flex flex-col items-center justify-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/timeline-4.png')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
              Emergency Contacts
            </h1>
            <hr className="w-full max-w-xl border-gray-700 mb-6 mx-auto" />

            {/* Text card */}
            <div className="flex flex-col items-center p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8 md:flex-row">
              <div className=" flex-grow py-4 bg-[#ffe6c5] rounded-xl shadow-lg">
                <p className="text-2xl text-gray-800 text-center mb-2 p-2 lg:p-5">
                  In case of an emergency, it&apos;s important to know who to
                  call and where to get the right information. Here&apos;s a
                  quick guide to help you understand the key emergency contacts
                  and resources available in Victoria.
                </p>
              </div>
              {/* Image card */}
              <div className="flex-shrink-0">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/wombat.png"
                  alt="Wombat"
                  width={150}
                  height={150}
                  className="rounded-full animate-moveSideways"
                />
              </div>
            </div>

            {/* Triple Zero */}
            <div className="flex flex-col sm:flex-row items-center">
              {/* Image Section */}
              <div className="flex-shrink-0 p-4">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/triple000.png"
                  alt="Triple Zero Emergency"
                  width={150}
                  height={150}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
              {/* Text Section */}
              <div className="bg-[#ffe6c5] p-4 mx-4 rounded-xl shadow-lg text-gray-800">
                <h2 className="font-bold text-center text-2xl mb-2">
                  Triple Zero (000)
                </h2>
                <hr className="w-full max-w-xs border-gray-700 mb-6 mx-auto" />
                <p className="text-xl text-center">
                  You should call Triple Zero if you need urgent help from
                  Police, Fire, or Ambulance services. This is for emergencies
                  only, like if there&apos;s a fire, someone is hurt, or if you
                  see anything dangerous happening.
                </p>
                <p className="font-semibold text-center text-xl mt-2">
                  Remember: 000 is the most important number for any emergency.
                  Make sure to memorise it!
                </p>
                <p className="font-semibold text-blue-700 text-center text-xl mt-2">
                  <a
                    href="https://www.triplezero.gov.au/"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://www.triplezero.gov.au/
                  </a>
                </p>
              </div>
            </div>
            {/* Vic Emergency */}
            <div className="flex flex-col sm:flex-row items-center mt-8">
              {/* Text Section */}
              <div className="bg-[#ffe6c5] p-4 mx-4 rounded-xl shadow-lg text-gray-800">
                <h2 className="font-bold text-center text-2xl mb-2">
                  VicEmergency App
                </h2>
                <hr className="w-full max-w-xs border-gray-700 mb-6 mx-auto" />
                <p className="text-xl text-center">
                  The VicEmergency app is a helpful tool to get important alerts
                  and warnings about emergencies like bushfires in your area.
                </p>
                <h2 className="font-bold text-center text-2xl my-2">
                  How to Use It
                </h2>
                <p className="text-xl text-center">
                  Ask a parent or guardian to help you download the VicEmergency
                  app from the App Store or Google Play. Together, you can set
                  up alerts for your location to stay informed about any nearby
                  dangers.
                </p>
                <p className="font-semibold text-blue-700 text-center text-xl mt-2">
                  <a
                    href="https://emergency.vic.gov.au/"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://emergency.vic.gov.au/
                  </a>
                </p>
              </div>
              {/* Image Section */}
              <div className="flex-shrink-0 p-4">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/emergency.jpg"
                  alt="Vic Emergency"
                  width={220}
                  height={120}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
            {/* CFA and Text Card Section */}
            <div className="flex flex-col md:flex-row items-start mt-8 px-4 w-full space-y-4 md:space-y-0 md:space-x-4 justify-center">
              {/* Left Section: Responsive CFA Image (60% width) */}
              <div className="flex-shrink-0 w-full md:w-3/5 max-w-3xl">
                <Image
                  src="https://res.cloudinary.com/dxtvfgaud/image/upload/f_auto,q_100/v1728225961/cfa_zsv2ep.jpg"
                  width={3355}
                  height={2386}
                  alt="CFA Information"
                  className="w-full h-auto object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Right Section: Text Card (Centered, 40% width) */}
              <div className="flex flex-col w-full md:w-2/5 bg-[#ffe6c5] p-4 rounded-xl shadow-lg text-gray-800 md:self-center">
                <h2 className="font-bold text-center text-2xl mb-2">
                  Why is this important?
                </h2>
                <hr className="w-full max-w-xs border-gray-700 mb-6 mx-auto" />
                <p className="text-xl text-center">
                  Having these emergency contacts and resources handy can help
                  you stay prepared and respond quickly if a bushfire happens.
                  Make sure you know how to use them and discuss them with your
                  family and school so everyone is ready!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* What should you do contacts */}
        <div className="relative py-8 flex flex-col items-center justify-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/timeline-1.png')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
              Guides
            </h1>
            <hr className="w-full max-w-xs border-gray-700 mb-6 mx-auto" />

            <div className="flex flex-col items-center p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8 md:flex-row">
              {/* Image card */}
              <div className="flex-shrink-0">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kangaroo.png"
                  alt="Wombat"
                  width={150}
                  height={150}
                  className="rounded-full animate-moveSideways"
                />
              </div>
              {/* Text card */}
              <div className="flex-grow py-4 bg-[#ffe6c5] rounded-xl text-gray-800 shadow-lg p-6">
                <h2 className="font-bold text-center text-2xl mb-4">
                  What should you do during a Bushfire?
                </h2>
                <hr className="w-full max-w-md border-gray-700 mb-6 mx-auto" />
                <p className="text-xl mb-4">
                  On hot, dry, and windy days, bushfires can start and spread
                  very quickly. Here are the important things you need to know
                  to stay safe during a bushfire:
                </p>
                <ol className="list-decimal pl-6 text-xl space-y-4">
                  <li>
                    <h2 className="font-bold text-xl mb-2 underline">
                      Leave Early if Possible
                    </h2>
                    <p>
                      If the <b>Fire Danger Rating</b> is marked as{" "}
                      <b>Extreme</b> or <b>Catastrophic</b>, it is very
                      dangerous to stay. The safest choice is to leave early to
                      protect yourself and your family.
                    </p>
                    <p>
                      <em className="font-semibold">
                        <b>Why should you leave early?</b>
                      </em>{" "}
                      Waiting to see what happens can be very risky. Fires can
                      move quickly, and roads may become blocked or unsafe.
                      Decide early when and where you will go.
                    </p>
                  </li>
                  <li>
                    <h2 className="font-bold text-xl mb-2 underline">
                      Follow Emergency Services&apos; Instructions
                    </h2>
                    <p>
                      <em className="font-semibold">Listen and Act:</em> Always
                      listen carefully to the instructions given by emergency
                      services. If they recommend leaving or evacuating, do so
                      immediately. Emergency services provide the most
                      up-to-date information on where the fire is and what you
                      should do.
                    </p>
                    <p>
                      <em className="font-semibold">Fun fact:</em> You might
                      hear the words &apos;evacuation&apos; or
                      &apos;evacuating&apos; a lot when a bushfire happens. This
                      means moving from a dangerous place to a safer one.
                    </p>
                  </li>
                  <li>
                    <h2 className="font-bold text-xl mb-2 underline">
                      Get Information from Multiple Sources
                    </h2>
                    <p>
                      <em className="font-semibold">Stay Informed:</em>{" "}
                      Don&apos;t rely on just one source for information. Check
                      multiple trusted sources like the <b>VicEmergency app</b>{" "}
                      and local radio stations to get the most accurate and
                      current updates about the bushfire situation.
                    </p>
                    <p>
                      <em className="font-semibold">Remember:</em> Safety comes
                      first! Talk to your parents, teachers, or guardians about
                      what to do during a bushfire, and make sure you have a
                      plan in place.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Predict />
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
};

export default page;
