import React, { useRef, useState } from "react";
import Image from "next/image";

const BushfireStoryCockatoo = () => {
  const storyPanels = [
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image1.jpg",
      text: "Title: The Rainbow After the Storm",
      audio: "/In_the_aftermath_1.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image2.jpg",
      text: "In a small town called Cockatoo, there was a terrible bushfire that left everything burnt and blackened.",
      audio: "/Once_a_vibrant_town_2.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image3.jpg",
      text: "Daisy and Bobby were very sad and scared after the fire.",
      audio: "/Daisy_and_Bobby_couldnt_3.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image4.jpg",
      text: "Their teacher, Ms. McLeod, decided to help them express their feelings by drawing.",
      audio: "/McLeod_noticed_the_sadnes_4.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image5.jpg",
      text: "For days, the children drew pictures of the fire, trying to get all their sadness and fear out of their minds.",
      audio: "/For_several_days_5.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image6.jpg",
      text: "But one day, Ms. McLeod asked them to try something different. She encouraged the children to draw something bright and happy instead.",
      audio: "/After_days_of_drawing_6.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image7.jpg",
      text: "To her surprise, every child drew the same thing—a rainbow.",
      audio: "/What_McLeod_didn-t_expect_7.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image8.jpg",
      text: "This rainbow symbolized hope and happiness, showing that even after something as scary as a bushfire, there is always a way to feel better.",
      audio: "/For_the_children_8.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image9.jpg",
      text: "The experience that Daisy, Bobby, and the children of Cockatoo went through is called trauma.",
      audio: "/Daisy_Bobby_and_their_9.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image10.jpg",
      text: "Trauma happens when something really scary or upsetting occurs, like a bushfire. It can make you feel stressed, sad, or even confused.",
      audio: "/Trauma_can_affect_people_10.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image11.jpg",
      text: "But it’s important to know that everyone experiences trauma differently, and there are ways to feel better over time.",
      audio: "/Not_everyone_reacts_11.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image12.jpg",
      text: "Activities like drawing, talking, writing about your experience can help you recover.",
      audio: "/Finding_ways_to_express_12.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image13.jpg",
      text: "After doing these activities, think about how you feel. It’s okay to have mixed emotions after something as big as a bushfire.",
      audio: "/After_spent_time_13.wav",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image14.jpg",
      text: "And just like Daisy, Bobby, and the children in Cockatoo, you too can find ways to see the rainbow after the storm!",
      audio: "/Remember_just_like_Daisy_14.wav",
    },
  ];

  // Refs for all audio elements
  const audioRefs = useRef<(HTMLAudioElement | null)[]>(
    Array(storyPanels.length).fill(null)
  );

  // State to track the currently playing audio index
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleAudioToggle = (index: number) => {
    const currentAudioRef = audioRefs.current[index];

    if (currentAudioRef) {
      // Pause currently playing audio if it's different
      if (playingIndex !== null && playingIndex !== index) {
        const previousAudioRef = audioRefs.current[playingIndex];
        if (previousAudioRef) {
          previousAudioRef.pause();
          previousAudioRef.currentTime = 0; // Reset previous audio to start
        }
      }

      if (playingIndex === index) {
        currentAudioRef.pause();
        setPlayingIndex(null); // Reset playing index if the same audio is clicked
      } else {
        currentAudioRef.play();
        setPlayingIndex(index); // Update to the currently playing audio index
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {storyPanels.map((panel, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="relative w-full h-96 mb-2 shadow-lg rounded-xl overflow-hidden group">
                {/* Image with zoom-in effect on hover */}
                <Image
                  src={panel.image}
                  alt={`Story panel ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl transition-transform duration-500 ease-in-out transform group-hover:scale-110 cursor-pointer"
                />
                {/* Audio element */}
                <audio
                  ref={(el) => {
                    audioRefs.current[index] = el;
                  }}
                  src={panel.audio}
                />
                {/* Voice toggle icon */}
                <button
                  className="absolute top-2 right-2 bg-white rounded-full shadow-xl z-10"
                  onClick={() => handleAudioToggle(index)}
                >
                  <Image
                    src={playingIndex === index ? "/speaker.png" : "/mute.png"}
                    alt={playingIndex === index ? "Pause" : "Play"}
                    width={24} // Adjust the size as needed
                    height={24} // Adjust the size as needed
                  />
                </button>
              </div>
              {/* Orange text card */}
              <div className="bg-orange-200 rounded-xl shadow-lg p-4 flex-grow">
                <p className="text-xl text-black">{panel.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BushfireStoryCockatoo;
