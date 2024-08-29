"use client";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";
import Journey from "./components/Journey";

export default function Home() {
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <Navigation />
      {/* <main className="h-[100vh] w-full bg-[url('/home-landing.webp')] bg-center bg-cover bg-no-repeat"></main> */}
      {/* Hero Section */}
      <div className="relative isolate h-[100vh] px-6 pt-14 lg:px-8 flex-grow bg-[url('/hero.png')] bg-cover bg-center">
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
      <div className="relative py-8 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/journey.webp')] bg-cover bg-center brightness-75"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-black text-center text-white mb-4">
            Start your journey
          </h1>
          <hr className="w-full max-w-lg border-white mb-4 mx-auto" />
          <div className="p-6">
            {/* Full-width card Section */}
            <div
              id="Learn"
              className="relative flex bg-clip-border rounded-xl bg-[#FFFBF2] text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0 p-1">
                <Image
                  src="/learning-landing.jpeg"
                  alt="Learning About Bushfires"
                  width={800} // Adjust width as needed
                  height={500} // Adjust height as needed
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h6 className="block mb-4 font-sans text-xl antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                  Learning About Bushfires
                </h6>
                <p className="block mb-4 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                  Students will explore the scientific causes and effects of
                  bushfires in the Victorian region, gaining a deeper
                  understanding of these natural events.
                </p>
                <a href="/learn" className="inline-block">
                  <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
            <div
              id="Prepare"
              className="relative flex border-2 rounded-xl bg-[#FFFBF2] text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="p-6 flex flex-col justify-center">
                <h6 className="block mb-4 font-sans text-xl antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                  Preparation for Bushfires
                </h6>
                <p className="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                  Students will learn how to assess bushfire risks and recognize
                  when to be cautious. They will also gain knowledge on
                  emergency precautions and safety tips to stay safe during a
                  bushfire.
                </p>
                <a href="/prepare" className="inline-block">
                  <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
                    Learn More
                  </button>
                </a>
              </div>
              <div className="relative w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0">
                <Image
                  src="/prepare.webp"
                  alt="Preparation for Bushfire"
                  width={800} // Adjust width as needed
                  height={500} // Adjust height as needed
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div
              id="Recover"
              className="relative flex border-2 rounded-xl bg-[#FFFBF2] text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0">
                <Image
                  src="/recovery.jpeg"
                  alt="Recover"
                  width={800} // Adjust width as needed
                  height={500} // Adjust height as needed
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h6 className="block mb-4 font-sans text-xl antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                  Recovery from Bushfires
                </h6>
                <p className="block mb-8 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                  Students will learn how individuals and communities recover
                  from bushfire impacts, focusing on immediate response,
                  community support, and long-term rebuilding efforts.
                </p>
                <a href="/recover" className="inline-block">
                  <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black mb-4">
          Start your adventure
        </h1>
        <hr className="w-full max-w-lg border-gray-400" />
      </div>
      {/* Journey Section */}
      <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto mb-8">
        <div className="flex w-full">
          <div className="w-1/2 p-12">
            <div className="aspect-square bg-[#FFE6C5] rounded-full overflow-visible">
              <Image
                src="/koala.png"
                alt="Koala doctor with presentation"
                width={400} // Specify width
                height={400} // Specify height
                className="object-cover animate-moveSideways"
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col h-1/2 items-center justify-center p-12 my-auto bg-[#FFE6C5] rounded-lg shadow-md ">
            <p className="text-2xl font-medium text-gray-800 text-center mb-4">
              Select a path to begin your storytelling journey and learn about
              bushfire safety.
            </p>
            <a href="/prepare" className="inline-block">
              <button className="px-4 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
                Begin
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black mb-4">
          Check Your Knowledge
        </h1>
        <hr className="w-full max-w-lg border-gray-400" />
      </div>
      {/* Knowledge Section */}
      <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto mb-8">
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col h-1/2 items-center justify-center p-12 my-auto bg-[#FFE6C5] rounded-lg shadow-md">
            <p className="text-2xl font-medium text-gray-800 text-center mb-4">
              Select a path to begin your storytelling journey and learn about
              bushfire safety.
            </p>
            <a href="/prepare" className="inline-block">
              <button className="px-4 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
                Begin
              </button>
            </a>
          </div>
          <div className="w-1/2 p-12">
            <div className="aspect-square bg-[#FFE6C5] rounded-full overflow-visible">
              <Image
                src="/kangaroo.png"
                alt="Koala doctor with presentation"
                width={400} // Specify width
                height={400} // Specify height
                className="object-cover animate-moveSideways"
              />
            </div>
          </div>
        </div>
      </div>
         
      <Footer />
    </div>
  );
}
