import ParticlesComponent from "./Particles";
import GlassCard from "./GlassCard";
import Avatar from "../app/assets/avatar.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <ParticlesComponent />
      <div className="h-screen w-full max-w-[1596px] mx-auto flex gap-10 justify-between items-center px-12 lg:px-6 lg:flex-col lg:pt-[100px] lg:justify-around ">
        <GlassCard />
        <Image
          className="min-w-[600px] xl:min-w-[500px] lg:min-w-fit"
          src={Avatar}
          alt="avatar"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;
