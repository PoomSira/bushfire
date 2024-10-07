"use client";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import BackToTopButton from "./components/BackToTopButton";
import Journey from "./components/Journey";
import {
  SmoothScrollWrapper,
  MotionH1,
  MotionDiv,
} from "./components/SmoothScrollWrapper";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showKoalaPopup, setShowKoalaPopup] = useState<boolean>(false);
  const [showKangarooPopup, setShowKangarooPopup] = useState<boolean>(false);
  const [showWombatPopup, setShowWombatPopup] = useState<boolean>(false);

  const toggleKoalaPopup = (): void => setShowKoalaPopup(!showKoalaPopup);
  const toggleKangarooPopup = (): void =>
    setShowKangarooPopup(!showKangarooPopup);
  const toggleWombatPopup = (): void => setShowWombatPopup(!showWombatPopup);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SmoothScrollWrapper>
      <div className="bg-[#FFFBF2] mx-auto max-w-screen">
        <Navigation />

        {/* Hero Section */}
        <div className="relative isolate h-[100vh] px-6 pt-14 lg:px-8 flex-grow overflow-hidden">
          <video
            src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726649122/hero-kangaroo-animation_emryuw.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
          <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <MotionH1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              >
                Bushfire Brigade
                <br />
                Safety Starts with You
              </MotionH1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-xl leading-8 text-white"
              >
                Inspiring a new generation to be fire-smart and prepared for
                bushfire challenges.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <a href="#select" className="inline-block">
                  <button className="px-4 py-2 text-lg font-semibold text-white bg-black hover:bg-white hover:text-black transition-transform duration-300 transform hover:scale-105 rounded-md">
                    Explore
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Tutor Section */}
        <div
          id="select"
          className="relative py-8 flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/home-new.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
          <div className="relative z-10">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-4"
            >
              Get to know your tutors
            </MotionH1>
            <hr className="w-full max-w-lg border-gray-800 mb-4 mx-auto" />
            <div className="p-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Koala Tutor */}
                <MotionDiv
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex justify-center relative"
                >
                  <div className="bg-[#FFFBF2] rounded-full shadow-lg flex items-center justify-center z-10">
                    <svg height="350" width="350">
                      <circle cx="150" cy="150" r="140" fill="#FFFBF2" />
                      <image
                        href="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/koala-t.png"
                        height="250"
                        width="250"
                        x="30"
                        y="30"
                        className="animate-moveSideways"
                      />
                    </svg>
                    <button
                      onClick={toggleKoalaPopup} // Change this toggle function for each tutor
                      className="absolute text-black text-sm md:text-base bg-[#FFE6C5] py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-orange-300"
                      style={{
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      Learn more
                    </button>
                  </div>
                  {showKoalaPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-[#FFFBF2] rounded-xl bg-opacity-90 backdrop-blur-sm z-50">
                      <div className=" p-6 rounded-lg text-gray-800">
                        <h2 className="text-lg md:text-xl font-bold mb-4">
                          Hello! I&apos;m Chloe, the koala
                        </h2>
                        <p className="mb-4 text-lg">
                          I love helping you learn about bushfires, step by
                          step. If you stick with me, you&apos;ll definitely get
                          a HD+ in the bushfire subject!
                        </p>
                        <button
                          className="bg-[#FFE6C5] text-black py-2 px-4 rounded-lg hover:bg-orange-300"
                          onClick={toggleKoalaPopup}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </MotionDiv>

                {/* Kangaroo Tutor */}
                <MotionDiv
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-center relative"
                >
                  <div className="bg-[#FFFBF2] rounded-full shadow-lg flex items-center justify-center z-10">
                    <svg height="350" width="350">
                      <circle cx="150" cy="150" r="140" fill="#FFFBF2" />
                      <image
                        href="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kangaroo.png"
                        height="250"
                        width="250"
                        x="30"
                        y="30"
                        className="animate-moveSideways"
                      />
                    </svg>
                    <button
                      onClick={toggleKangarooPopup} // Change this toggle function for each tutor
                      className="absolute text-black text-sm md:text-base bg-[#FFE6C5] py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-orange-300"
                      style={{
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      Learn more
                    </button>
                  </div>
                  {showKangarooPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-[#FFFBF2] rounded-xl bg-opacity-90 backdrop-blur-sm z-50">
                      <div className="p-6 rounded-lg text-gray-800">
                        <h2 className="text-lg md:text-xl font-bold mb-4">
                          Hello! I&apos;m Jacky, the kangaroo
                        </h2>
                        <p className="mb-4 text-lg">
                          I&apos;ll help you learn the important skills to
                          survive and prepare for a bushfire. Stick with me, and
                          you&apos;ll have strong survival skills as your
                          superpower!
                        </p>
                        <button
                          className="bg-[#FFE6C5] text-black py-2 px-4 rounded-lg hover:bg-orange-300"
                          onClick={toggleKangarooPopup}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </MotionDiv>

                {/* Wombat Tutor */}
                <MotionDiv
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center relative"
                >
                  <div className="bg-[#FFFBF2] rounded-full shadow-lg flex items-center justify-center z-10">
                    <svg height="350" width="350">
                      <circle cx="150" cy="150" r="140" fill="#FFFBF2" />
                      <image
                        href="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/wombat.png"
                        height="250"
                        width="250"
                        x="30"
                        y="30"
                        className="animate-moveSideways"
                      />
                    </svg>
                    <button
                      onClick={toggleWombatPopup} // Change this toggle function for each tutor
                      className="absolute text-black text-sm md:text-base bg-[#FFE6C5] py-2 px-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-orange-300"
                      style={{
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      Learn more
                    </button>
                  </div>
                  {showWombatPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-[#FFFBF2] rounded-xl bg-opacity-90 backdrop-blur-sm z-50">
                      <div className="p-6 rounded-lg text-gray-800">
                        <h2 className="text-lg md:text-xl font-bold mb-4">
                          Hello! I&apos;m Johny, the wombat
                        </h2>
                        <p className="mb-4 text-lg">
                          I love helping you learn how to recover after a
                          bushfire. Together, we can rebuild our environment and
                          support each other.
                        </p>
                        <button
                          className="bg-[#FFE6C5] text-black py-2 px-4 rounded-lg hover:bg-orange-300"
                          onClick={toggleWombatPopup}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </MotionDiv>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div
          id="journey"
          className="relative py-8 flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/journey.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
          <div className="relative">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-3xl font-black text-center text-gray-800 mb-4"
            >
              Start your journey
            </MotionH1>
            <hr className="w-full max-w-lg border-gray-800 mb-4 mx-auto" />
            <div className="p-6">
              <MotionDiv
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
              >
                <Journey />
              </MotionDiv>
            </div>
          </div>
        </div>

        {/* What should you do contacts */}
        <div className="relative py-8 flex flex-col items-center justify-center w-full">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/3.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>

          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-black text-center text-gray-700 mb-4">
              Bushfire Brigade Handbook
            </h1>
            <hr className="w-full max-w-xs border-gray-700 mb-2 mx-auto" />
            {/* Bushfire Brigade Manual*/}
            <div className="flex flex-col sm:flex-row items-center mt-4">
              {/* text card */}
              <div className="bg-[#FFFBF2] p-4 mx-4 mt-4 rounded-xl shadow-lg text-gray-800">
                <h2 className="font-bold text-center text-2xl mb-2">
                  Your Guide to Navigating the Bushfire Brigade Website
                </h2>
                <p className="text-xl mb-4">
                  This manual is designed to help users, including teachers,
                  parents, and students, navigate the Bushfire Brigade website
                  with ease. It offers a step-by-step guide to accessing
                  important sections, learning resources, and interactive
                  features related to bushfire education.
                </p>
                <p className="text-xl">In this manual, you will learn:</p>
                <ul className="list-disc list-inside pl-4 text-xl space-y-2">
                  <li>
                    How to use the navigation bar to access different sections
                    such as Learn, Prepare, Recover, and Quiz
                  </li>
                  <li>
                    How to interact with educational content about bushfire
                    causes, safety tips, and recovery processes
                  </li>
                  <li>
                    How to participate in quizzes to reinforce knowledge gained
                    from the website
                  </li>
                  <li>
                    How to access help and support resources, including
                    emergency contacts like Triple Zero and the VicEmergency app
                  </li>
                  <li>
                    How to find and download learning materials and recovery
                    plans for students.
                  </li>
                </ul>

                {/* Centering the button */}
                <div className="flex justify-center items-center">
                  <Link
                    href="https://drive.google.com/file/d/1dN6rMcCw57Pu0zH8t4SyR1SN1xFAYyWA/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className="px-6 py-2 mt-4 text-lg font-semibold text-gray-700 border-2 border-gray-700 hover:bg-black hover:text-white transition-colors duration-300 rounded-md">
                      Download
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-shrink-0 p-4">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/bushfire_manual.png"
                  alt="Survival guide"
                  width={220}
                  height={120}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <BackToTopButton />
    </SmoothScrollWrapper>
  );
}
//old code without animation
// "use client";
// import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
// import Image from "next/image";
// import Journey from "./components/Journey";
// import {
//   SmoothScrollWrapper,
//   MotionH1,
// } from "./components/SmoothScrollWrapper";
// import { useState } from "react";

// export default function Home() {
//   const [showKoalaPopup, setShowKoalaPopup] = useState<boolean>(false);
//   const [showKangarooPopup, setShowKangarooPopup] = useState<boolean>(false);
//   const [showWombatPopup, setShowWombatPopup] = useState<boolean>(false);

//   const toggleKoalaPopup = (): void => {
//     setShowKoalaPopup(!showKoalaPopup);
//   };

//   const toggleKangarooPopup = (): void => {
//     setShowKangarooPopup(!showKangarooPopup);
//   };

//   const toggleWombatPopup = (): void => {
//     setShowWombatPopup(!showWombatPopup);
//   };
//   return (
//     <SmoothScrollWrapper>
//       <div className="bg-[#FFFBF2] mx-auto max-w-screen">
//         <Navigation />
//         {/* <main className="h-[100vh] w-full bg-[url('/home-landing.webp')] bg-center bg-cover bg-no-repeat"></main> */}
//         {/* Hero Section */}
//         <div className="relative isolate h-[100vh] px-6 pt-14 lg:px-8 flex-grow overflow-hidden">
//           {/* Background Video */}
//           <video
//             src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726649122/hero-kangaroo-animation_emryuw.mp4" // Replace with your video file path
//             className="absolute inset-0 w-full h-full object-cover"
//             autoPlay
//             loop
//             muted
//             playsInline
//           />

//           {/* Blur Overlay */}
//           <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>

//           {/* Content Overlay */}
//           <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//             <div className="text-center">
//               <MotionH1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
//               >
//                 {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"> */}
//                 Bushfire Brigade
//                 <br />
//                 Safety Starts with You
//                 {/* </h1> */}
//               </MotionH1>
//               <p className="mt-6 text-xl leading-8 text-white">
//                 Inspiring a new generation to be fire-smart and prepared for
//                 bushfire challenges.
//               </p>
//               <div className="mt-10 flex items-center justify-center gap-x-6">
//                 <a href="#select" className="inline-block">
//                   <button className="px-4 py-2 text-lg font-semibold text-white bg-black hover:bg-white hover:text-black transition-transform duration-300 transform hover:scale-105 rounded-md">
//                     Explore
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Tutor Section */}
//         <div className="relative py-8 flex flex-col items-center justify-center">
//           <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/home-new.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
//           <div className="relative z-10">
//             <h1
//               id="select"
//               className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-4"
//             >
//               Get to know your tutors
//             </h1>
//             <hr className="w-full max-w-lg border-gray-800 mb-4 mx-auto" />
//             <div className="p-4 w-full">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {/* Koala Tutor */}
//                 <div className="relative w-full h-full bg-[#FFFBF2] rounded-full transform transition-transform duration-300 hover:scale-105">
//                   <div className="absolute bg-[#FFE6C5] right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:bg-orange-300 z-10">
//                     <button
//                       onClick={toggleKoalaPopup}
//                       className="text-black text-sm md:text-base"
//                     >
//                       Click to know me
//                     </button>
//                   </div>
//                   <Image
//                     src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/koala-t.png"
//                     alt="Koala doctor with presentation"
//                     width={180} // Adjusted for smaller screens
//                     height={180}
//                     className="object-cover animate-moveSideways"
//                   />
//                   {showKoalaPopup && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                       <div className="bg-white p-6 rounded-lg shadow-sm text-black">
//                         <h2 className="text-lg md:text-xl font-bold mb-4">
//                           Hello! I&apos;m Chloe, the koala
//                         </h2>
//                         <p className="mb-4">
//                           I love helping you learn about bushfires, step by
//                           step. If you stick with me, you&apos;ll definitely get
//                           a HD+ in the bushfire subject!
//                         </p>
//                         <button
//                           className="bg-[#FFE6C5] text-black py-2 px-4 rounded hover:bg-orange-300"
//                           onClick={toggleKoalaPopup}
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Kangaroo Tutor */}
//                 <div className="relative w-full h-full aspect-square bg-[#FFFBF2] rounded-full transform transition-transform duration-300 hover:scale-105">
//                   <div className="absolute bg-[#FFE6C5] right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:bg-orange-300 z-10">
//                     <button
//                       onClick={toggleKangarooPopup}
//                       className="text-black text-sm md:text-base"
//                     >
//                       Click to know me
//                     </button>
//                   </div>
//                   <Image
//                     src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/kangaroo.png"
//                     alt="Kangaroo firefighter with presentation"
//                     width={240} // Adjusted for smaller screens
//                     height={240}
//                     className="object-cover animate-moveSideways"
//                   />
//                   {showKangarooPopup && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                       <div className="bg-white p-6 rounded-lg shadow-2xl text-black">
//                         <h2 className="text-lg md:text-xl font-bold mb-4">
//                           Hello! I&apos;m Jacky, the kangaroo
//                         </h2>
//                         <p className="mb-4">
//                           I&apos;ll help you learn the important skills to
//                           survive and prepare for a bushfire. Stick with me, and
//                           you&apos;ll have strong survival skills as your
//                           superpower!
//                         </p>
//                         <button
//                           className="bg-[#FFE6C5] text-black py-2 px-4 rounded hover:bg-orange-300"
//                           onClick={toggleKangarooPopup}
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Wombat Tutor */}
//                 <div className="relative w-full h-full aspect-square bg-[#FFFBF2] rounded-full transform transition-transform duration-300 hover:scale-105">
//                   <div className="absolute bg-[#FFE6C5] right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-center py-2 px-2 rounded-md shadow-md transition-transform duration-300 hover:scale-105 hover:bg-orange-300 z-10">
//                     <button
//                       onClick={toggleWombatPopup}
//                       className="text-black text-sm md:text-base"
//                     >
//                       Click to know me
//                     </button>
//                   </div>
//                   <Image
//                     src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/wombat.png"
//                     alt="Wombat volunteer with presentation"
//                     width={190} // Adjusted for smaller screens
//                     height={190}
//                     className="object-cover animate-moveSideways"
//                   />
//                   {showWombatPopup && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                       <div className="bg-white p-6 rounded-lg shadow-2xl text-black">
//                         <h2 className="text-lg md:text-xl font-bold mb-4">
//                           Hello! I&apos;m Johny, the wombat
//                         </h2>
//                         <p className="mb-4">
//                           I love helping you learn how to recover after a
//                           bushfire. Together, we can rebuild our environment and
//                           support each other.
//                         </p>
//                         <button
//                           className="bg-[#FFE6C5] text-black py-2 px-4 rounded hover:bg-orange-300"
//                           onClick={toggleWombatPopup}
//                         >
//                           Close
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Journey Section */}
//         <div
//           id="journey"
//           className="relative py-8 flex flex-col items-center justify-center"
//         >
//           <div className="absolute inset-0 bg-[url('https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/journey.webp')] bg-[#FFFBF2] opacity-20 bg-cover bg-center brightness-75"></div>
//           <div className="relative">
//             <h1 className="text-3xl font-black text-center text-gray-800 mb-4">
//               Start your journey
//             </h1>
//             <hr className="w-full max-w-lg border-gray-800 mb-4 mx-auto" />
//             <div className="p-6">
//               {/* Full-width card Section */}
//               <Journey />
//             </div>
//           </div>
//         </div>
//
//         <Footer />
//       </div>
//     </SmoothScrollWrapper>
//   );
// }
