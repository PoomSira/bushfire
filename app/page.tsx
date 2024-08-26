// import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";

// export default function Home() {
//   return (
//     <div className="bg-[#FFFBF2] mx-auto max-w-screen">
//       <Navigation />

//       {/* Main Content */}
//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         ></div>
//       </div>

//       <div className="relative isolate px-6 pt-14 lg:px-8 flex-grow">
//         {/* Content Overlay */}
//         <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl textsha">
//               Welcome to
//               <br />
//               Bushfire Brigade
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-black">
//               Empowering cyclists with safe routes and incident updates for a
//               worry-free ride.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="#NavMenu"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 hover:scale-105"
//               >
//                 Get started
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="py-8 flex flex-col items-center justify-center">
//           <h1 className="text-2xl font-bold text-black mb-4">
//             Start your journey
//           </h1>
//           <hr className="w-full max-w-lg border-gray-400" />
//         </div>
//         <div className="grid grid-cols-1 gap-4 p-4">
//           <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
//         </div>
//         <div className="grid grid-cols-1 gap-4 p-4">
//           <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
//         </div>

//         <div className="grid grid-cols-3 gap-4 p-4">
//           <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
//           <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
//           <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

import Card from "./components/Card";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <Navigation />
      <main className="h-[100vh] w-full bg-[url('/home-landing.webp')] bg-center bg-cover bg-no-repeat">
        <Hero />
      </main>
      <div className="py-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black mb-4">
          Start your journey
        </h1>
        <hr className="w-full max-w-lg border-gray-400" />
      </div>
      {/* Full-width card Section */}
      <div
        id="Learn"
        className="relative flex bg-clip-border rounded-xl bg-[#FFE6C5] text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="relative w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0">
          <Image
            src="/learn.png"
            alt="Learning About Bushfires"
            width={800} // Adjust width as needed
            height={500} // Adjust height as needed
            className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Learning About Bushfires
          </h6>
          <p className="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Students will explore the scientific causes and effects of bushfires
            in the Victorian region, gaining a deeper understanding of these
            natural events.
          </p>
          <a href="/learn" className="inline-block">
            <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div
        id="Prepare"
        className="relative flex border-2 rounded-xl bg-[#FFE6C5] text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="p-6 flex flex-col justify-center">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Preparation for Bushfires
          </h6>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Students will learn how to assess bushfire risks and recognize when
            to be cautious. They will also gain knowledge on emergency
            precautions and safety tips to stay safe during a bushfire.
          </p>
          <a href="/prepare" className="inline-block">
            <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </a>
        </div>
        <div className="relative w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0">
          <Image
            src="/learn.png"
            alt="Preparation for Bushfire"
            width={800} // Adjust width as needed
            height={500} // Adjust height as needed
            className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      <div
        id="Recover"
        className="relative flex border-2 rounded-xl bg-[#FFE6C5] text-gray-700 shadow-md w-full max-w-screen-xl mx-auto flex-row my-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="relative w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0">
          <Image
            src="/learn.png"
            alt="Recover"
            width={800} // Adjust width as needed
            height={500} // Adjust height as needed
            className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
            Recovery from Bushfires
          </h6>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Students will learn how individuals and communities recover from
            bushfire impacts, focusing on immediate response, community support,
            and long-term rebuilding efforts.
          </p>
          <a href="/recover" className="inline-block">
            <button className="px-6 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </a>
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
            <div className="aspect-square bg-[#FFE6C5] rounded-full overflow-hidden">
              <Image
                src="/koala.png"
                alt="Koala doctor with presentation"
                width={400} // Specify width
                height={400} // Specify height
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-center p-6 bg-[#FFE6C5] rounded-lg shadow-md">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Select a path to begin your storytelling journey and learn about
              bushfire safety.
            </p>
            <a href="/prepare" className="inline-block">
              <button className="px-4 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300">
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
          <div className="w-1/2 flex flex-col justify-center p-6 bg-[#FFE6C5] rounded-lg shadow-md">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Select a path to begin your storytelling journey and learn about
              bushfire safety.
            </p>
            <a href="/prepare" className="inline-block">
              <button className="px-4 py-2 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300">
                Begin
              </button>
            </a>
          </div>
          <div className="w-1/2 p-12">
            <div className="aspect-square bg-[#FFE6C5] rounded-full overflow-hidden">
              <Image
                src="/kangaroo.png"
                alt="Koala doctor with presentation"
                width={400} // Specify width
                height={400} // Specify height
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Journ
      {/* <div className="grid grid-cols-3 gap-4 p-4">
        <div className="relative min-w-full min-h-80 bg-[#FFE6C5] bg-opacity-60 rounded-lg"></div>
        <div className="relative min-w-full min-h-80 bg-[#FFE6C5] bg-opacity-60 rounded-lg"></div>
        <div className="relative min-w-full min-h-80 bg-[#FFE6C5] bg-opacity-60 rounded-lg"></div>
      </div> */}
         
      <Footer />
    </div>
  );
}
