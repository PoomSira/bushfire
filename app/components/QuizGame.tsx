import React from "react";
import Image from "next/image";

type Props = {};

const QuizGame = (props: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
      {/* Card 1 */}
      <div className="bg-[#FFFBF2] shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Quiz for Learning Section</h2>
        <Image
          src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/learning-landing.jpeg"
          alt="Learning About Bushfires"
          width={800}
          height={500}
          className="object-cover w-full h-48 rounded-xl transform transition-transform duration-500 hover:scale-110"
        />
        <p className="text-gray-600 mt-4 mb-6">
          This is a description for the first card. Add any text here to
          describe the card&apos;s purpose.
        </p>
        <button className="bg-orange-400 p-2 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105">
          Start Quiz
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-[#FFFBF2] shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Quiz for Preparing Section</h2>
        <Image
          src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/prepare.webp"
          alt="Preparation for Bushfire"
          width={800}
          height={500}
          className="object-cover w-full h-48 rounded-xl transform transition-transform duration-500 hover:scale-110"
        />
        <p className="text-gray-600 mt-4 mb-6">
          This is a description for the second card. Add any text here to
          describe the card&apos;s purpose.
        </p>
        <button className="bg-orange-400 p-2 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105">
          Start Quiz
        </button>
      </div>

      {/* Card 3 */}
      <div className="bg-[#FFFBF2] shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Quiz for Recovering Section</h2>
        <Image
          src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/recovery.jpeg"
          alt="Recover"
          width={800}
          height={500}
          className="object-cover w-full h-48 rounded-xl transform transition-transform duration-500 hover:scale-110"
        />
        <p className="text-gray-600 mt-4 mb-6">
          This is a description for the third card. Add any text here to
          describe the card&apos;s purpose.
        </p>
        <button className="bg-orange-400 p-2 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizGame;
