import React, { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

export const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
}) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export const MotionH1 = motion.h1;
export const MotionDiv = motion.div;
