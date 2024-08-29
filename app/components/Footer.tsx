// components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFBF2] ">
      <hr className="my-8 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="w-full pl-10 pr-10 mx-auto p-4 md:py-4">
        <div className="flex justify-between">
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
          <ul className="flex flex-wrap items-center mb-2 text-xl font-medium text-gray-500 sm:mb-0">
            {["Learn", "Prepare", "Recover", "Quiz", "Help"].map(
              (text, index) => (
                <li
                  key={index}
                  className="transition-transform duration-300 transform hover:scale-105"
                >
                  <Link
                    href={`/${text.toLowerCase()}`}
                    aria-label={text}
                    className="hover:underline me-4 md:me-6 hover:text-orange-400"
                  >
                    {text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <hr className="border-gray-200 sm:mx-auto lg:my-8" />
        <div className="text-xl text-gray-500 text-center">
          <p className="mb-4">
            Bushfire Brigade respectfully acknowledges the Traditional Owners of
            the land we govern, the Wurundjeri Woi-wurrung and Bunurong / Boon
            Wurrung peoples of the Kulin and pays respect to their Elders past
            and present. We acknowledge and honour the unbroken spiritual,
            cultural and political connection they have maintained to this
            unique place for more than 2000 generations. We accept the
            invitation in the Uluru Statement from the Heart and are committed
            to walking together to build a better future.
          </p>
          <p>© 2024 Bushfire Brigade(TA30). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
