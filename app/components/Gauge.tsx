import React, { useState } from "react";
import Image from "next/image";

const Gauge: React.FC = () => {
  // State to track the current image and content
  const [currentImage, setCurrentImage] = useState("/fdr-no-rating.svg");
  const [currentText, setCurrentText] = useState<
    "no-rating" | "moderate" | "high" | "extreme" | "catastrophic"
  >("no-rating");
  const [expanded, setExpanded] = useState<string | null>(null); // For accordion

  // Text for each danger level
  const texts = {
    "no-rating": {
      title: "No Rating",
      content: [
        {
          question:
            "On days when there is minimal risk, the Fire Danger Rating will be set to ‘no rating’.",
          answer:
            "Bushfires which start in these conditions are unlikely to spread in a dangerous or life-threatening way, but you will still need to remain alert and abide by local seasonal laws and regulations.",
        },
      ],
    },
    moderate: {
      title: "Moderate",
      content: [
        {
          question: "What does it mean?",
          answer: "Most fires can be controlled.",
        },
        {
          question: "What should I do?",
          answer:
            "Plan and prepare. Stay up to date and be ready to act if there is a fire.",
        },
      ],
    },
    high: {
      title: "High",
      content: [
        {
          question: "What does it mean?",
          answer: "Fires can be dangerous.",
        },
        {
          question: "What should I do?",
          answer:
            "Be ready to act. There’s a heightened risk. Be alert for fires in your area.",
        },
      ],
    },
    extreme: {
      title: "Extreme",
      content: [
        {
          question: "What does it mean?",
          answer:
            "Fires will spread quickly and be extremely dangerous. These are dangerous fire conditions.",
        },
        {
          question: "What should I do?",
          answer:
            "Take action now to protect your life and property. Check your bushfire plan and ensure that your property is fire ready.",
        },
      ],
    },
    catastrophic: {
      title: "Catastrophic",
      content: [
        {
          question: "What does it mean?",
          answer:
            "If a fire starts and takes hold, lives are likely to be lost. These are the most dangerous conditions for a fire.",
        },
        {
          question: "What should I do?",
          answer:
            "For your survival, leave bushfire risk areas early in the day.",
        },
      ],
    },
  };

  // Handle button click to update both image and text
  const handleImageChange = (
    imagePath: string,
    textKey: "no-rating" | "moderate" | "high" | "extreme" | "catastrophic"
  ) => {
    setCurrentImage(imagePath);
    setCurrentText(textKey);
  };

  // Toggle accordion for text sections
  const toggleAccordion = (index: number) => {
    setExpanded(expanded === `item-${index}` ? null : `item-${index}`);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-6 rounded-lg w-full">
      {/* Left column - Image and buttons */}
      <div className="flex flex-col items-center justify-center bg-[#FFFBF2] p-6 rounded-md">
        {/* Display the current image */}
        <Image
          src={currentImage}
          alt="Gauge image"
          width={400}
          height={400}
          className="object-cover"
        />

        {/* Buttons to change the image */}
        <div className="mt-4 flex space-x-4">
          <button
            className="bg-gray-200 px-4 py-2 rounded"
            onClick={() => handleImageChange("/fdr-no-rating.svg", "no-rating")}
          >
            No Rating
          </button>
          <button
            className="bg-green-200 px-4 py-2 rounded"
            onClick={() => handleImageChange("/fdr-moderate.svg", "moderate")}
          >
            Moderate
          </button>
          <button
            className="bg-yellow-200 px-4 py-2 rounded"
            onClick={() => handleImageChange("/fdr-high.svg", "high")}
          >
            High
          </button>
          <button
            className="bg-orange-200 px-4 py-2 rounded"
            onClick={() => handleImageChange("/fdr-extreme.svg", "extreme")}
          >
            Extreme
          </button>
          <button
            className="bg-red-200 px-4 py-2 rounded"
            onClick={() =>
              handleImageChange("/fdr-catastrophic.svg", "catastrophic")
            }
          >
            Catastrophic
          </button>
        </div>
      </div>

      {/* Right column - Accordion content with fixed width */}
      <div className="flex flex-col items-start bg-[#FFFBF2] p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4">{texts[currentText].title}</h2>

        {/* Accordion */}
        {texts[currentText].content.map((item, index) => (
          <div key={index} className="mb-2 w-full">
            <div
              className="cursor-pointer text-lg font-semibold bg-gray-100 px-4 py-2 rounded w-full flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              {/* Insert the SVG icon for chevron down/up */}
              <span
                className={`transform transition-transform duration-300 ${
                  expanded === `item-${index}` ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
            {/* Show answer only if expanded */}
            {expanded === `item-${index}` && (
              <div
                className="pl-4 mt-1 bg-white px-4 py-2 rounded"
                style={{ width: "100%" }} // Fixed width for the answer as well
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gauge;
