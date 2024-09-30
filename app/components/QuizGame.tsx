// components/QuizGame.tsx
import React, { useState } from "react";
import QuizCard from "./QuizCard";
import QuizPopup from "./QuizPopup";

type Question = {
  questionText: string;
  choices: string[];
  correctAnswer: number;
};

type Quiz = {
  title: string;
  description: string;
  imageUrl: string;
  questions: Question[];
};

const QuizGame = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null); // selectedQuiz type
  const [scores, setScores] = useState<(number | null)[]>([null, null, null]); // Store scores for each quiz

  const quizzes: Quiz[] = [
    {
      title: "Quiz for Learning Section",
      description:
        "Learn about the basics of bushfires, from how they start to how they spread.",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/learning-landing.jpeg",
      questions: [
        {
          questionText: "What causes most bushfires?",
          choices: ["Lightning", "Humans", "Animals"],
          correctAnswer: 1,
        },
        {
          questionText: "What weather condition increases bushfire risk?",
          choices: ["Rain", "Wind", "Fog"],
          correctAnswer: 1,
        },
        {
          questionText: "Which of these is the main component of a bushfire?",
          choices: ["Trees", "Water", "Fire"],
          correctAnswer: 2,
        },
        {
          questionText: "How do bushfires spread quickly?",
          choices: ["Wind", "Flood", "Animals"],
          correctAnswer: 0,
        },
        {
          questionText: "What is the best time to learn about bushfire safety?",
          choices: [
            "During a bushfire",
            "Before a bushfire",
            "After a bushfire",
          ],
          correctAnswer: 1,
        },
      ],
    },
    {
      title: "Quiz for Preparing Section",
      description:
        "Test your knowledge of bushfire preparedness, including packing and planning.",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/prepare.webp",
      questions: [
        {
          questionText: "What should be in a bushfire survival kit?",
          choices: ["Water", "Blankets", "Food"],
          correctAnswer: 0,
        },
        {
          questionText:
            "How often should you practice your bushfire safety plan?",
          choices: ["Once a year", "Never", "Every month"],
          correctAnswer: 2,
        },
        {
          questionText: "What should you do if there's a bushfire warning?",
          choices: ["Stay inside", "Listen to the radio", "Go outside"],
          correctAnswer: 1,
        },
        {
          questionText:
            "What should be your first step in bushfire preparation?",
          choices: ["Pack an emergency kit", "Evacuate", "Create a plan"],
          correctAnswer: 2,
        },
        {
          questionText: "What is an important tool for bushfire preparedness?",
          choices: ["Emergency contact list", "Winter clothes", "Cookbook"],
          correctAnswer: 0,
        },
      ],
    },
    {
      title: "Quiz for Recovering Section",
      description:
        "After a bushfire, recovery is essential. This quiz helps you understand recovery steps.",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/recovery.jpeg",
      questions: [
        {
          questionText: "What should be done after a bushfire?",
          choices: ["Stay home", "Join the recovery effort", "Evacuate"],
          correctAnswer: 2,
        },
        {
          questionText: "Who should you contact after a bushfire?",
          choices: ["Friends", "Emergency services", "Neighbors"],
          correctAnswer: 1,
        },
        {
          questionText: "How can you support recovery efforts?",
          choices: [
            "Donate to local organizations",
            "Ignore the situation",
            "Go on vacation",
          ],
          correctAnswer: 0,
        },
        {
          questionText: "When is it safe to return home after a bushfire?",
          choices: [
            "When authorities give the all-clear",
            "Immediately",
            "Never",
          ],
          correctAnswer: 0,
        },
        {
          questionText: "What should you check after returning home?",
          choices: [
            "Water supply",
            "Electricity",
            "Both water and electricity",
          ],
          correctAnswer: 2,
        },
      ],
    },
  ];

  const handleStartQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setShowPopup(true);
  };

  const handleClosePopup = (finalScore: number) => {
    const updatedScores = [...scores];
    updatedScores[quizzes.indexOf(selectedQuiz!)] = finalScore; // Update the score for the selected quiz
    setScores(updatedScores);
    setShowPopup(false);
    setSelectedQuiz(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
      {quizzes.map((quiz, index) => (
        <QuizCard
          key={index}
          title={quiz.title}
          description={quiz.description}
          imageUrl={quiz.imageUrl}
          score={scores[index]} // Pass the score for the respective quiz
          onStartQuiz={() => handleStartQuiz(quiz)}
        />
      ))}
      {showPopup && selectedQuiz && (
        <QuizPopup
          questions={selectedQuiz.questions}
          onClose={handleClosePopup} // Handle quiz completion and pass final score
        />
      )}
    </div>
  );
};

export default QuizGame;
