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
          Learn about the basics of bushfires, from how they start to how they
          spread. This quiz will test your knowledge and help you become more
          aware of bushfire safety measures. Ready to learn?
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
          Being prepared for a bushfire is essential. This quiz will guide you
          through key preparation steps, like making an emergency plan and
          knowing what to pack. Test your readiness for any bushfire event.
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
          After a bushfire, recovery is an important step. This quiz will test
          your understanding of the actions you should take to stay safe,
          rebuild, and get support. Learn how to recover effectively now.
        </p>
        <button className="bg-orange-400 p-2 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizGame;
