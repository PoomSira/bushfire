// components/Navigation.tsx
import Image from "next/image";
import Link from "next/link";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Link
          className="flex text-2xl items-center justify-center w-28 h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/learn"
          className="flex text-2xl items-center justify-center w-28 h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
        >
          Learn
        </Link>
      </li>
      <li>
        <Link
          href="/prepare"
          className="flex text-2xl items-center justify-center w-28 h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
        >
          Prepare
        </Link>
      </li>
      <li>
        <Link
          href="/recover"
          className="flex text-2xl items-center justify-center w-28 h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
        >
          Recover
        </Link>
      </li>
      <li>
        <Link
          href="/quiz"
          className="flex text-2xl items-center justify-center w-28 h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
        >
          Quiz
        </Link>
      </li>
      <li>
        <Link
          href="/help"
          className="flex text-2xl items-center justify-center w-28 h-12 text-gray-900 hover:text-orange-400 transform transition-transform duration-300 hover:scale-110"
        >
          Help
        </Link>
      </li>
    </ul>
  );
}

export default function Navigation() {
  return (
    <div className="sticky top-0 z-30 bg-[#FFFBF2] mx-auto max-w-screen px-6 py-3">
      <div className="flex items-center justify-between w-full">
        <div className="mr-6">
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
        </div>
        <NavList />
      </div>
    </div>
  );
}
