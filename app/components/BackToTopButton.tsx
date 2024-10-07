// components/BackToTopButton.tsx
import { useEffect, useState, useCallback } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  // Using useCallback to memoize the toggleVisibility function
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);

      if (timer) {
        clearTimeout(timer);
      }

      setTimer(
        setTimeout(() => {
          setIsVisible(false);
        }, 3000)
      );
    } else {
      setIsVisible(false);
    }
  }, [timer]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [toggleVisibility, timer]);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } fixed bottom-5 right-5 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-md transition-opacity duration-500 ease-in-out hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700active:shadow-lg`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
