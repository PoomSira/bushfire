import React from "react";
import Image from "next/image";

const BushfireStoryCockatoo = () => {
  const storyPanels = [
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image1.jpg",
      text: "Title: The Rainbow After the Storm",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image2.jpg",
      text: "In a small town called Cockatoo, there was a terrible bushfire that left everything burnt and blackened.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image3.jpg",
      text: "Daisy and Bobby were very sad and scared after the fire.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image4.jpg",
      text: "Their teacher, Ms. McLeod, decided to help them express their feelings by drawing.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image5.jpg",
      text: "For days, the children drew pictures of the fire, trying to get all their sadness and fear out of their minds.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image6.jpg",
      text: "But one day, Ms. McLeod asked them to try something different. She encouraged the children to draw something bright and happy instead.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image7.jpg",
      text: "To her surprise, every child drew the same thing—a rainbow.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image8.jpg",
      text: "This rainbow symbolized hope and happiness, showing that even after something as scary as a bushfire, there is always a way to feel better.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image9.jpg",
      text: "The experience that Daisy, Bobby, and the children of Cockatoo went through is called trauma.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image10.jpg",
      text: "Trauma happens when something really scary or upsetting occurs, like a bushfire. It can make you feel stressed, sad, or even confused.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image11.jpg",
      text: "But it’s important to know that everyone experiences trauma differently, and there are ways to feel better over time.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image12.jpg",
      text: "Activities like drawing, talking, writing about your experience can help you recover.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image13.jpg",
      text: "After doing these activities, think about how you feel. It’s okay to have mixed emotions after something as big as a bushfire.",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/Image14.jpg",
      text: "And just like Daisy, Bobby, and the children in Cockatoo, you too can find ways to see the rainbow after the storm!",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {storyPanels.map((panel, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full h-96 mb-2">
              <Image
                src={panel.image}
                alt={`Story panel ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="bg-orange-200 rounded-xl p-4 flex-grow">
              <p className="text-xl text-black">{panel.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BushfireStoryCockatoo;
