// components/QuizCard.tsx
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  score: number | null;
  onStartQuiz: () => void;
};

const QuizCard: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  score,
  onStartQuiz,
}) => {
  return (
    <div className="bg-[#FFFBF2] shadow-md rounded-lg p-6">
      <h2 className="text-gray-700 text-xl text-center font-bold mb-4">
        {title}
      </h2>
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={500}
        className="object-cover w-full h-48 rounded-xl transform transition-transform duration-500 hover:scale-110"
      />
      <p className="text-gray-600 mt-4 mb-6">{description}</p>
      {score !== null && (
        <p className="text-green-600 font-bold mb-4">Your Score: {score}/5</p>
      )}
      <button
        className="bg-orange-400 p-2 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300 transition-transform transform hover:scale-105"
        onClick={onStartQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizCard;
