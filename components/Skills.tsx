"use client";

import TagCloud from "@frank-mayer/react-tag-cloud";

const Skills = () => {
  return (
    <div className="px-12 lg:px-6 max-w-[1596px] mx-auto mt-[60px]">
      <h3 className="text-2xl font-semibold">About Me</h3>
      <div className="w-[600px] ">
        <div className="h-[600px]">
          <TagCloud
            options={(w: Window & typeof globalThis) => ({
              radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
              maxSpeed: "normal",
              keep: false,
              useHTML: true,
            })}
            onClick={(tag: string) => alert(tag)}
            onClickOptions={{ passive: true }}
          >
            {[
              `<img src="/javascript.svg" width="48" height="48" />`,
              `<img src="/typescript.svg" width="48" height="48" />`,
              `<img src="/react.svg" width="48" height="48" />`,
              `<img src="/redux.svg" width="48" height="48" />`,
              `<img src="/nextjs.svg" width="48" height="48" />`,
              `<img src="/nodejs.svg" width="58" height="58" />`,
              `<img src="/express.svg" width="58" height="58" />`,
              `<img src="/tailwindcss.svg" width="48" height="48" />`,
              `<img src="/sass.svg" width="48" height="48" />`,
              `<img src="/material-ui.svg" width="48" height="48"/>`,
              `<img src="/css-3.svg" width="48" height="48" />`,
              `<img src="/git.svg" width="48" height="48" />`,
              `<img src="/html-5.svg" width="48" height="48" />`,
              `<img src="/mysql.svg" width="48" height="48" />`,
              `<img src="/java.svg" width="48" height="48" />`,
              `<img src="/mongodb.svg" width="88" height="88" />`,
              `<img src="/graphql.svg" width="48" height="48" />`,
            ]}
          </TagCloud>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat
          ligula sit amet eleifend gravida. Phasellus sed quam vehicula felis
          pellentesque hendrerit. amet eleifend gravida. Phasellus sed quam
          vehicula felis. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam
        </p>
      </div>
    </div>
  );
};

export default Skills;
