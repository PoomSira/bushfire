import React, { useState } from "react";
import Image from "next/image";

interface SafetyTip {
  id: number;
  title: string;
  content: string;
}

const safetyTips: SafetyTip[] = [
  {
    id: 1,
    title: "Know the Danger Levels",
    content:
      "Fire Danger Ratings are like a score that tells us how risky it is. Higher numbers mean more danger. Learn what each level means and decide when to act.",
  },
  {
    id: 2,
    title: "Plan Your Departure",
    content:
      "Leaving Early means getting out before a fire starts. Plan whether you'll leave the night before or in the morning to stay safe.",
  },
  {
    id: 3,
    title: "Choose a Safe Place",
    content:
      "Safe Places are where you'll go to be safe, like a family member's house or another safe spot.",
  },
  {
    id: 4,
    title: "Pick Your Route",
    content:
      "Routes are the roads you'll take to get to safety. Know your main way and a backup in case roads are blocked.",
  },
  {
    id: 5,
    title: "Pack Smart",
    content:
      "Packing Essentials means bringing what you need, like clothes, important papers, and an emergency kit.",
  },
  {
    id: 6,
    title: "Care for Your Pets",
    content:
      "Pet Safety means planning how to take your pets with you or making sure they're safe if you can't take them.",
  },
  {
    id: 7,
    title: "Tell Others & Check on Them",
    content:
      "Informing Others is letting neighbors or family know your plans, so they know where you are and can help if needed. Helping Others means making sure elderly relatives, friends, or anyone who might need extra help is safe.",
  },
  {
    id: 8,
    title: "Stay Updated",
    content:
      "Getting Updates means knowing how to find out the latest news, like using a radio or phone alerts.",
  },
  {
    id: 9,
    title: "Can't Leave? Find a Safe Space",
    content:
      "Emergency Plans mean knowing what to do if you can't leave, like finding a safe place inside your home.",
  },
];

const FireSafetyBasics: React.FC = () => {
  const [selectedTip, setSelectedTip] = useState<SafetyTip | null>(null);

  return (
    <div className="relative w-auto mx-auto bg-orange-500 p-8 rounded-lg">
      <h1 className="text-4xl font-bold text-center text-white mb-4">
        Fire Safety Basics
      </h1>
      <p className="text-white mb-6">
        Click Each Circle so Mr. Joey, the Kangaroo Bushfire Fighter, will
        explain to you!
      </p>

      <div className="grid grid-cols-3 gap-4">
        {safetyTips.map((tip) => (
          <button
            key={tip.id}
            className="w-40 h-40 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-800 transition-colors"
            onClick={() => setSelectedTip(tip)}
          >
            {tip.id}
          </button>
        ))}
      </div>

      {/* Kangaroo and Fire Truck Images
      <Image
        src="/kangaroo.png"
        alt="Kangaroo"
        width={100}
        height={100}
        className="absolute top-4 right-4"
      />
      <Image
        src="/fire-truck.png"
        alt="Fire Truck"
        width={100}
        height={50}
        className="absolute bottom-4 left-4"
      />
      <Image
        src="/koala.png"
        alt="Koala"
        width={80}
        height={80}
        className="absolute bottom-4 left-32"
      /> */}

      {/* Popup */}
      {selectedTip && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-2xl text-black font-bold mb-4">
              {selectedTip.title}
            </h2>
            <p className="text-black">{selectedTip.content}</p>
            <button
              className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
              onClick={() => setSelectedTip(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FireSafetyBasics;
