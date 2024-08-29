"use client";
import { useState, ReactNode } from "react";
import Image from "next/image";

interface PasswordProtectionProps {
  children: ReactNode;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({
  children,
}) => {
  const [password, setPassword] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const correctPassword = "WeLovePatrick"; // Replace with your desired password

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {!isAuthenticated ? (
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-black">
              {/* Logo Section */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120} // Adjust the width as needed
                  height={120} // Adjust the height as needed
                  className="h-16" // Optional, if you want to control height with Tailwind
                />
              </div>
              {/* Password Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="text-lg font-semibold mb-4"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Enter password"
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
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-orange-400 text-white rounded-md hover:bg-[#FFAD4D] focus:outline-none transform transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default PasswordProtection;
