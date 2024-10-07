import React, { useState } from "react";

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
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);

  // Handles when an answer is selected
  const handleAnswerClick = (index: number) => {
    if (isAnswerSelected) return; // Prevent further clicks after an answer is selected

    setIsAnswerSelected(true); // Prevent selecting multiple answers
    const isCorrect = questions[currentQuestion].correctAnswer === index;

    // Use feedback from the question object
    if (isCorrect) {
      setScore(score + 1);
      setFeedback(questions[currentQuestion].feedback.correct);
    } else {
      setFeedback(questions[currentQuestion].feedback.incorrect);
    }
  };

  // Move to the next question
  const handleNextQuestion = () => {
    setIsAnswerSelected(false); // Enable answer selection for the next question
    setFeedback(null); // Reset feedback

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalScore(true); // End of the quiz
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={() => onClose(score)} // Close the quiz
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

            {questions[currentQuestion].choices.map((choice, index) => (
              <button
                key={index}
                className={`block w-full py-2 my-2 rounded-lg 
                  ${
                    isAnswerSelected
                      ? "cursor-not-allowed"
                      : "hover:bg-orange-300"
                  } 
                  ${
                    feedback &&
                    index === questions[currentQuestion].correctAnswer
                      ? "bg-green-400"
                      : isAnswerSelected && "bg-red-400"
                  }
                  ${
                    !isAnswerSelected
                      ? "bg-orange-400 text-white"
                      : "text-white"
                  }`}
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswerSelected}
              >
                {choice}
              </button>
            ))}

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
                className="mt-4 w-full bg-orange-400 text-white hover:bg-orange-300 py-2 rounded-lg"
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
            <button
              className="mt-6 bg-orange-400 p-2 text-white font-semibold rounded-lg shadow-md hover:bg-orange-300"
              onClick={() => onClose(score)} // Close and pass the score
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
