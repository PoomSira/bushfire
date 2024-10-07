// components/QuizGame.tsx
import React, { useState } from "react";
import QuizCard from "./QuizCard";
import QuizPopup from "./QuizPopup";

type Question = {
  questionText: string;
  choices: string[];
  correctAnswer: number;
  feedback: {
    correct: string;
    incorrect: string;
  };
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
          questionText:
            "Which fire was Australia’s deadliest and most devastating bushfire?",
          choices: [
            "Lancefield-Cobaw Croziers Track Burn (2015)",
            "Black Saturday (2009)",
            "Aberfeldy-Donnellys Creek Fire (2013)",
            "2019-20 Fire Season",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! Black Saturday was Australia’s worst bushfire, killing 173 people and destroying 2,000 homes.",
            incorrect:
              "Incorrect. Black Saturday (2009) was Australia's deadliest bushfire, not the others.",
          },
        },
        {
          questionText: "What can cause a bushfire to start?",
          choices: [
            "Lightning",
            "Dry plants and trees",
            "People",
            "All of the above",
          ],
          correctAnswer: 3,
          feedback: {
            correct:
              "Correct! Bushfires can start from natural causes like lightning or dry plants, as well as human activity such as campfires or machinery sparks.",
            incorrect:
              "Incorrect. The correct answer is 'All of the above,' as both natural causes and human activity can start bushfires.",
          },
        },
        {
          questionText: "How does strong wind affect a bushfire?",
          choices: [
            "It slows the fire down",
            "It makes the fire burn in one direction",
            "It helps spread the fire faster and farther",
            "It makes the fire weaker",
          ],
          correctAnswer: 2,
          feedback: {
            correct:
              "Correct! Winds blow flames and carry embers, helping bushfires spread quickly and even start new fires called spot fires far ahead.",
            incorrect:
              "Incorrect. Strong winds help spread the fire faster and farther, making the fire more dangerous.",
          },
        },
        {
          questionText:
            "What technique did Indigenous Australians use to manage the land with fire?",
          choices: [
            "Controlled burning",
            "Fire-stick farming",
            "Firebreaks",
            "Slash-and-burn farming",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! Indigenous Australians used fire-stick farming for thousands of years to manage the land by controlling vegetation and preventing larger fires.",
            incorrect:
              "Incorrect. The traditional technique used by Indigenous Australians was fire-stick farming.",
          },
        },
        {
          questionText: "What are some potential fuels for a bushfire?",
          choices: [
            "Dry grass and leaves",
            "Rocks and soil",
            "Water and mud",
            "None of the above",
          ],
          correctAnswer: 0,
          feedback: {
            correct:
              "Correct! Dry grass, leaves, twigs, and branches are fuels that can easily catch fire during hot and dry weather conditions.",
            incorrect:
              "Incorrect. Dry grass and leaves are common fuels for bushfires.",
          },
        },
        {
          questionText: "What happened in the 2019-20 fire season in Victoria?",
          choices: [
            "Over 1.5 million hectares of land were burned",
            "100 homes were destroyed",
            "Five homes were lost",
            "Only animals were harmed",
          ],
          correctAnswer: 0,
          feedback: {
            correct:
              "Correct! In the 2019-20 fire season, over 1.5 million hectares were burned in Victoria, causing widespread devastation.",
            incorrect:
              "Incorrect. The correct answer is 'Over 1.5 million hectares of land were burned.'",
          },
        },
        {
          questionText:
            "What makes a sudden wind change dangerous during a bushfire?",
          choices: [
            "It makes the fire go out",
            "It can change the direction of the fire, making it harder to control",
            "It makes the fire colder",
            "It prevents the fire from spreading",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! A sudden wind change can push the fire in a new direction, making it grow faster and harder to control.",
            incorrect:
              "Incorrect. Wind changes make fires more dangerous by shifting their direction.",
          },
        },
        {
          questionText:
            "What percentage of Australia’s land burns every year due to bushfires?",
          choices: ["1-2%", "3-10%", "20-30%", "50%"],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! Around 3% to 10% of Australia's land burns each year due to bushfires, depending on the weather conditions.",
            incorrect:
              "Incorrect. The correct answer is '3-10%' as this is the average annual range of land burned.",
          },
        },
        {
          questionText: "What does an Extreme Risk Rating mean?",
          choices: [
            "Big, dangerous fires. Be very careful and stay safe!",
            "Strong fires possible. Stay alert and follow safety rules.",
            "Small fires likely. Still, be careful and follow fire safety.",
            "Very safe from fires. Know safety rules just in case.",
          ],
          correctAnswer: 0,
          feedback: {
            correct:
              "Correct! Extreme Risk Rating means big, dangerous fires. Be very careful and stay safe!",
            incorrect:
              "Incorrect. An Extreme Risk Rating means big, dangerous fires are expected, not smaller or moderate fires.",
          },
        },
        {
          questionText:
            "What were the main causes of the 2015 Lancefield-Cobaw Croziers Track Burn?",
          choices: [
            "It was a natural fire caused by lightning",
            "It was a planned burn that got out of control",
            "It started because of a car accident",
            "It was caused by lightning and strong winds",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! The 2015 Lancefield-Cobaw Croziers Track Burn was a controlled fire that accidentally burned over 3,000 hectares after it got out of control.",
            incorrect:
              "Incorrect. The fire was a planned burn that went out of control, not a natural or accidental fire.",
          },
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
          questionText: "Which season has the highest risk of bushfires?",
          choices: ["Summer", "Autumn", "Winter", "Spring"],
          correctAnswer: 0,
          feedback: {
            correct:
              "Correct! Summer is the season when bushfires happen the most because it’s hot and dry.",
            incorrect:
              "Incorrect. Summer is the season with the highest risk of bushfires because it is hot and dry.",
          },
        },
        {
          questionText:
            "During which months of the year do you need to be very careful of bushfires?",
          choices: ["December", "January", "February", "All of the above"],
          correctAnswer: 3,
          feedback: {
            correct:
              "Correct! You need to be extra careful in December, January, and February because those are the hottest months of summer.",
            incorrect:
              "Incorrect. December, January, and February are the hottest months with the highest risk of bushfires.",
          },
        },
        {
          questionText:
            "Which of these statements about a Moderate Fire Risk Rating are true?",
          choices: [
            "The fire can mostly be controlled",
            "You should plan and prepare",
            "You should stay up-to-date on the fire and be ready to act",
            "All of the above",
          ],
          correctAnswer: 3,
          feedback: {
            correct:
              "Correct! All of these statements are important to remember for a Moderate Fire Risk Rating.",
            incorrect:
              "Incorrect. All of these statements are true for a Moderate Fire Risk Rating.",
          },
        },
        {
          questionText:
            "Which place should you be extra careful in during a bushfire due to fast-spreading fires?",
          choices: [
            "Near areas with dry grass",
            "In cities",
            "Near lakes",
            "In wet forests",
          ],
          correctAnswer: 0,
          feedback: {
            correct:
              "Correct! Dry grass can catch fire easily and spreads quickly, making areas with dry grass dangerous during a bushfire.",
            incorrect:
              "Incorrect. Near areas with dry grass is the correct answer because dry vegetation spreads fire quickly.",
          },
        },
        {
          questionText: "Why are bushfires in dense bush areas very dangerous?",
          choices: [
            "Small sticks burn fast, and big logs stay hot for a long time",
            "Trees in bush areas are fireproof",
            "Bushfires can’t spread in thick bush",
            "Thick bush areas are always wet and safe",
          ],
          correctAnswer: 0,
          feedback: {
            correct:
              "Correct! In dense bush areas, small sticks catch fire quickly, and larger logs can burn for a long time, making the area dangerous during a fire.",
            incorrect:
              "Incorrect. Small sticks burn fast and big logs stay hot for a long time, making bushfires in dense areas dangerous.",
          },
        },
        {
          questionText: "Why is having a fire plan super important?",
          choices: [
            "It helps you stay calm and know what to do",
            "It tells you where to go and what to take",
            "It keeps you and your family safe",
            "All of the above",
          ],
          correctAnswer: 3,
          feedback: {
            correct:
              "Correct! A fire plan helps you stay calm, know what to do, where to go, and what to take to keep yourself and your family safe.",
            incorrect:
              "Incorrect. A fire plan helps you stay calm, know where to go, and ensures your safety.",
          },
        },
        {
          questionText:
            "How many steps are involved when making a Fire Safety Plan?",
          choices: ["7", "10", "9", "5"],
          correctAnswer: 2,
          feedback: {
            correct:
              "Correct! There are 9 steps when developing a Fire Safety Plan, including planning your departure and packing smart.",
            incorrect:
              "Incorrect. The correct answer is 9 steps when making a Fire Safety Plan.",
          },
        },
        {
          questionText:
            "Which item is most important to include in an emergency kit during a bushfire?",
          choices: ["Toys", "Health and safety items", "Decorations", "Books"],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! Health and safety items like first aid kits are essential to protect yourself and others during a bushfire emergency.",
            incorrect:
              "Incorrect. Health and safety items are the most important things to include in an emergency kit.",
          },
        },
        {
          questionText: "What is the safest option for surviving a bushfire?",
          choices: [
            "Going to a well-prepared neighbour’s home",
            "Jumping into a pool",
            "Leaving the risk area early",
            "Moving to a safety bunker near your house",
          ],
          correctAnswer: 2,
          feedback: {
            correct:
              "Correct! Leaving the risk area early is always the safest option when fire danger is catastrophic.",
            incorrect:
              "Incorrect. The safest option is to leave the high-risk area early.",
          },
        },
        {
          questionText:
            "Who should you call if there is a fire near your house?",
          choices: ["911", "000", "You shouldn’t call anyone", "Your friends"],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! In Australia, 000 is the emergency number to call for police, fire, or ambulances.",
            incorrect:
              "Incorrect. The correct emergency number in Australia is 000.",
          },
        },
      ],
    },
    {
      title: "Quiz for Recovery Section",
      description:
        "Learn about recovery efforts after a bushfire and the role of communities and nature in the recovery process.",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/recovery.jpeg",
      questions: [
        {
          questionText: "What is trauma?",
          choices: [
            "Something happy",
            "A normal event",
            "Stress or sadness caused by something very scary or upsetting",
            "Something that doesn't affect people",
          ],
          correctAnswer: 2,
          feedback: {
            correct:
              "Correct! Trauma occurs after something like a bushfire and can cause feelings of stress, sadness, or fear.",
            incorrect:
              "Incorrect. Trauma refers to stress or sadness caused by something very scary or upsetting.",
          },
        },
        {
          questionText:
            "What activities can help someone recover from trauma after a bushfire?",
          choices: [
            "Drawing and talking about the experience",
            "Keeping everything bottled up",
            "Ignoring how you feel",
            "Watching TV and forgetting about it",
          ],
          correctAnswer: 0,
          feedback: {
            correct:
              "Correct! Drawing, talking, and expressing your feelings can help someone recover from trauma.",
            incorrect:
              "Incorrect. The best way to recover from trauma is to express feelings, like drawing or talking about the experience.",
          },
        },
        {
          questionText:
            "What does the recovery process after a bushfire involve?",
          choices: [
            "Just rebuilding houses",
            "Both restoring the environment and rebuilding communities",
            "Ignoring the environment and focusing on new construction",
            "Moving everyone out of the area",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! Recovery involves both helping the environment heal and supporting communities to rebuild.",
            incorrect:
              "Incorrect. Recovery involves restoring both the environment and rebuilding communities, not just focusing on construction.",
          },
        },
        {
          questionText:
            "What does the video about Martins Creek focus on in the recovery process?",
          choices: [
            "Fixing fences",
            "Planting flowers",
            "Removing dangerous trees and fixing roads",
            "Playing games with kids",
          ],
          correctAnswer: 2,
          feedback: {
            correct:
              "Correct! The recovery at Martins Creek involved removing dangerous trees and fixing roads to make the area safe again.",
            incorrect:
              "Incorrect. The correct answer is 'Removing dangerous trees and fixing roads'.",
          },
        },
        {
          questionText:
            "What role do bulldozers and graders play in bushfire recovery?",
          choices: [
            "They help fight the fires",
            "They are used to create firebreaks and restore access to roads",
            "They plant trees after the fire",
            "They are used to rescue animals",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! Bulldozers and graders are used during recovery to create firebreaks and restore access to damaged roads.",
            incorrect:
              "Incorrect. Bulldozers and graders are used to create firebreaks and restore road access, not to fight fires or plant trees.",
          },
        },
        {
          questionText:
            "What role do Traditional Owners play in bushfire recovery?",
          choices: [
            "They have no role",
            "They help protect cultural heritage sites during recovery",
            "They clear away all vegetation",
            "They stop the recovery process",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! Traditional Owners are involved in bushfire recovery to help protect and restore cultural heritage sites.",
            incorrect:
              "Incorrect. Traditional Owners play a key role in bushfire recovery, especially in protecting cultural heritage sites.",
          },
        },
        {
          questionText:
            "What happened to the East Gippsland rainforest after the bushfire?",
          choices: [
            "It completely disappeared",
            "It started to recover, with native trees resprouting",
            "It was replaced by grasslands",
            "No recovery has occurred",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! The East Gippsland rainforest began to recover after the bushfire, with native trees like canookas resprouting.",
            incorrect:
              "Incorrect. The correct answer is 'It started to recover, with native trees resprouting'.",
          },
        },
        {
          questionText:
            "What did the recovery efforts in East Gippsland focus on?",
          choices: [
            "Resprouting native trees and improving water quality",
            "Building new houses",
            "Clearing away all vegetation",
            "Creating new tourist attractions",
          ],
          correctAnswer: 0,
          feedback: {
            correct:
              "Correct! Recovery in East Gippsland focused on resprouting trees and improving water quality.",
            incorrect:
              "Incorrect. The recovery efforts focused on environmental restoration, not construction or tourism.",
          },
        },
        {
          questionText:
            "How did a Black Saturday survivor cope after losing her home and family?",
          choices: [
            "She ignored her feelings",
            "She found comfort by connecting with others who experienced loss",
            "She moved to another country",
            "She kept it all to herself",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! The survivor found healing by connecting with others who had experienced similar losses.",
            incorrect:
              "Incorrect. The survivor found comfort by connecting with others who had experienced loss, not by ignoring her feelings or moving away.",
          },
        },
        {
          questionText:
            "What is one important goal in bushfire recovery efforts?",
          choices: [
            "Replacing nature with buildings",
            "Restoring access to tourist areas to support local communities",
            "Stopping people from returning to the area",
            "Ignoring the environment and focusing on rebuilding homes",
          ],
          correctAnswer: 1,
          feedback: {
            correct:
              "Correct! Restoring access to tourist areas helps local communities recover economically after a bushfire.",
            incorrect:
              "Incorrect. The goal is to restore both the environment and support the local community by restoring access to tourist areas.",
          },
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
