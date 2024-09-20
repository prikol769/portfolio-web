import ParticlesComponent from "./Particles";
import GlassCard from "./GlassCard";
import Avatar from "../app/assets/avatar.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <ParticlesComponent />
      <div className="h-screen max-w-[1500px] mx-auto flex justify-between items-center">
        <GlassCard />
        <Image src={Avatar} alt="avatar" width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;
