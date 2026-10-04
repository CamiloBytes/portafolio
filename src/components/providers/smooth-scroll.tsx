"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { MotionConfig, cancelFrame, frame } from "motion/react";

type SmoothScrollProps = React.PropsWithChildren;

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        ref={lenisRef}
        options={{
          autoRaf: false,
          lerp: 0.1,
          anchors: { offset: -96 },
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
};
