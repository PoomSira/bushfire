// components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFBF2] ">
      <hr className="my-8 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="Homepage">
            <Image
              src="/logo.png"
              alt="Bushfire Brigade Logo"
              width={120}
              height={100}
              layout="intrinsic"
              quality={100}
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link
                href="/learn"
                aria-label="Learn"
                className="hover:underline me-4 md:me-6 hover:text-orange-400"
              >
                Learn
              </Link>
            </li>
            <li>
              <Link
                href="/prepare"
                aria-label="Prepare"
                className="hover:underline me-4 md:me-6 hover:text-orange-400"
              >
                Prepare
              </Link>
            </li>
            <li>
              <Link
                href="/recover"
                aria-label="Recover"
                className="hover:underline me-4 md:me-6 hover:text-orange-400"
              >
                Recover
              </Link>
            </li>
            <li>
              <Link
                href="/quiz"
                aria-label="Quiz"
                className="hover:underline me-4 md:me-6 hover:text-orange-400"
              >
                Quiz
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                aria-label="Help"
                className="hover:underline me-4 md:me-6 hover:text-orange-400"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
        <hr className="border-gray-200 sm:mx-auto lg:my-8" />
        <div className="text-sm text-gray-500 text-center">
          <p className="mb-6">
            Bushfire Brigade respectfully acknowledges the Traditional Owners of
            the land we govern, the Wurundjeri Woi-wurrung and Bunurong / Boon
            Wurrung peoples of the Kulin and pays respect to their Elders past
            and present. We acknowledge and honour the unbroken spiritual,
            cultural and political connection they have maintained to this
            unique place for more than 2000 generations. We accept the
            invitation in the Uluru Statement from the Heart and are committed
            to walking together to build a better future.
          </p>
          <p>© 2024 Bushfire Brigade. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
