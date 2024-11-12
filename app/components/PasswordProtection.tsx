"use client";
import React, { useState, ReactNode } from "react";
import Image from "next/image";
import { FiCopy, FiCheck } from "react-icons/fi"; // Import icons for copy and check

interface PasswordProtectionProps {
  children: ReactNode;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({
  children,
}) => {
  const [password, setPassword] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false); // New state for copy confirmation

  const correctPassword = "PleaseWeNeedHD";
  const hintText = "PleaseWeNeedHD"; // Define the hint text here

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleHint = () => {
    setShowHint(!showHint);
    setCopied(false); // Reset copied state when hint is toggled
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hintText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <>
      {!isAuthenticated ? (
        <div className="relative min-h-screen">
          {/* Video Background */}
          <video
            src="https://res.cloudinary.com/dxtvfgaud/video/upload/q_auto:low,f_auto/v1726649122/hero-kangaroo-animation_emryuw.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg text-black opacity-95 mx-4">
              {/* Logo Section */}
              <div className="flex justify-center mb-4">
                <Image
                  src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/logo.png"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="h-16"
                />
              </div>
              {/* Password Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="text-lg font-semibold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-500 appearance-none"
                      placeholder="Enter password"
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute inset-y-0 right-2 flex items-center text-gray-600 hover:text-gray-800"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                {error && (
                  <div className="mb-4 text-red-500 text-sm">{error}</div>
                )}
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-orange-400 text-white rounded-md hover:bg-[#FFAD4D] focus:outline-none transform transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  Log in
                </button>
              </form>

              {/* Accordion for Password Hint */}
              <div className="mt-4">
                <button
                  onClick={toggleHint}
                  className="w-full flex items-center justify-between py-2 px-3 text-gray-700 font-medium border border-gray-300 rounded-md transition-colors hover:bg-gray-100 focus:outline-none"
                >
                  {showHint
                    ? "Hide hint"
                    : "Password giving you trouble? Click to reveal!"}
                  <span
                    className={`transform transition-transform duration-200 ${
                      showHint ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {showHint && (
                  <div className="mt-2 p-3 border-l-4 border-orange-400 bg-orange-50 text-gray-600 text-sm rounded-md shadow-sm transition-opacity duration-300 flex items-center justify-between">
                    <span>{hintText}</span>
                    <button
                      onClick={handleCopy}
                      className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {copied ? (
                        <FiCheck className="text-green-500" />
                      ) : (
                        <FiCopy />
                      )}
                    </button>
                  </div>
                )}
                {copied && (
                  <div className="text-green-500 text-xs mt-1">
                    Copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            <p>
              This website experience is best on desktops, laptops, and tablets.
              We do not encourage kids to use mobile phones.
            </p>
          </footer>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default PasswordProtection;
