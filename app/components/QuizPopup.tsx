// components/QuizPopup.tsx
import React, { useState } from "react";

type Question = {
  questionText: string;
  choices: string[];
  correctAnswer: number;
};

type Props = {
  questions: Question[];
  onClose: (finalScore: number) => void;
};

const QuizPopup: React.FC<Props> = ({ questions, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showFinalScore, setShowFinalScore] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong!");
    }

    setTimeout(() => {
      setFeedback("");
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowFinalScore(true); // Show final score when the quiz is finished
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Close Button in the top right corner */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => onClose(score)} // Pass the final score when closing
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {!showFinalScore ? (
          <>
            <p className="text-sm text-gray-500 mb-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <h3 className="text-2xl mb-4">
              {questions[currentQuestion].questionText}
            </h3>

            {questions[currentQuestion].choices.map((choice, index) => (
              <button
                key={index}
                className="block w-full bg-orange-400 text-white py-2 my-2 rounded-lg hover:bg-orange-300"
                onClick={() => handleAnswerClick(index)}
              >
                {choice}
              </button>
            ))}

            <p className="mt-4 text-lg">{feedback}</p>
            <p className="mt-2 text-gray-600">
              Score: {score}/{questions.length}
            </p>
          </>
        ) : (
          // Show final score after the quiz is completed
          <div className="text-center">
            <h2 className="text-3xl font-bold">Quiz Completed!</h2>
            <p className="mt-4 text-xl">
              Your final score is {score}/{questions.length}
            </p>
            <button
              className="mt-6 bg-orange-400 p-2 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300"
              onClick={() => onClose(score)} // Pass the final score and close
            >
              Close Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPopup;
