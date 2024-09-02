import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = 300; // Adjust based on your header height
      setIsVisible(scrollY < headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed bg-[#FFFBF2] border-gray-200 top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[85%] lg:w-[75%] xl:w-[70%] rounded-xl shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={70}
            layout="intrinsic"
            quality={100}
          />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row justify-between w-full p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li className="flex-1 text-center md:mx-2">
              <Link
                className="flex justify-center items-center text-2xl w-full h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="flex-1 text-center md:mx-2">
              <Link
                href="/learn"
                className="flex justify-center items-center text-2xl w-full h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
              >
                Learn
              </Link>
            </li>
            <li className="flex-1 text-center md:mx-2">
              <Link
                href="/prepare"
                className="flex justify-center items-center text-2xl w-full h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
              >
                Prepare
              </Link>
            </li>
            <li className="flex-1 text-center md:mx-2">
              <Link
                href="/recover"
                className="flex justify-center items-center text-2xl w-full h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
              >
                Recover
              </Link>
            </li>
            <li className="flex-1 text-center md:mx-2">
              <Link
                href="/quiz"
                className="flex justify-center items-center text-2xl w-full h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
              >
                Quiz
              </Link>
            </li>
            <li className="flex-1 text-center md:mx-2">
              <Link
                href="/help"
                className="flex justify-center items-center text-2xl w-full h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
