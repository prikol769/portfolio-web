import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Button } from "./ui/button";

const GlassCard = () => {
  const glassCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 1024) {
      VanillaTilt.init(glassCardRef?.current!, {
        max: 10,
        speed: 200,
        glare: false,
        "max-glare": 1,
      });
    }
  }, []);

  return (
    <div className="glassmorphic-card max-w-[680px]" ref={glassCardRef}>
      <div className="px-6 py-8 z-1 xs:px-4 xs:py-6">
        <p className="text-2xl">Welcome ! I`M</p>
        <h1 className="text-5xl font-semibold mt-1 mb-6 xs:text-4xl">
          Mykyta Krumalenko
        </h1>
        <p className="text-2xl mb-4">Full-Stack Developer</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat
          ligula sit amet eleifend gravida. Phasellus sed quam vehicula felis
          pellentesque hendrerit. amet eleifend gravida. Phasellus sed quam
          vehicula felis.
        </p>
        <div className="flex gap-6 mt-6">
          <Button size="lg">Hire Me</Button>
          <Button size="lg" variant="outline">
            <a
              download="Mykyta_Krumalenko_Full-Stak_Developer"
              href="/Mykyta_Krumalenko_Full-Stak_Developer.pdf"
            >
              Get CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
