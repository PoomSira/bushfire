import Link from "next/link";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <a
        className="flex text-2xl items-center justify-center w-28 h-12"
        href="#"
      >
        Home
      </a>
      <Link
        href="/"
        className="flex text-2xl items-center justify-center w-28 h-12"
      >
        Game
      </Link>
      <Link
        href="/quiz"
        className="flex text-2xl items-center justify-center w-28 h-12"
      >
        Quiz
      </Link>

      <Link
        href="/"
        className="flex text-2xl items-center justify-center w-28 h-12"
      >
        Map
      </Link>
      <Link
        href="/"
        className="flex text-2xl items-center justify-center w-28 h-12"
      >
        About
      </Link>
    </ul>
  );
}

export default function Navigation() {
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen px-6 py-3">
      <div className="flex items-center justify-between w-full">
        <div className="mr-6 py-1.5 font-bold text-3xl text-black">
          Bushfire
        </div>
        <NavList />
      </div>
    </div>
  );
}
