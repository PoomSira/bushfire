// components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFBF2] rounded-lg dark:bg-gray-900">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={100}
              layout="intrinsic"
              quality={100}
            />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
          © 2024 Bushfire Brigade. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
