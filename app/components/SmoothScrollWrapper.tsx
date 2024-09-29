import React, { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

export const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
}) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};
