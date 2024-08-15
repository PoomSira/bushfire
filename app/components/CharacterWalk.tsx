"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Import your images
import walkdown1 from "@/public/walking/walkdown-1.png";
import walkdown2 from "@/public/walking/walkdown-2.png";
import walkdown3 from "@/public/walking/walkdown-3.png";
import walkdown4 from "@/public/walking/walkdown-4.png";
import walkdown5 from "@/public/walking/walkdown-5.png";
import walkdown6 from "@/public/walking/walkdown-6.png";
import walkdown7 from "@/public/walking/walkdown-7.png";
import walkdown8 from "@/public/walking/walkdown-8.png";
import walkdown9 from "@/public/walking/walkdown-9.png";

const images = [
  walkdown1,
  walkdown2,
  walkdown3,
  walkdown4,
  walkdown5,
  walkdown6,
  walkdown7,
  walkdown8,
  walkdown9,
];

const CharacterWalk: React.FC = () => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 2) % images.length);
    }, 100); // Adjust the interval time to control the speed of the animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Image
        src={images[currentFrame]}
        alt="Character walking"
        width={64}
        height={128}
      />
    </div>
  );
};

export default CharacterWalk;
