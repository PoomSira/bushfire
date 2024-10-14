import React, { useState } from "react";
import Image from "next/image"; // Use next/image for optimized image loading

type Question = {
  questionText: string;
  choices: string[];
  correctAnswer: number;
  feedback: {
    correct: string;
    incorrect: string;
  };
};

type Props = {
  questions: Question[];
  onClose: (finalScore: number) => void;
};

const QuizPopup: React.FC<Props> = ({ questions, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);

  // Medal image paths (replace with actual image paths or URLs)
  const bronzeMedal = "/bronze.png";
  const silverMedal = "/silver.png";
  const goldMedal = "/gold.png";

  const handleAnswerClick = (index: number) => {
    if (isAnswerSelected) return; // Prevent further clicks after an answer is selected

    setIsAnswerSelected(true); // Prevent selecting multiple answers
    setSelectedAnswer(index); // Track the selected answer
    const isCorrect = questions[currentQuestion].correctAnswer === index;

    // Use feedback from the question object
    if (isCorrect) {
      setScore(score + 1);
      setFeedback(questions[currentQuestion].feedback.correct);
    } else {
      setFeedback(questions[currentQuestion].feedback.incorrect);
    }
  };

  const handleNextQuestion = () => {
    setIsAnswerSelected(false);
    setFeedback(null);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalScore(true); // End of the quiz
    }
  };

  const renderMedal = () => {
    if (score === 10) {
      return (
        <>
          <Image
            src={goldMedal}
            alt="Gold Medal"
            width={80}
            height={80}
            className="mx-auto mt-4"
          />
          <p className="mt-4 text-lg text-yellow-500">
            <strong>Gold: Bushfire Guardian</strong>
            <br />
            You’re the ultimate protector, fully prepared to keep your home and
            family safe from bushfires!
          </p>
        </>
      );
    } else if (score === 9) {
      return (
        <>
          <Image
            src={silverMedal}
            alt="Silver Medal"
            width={80}
            height={80}
            className="mx-auto mt-4"
          />
          <p className="mt-4 text-lg text-gray-400">
            <strong>Silver: Fire Ready Hero</strong>
            <br />
            You&apos;re a step ahead, well-prepared and alert to face any
            bushfire challenges!
          </p>
        </>
      );
    } else if (score === 8) {
      return (
        <>
          <Image
            src={bronzeMedal}
            alt="Bronze Medal"
            width={80}
            height={80}
            className="mx-auto mt-4"
          />
          <p className="mt-4 text-lg text-orange-400">
            <strong>Bronze: Safety Scout</strong>
            <br />
            You’ve taken the first steps to get ready, learning how to prepare
            for bushfires!
          </p>
        </>
      );
    }
    return null; // No medal for other scores
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => onClose(score)}
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
            <h3 className="text-gray-700 text-2xl mb-4">
              {questions[currentQuestion].questionText}
            </h3>

            {questions[currentQuestion].choices.map((choice, index) => {
              // Determine color based on whether it's the selected answer or correct answer
              let buttonClass = "bg-orange-400 text-white hover:bg-orange-300";
              if (isAnswerSelected) {
                if (index === questions[currentQuestion].correctAnswer) {
                  buttonClass = "bg-green-500 text-white"; // Highlight the correct answer
                } else if (index === selectedAnswer) {
                  buttonClass = "bg-red-500 text-white"; // Highlight the wrong selected answer
                } else {
                  buttonClass = "bg-gray-300 text-white"; // Gray out the other options
                }
              }

              return (
                <button
                  key={index}
                  className={`block w-full py-2 my-2 rounded-lg ${buttonClass}`}
                  onClick={() => handleAnswerClick(index)}
                  disabled={isAnswerSelected}
                >
                  {choice}
                </button>
              );
            })}

            {feedback && (
              <p
                className={`mt-4 text-lg ${
                  feedback.includes("Correct")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {feedback}
              </p>
            )}

            {isAnswerSelected && (
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
                onClick={handleNextQuestion}
              >
                {currentQuestion < questions.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </button>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-700">
              Quiz Completed!
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              Your final score is {score}/{questions.length}
            </p>

            {/* Render Medal and Description */}
            {renderMedal()}

            <button
              className="mt-6 bg-orange-400 p-2 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300"
              onClick={() => onClose(score)}
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
