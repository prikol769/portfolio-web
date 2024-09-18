"use client";

import TagCloud from "@frank-mayer/react-tag-cloud";

const Skills = () => {
  return (
    <div className="h-[500px]">
      <TagCloud
        options={(w: Window & typeof globalThis) => ({
          radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "normal",
          keep: false,
        })}
        onClick={(tag: string) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          "VSCode",
          "TypeScript",
          "React",
          "Preact",
          "Parcel",
          "Jest",
          "Next",
          "ESLint",
          "Framer Motion",
          "Three.js",
        ]}
      </TagCloud>
    </div>
  );
};

export default Skills;
