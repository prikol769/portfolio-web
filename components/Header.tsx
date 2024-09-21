"use client";
import Image from "next/image";
import Logo from "../app/assets/Logo.svg";
import Linkedin from "../app/assets/linkedin.svg";
import Github from "../app/assets/github.svg";
import Facebook from "../app/assets/facebook.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const isStickyHandler = () => {
    if (window.scrollY >= 76) {
      setIsSticky(true);
    }
    if (window.scrollY < 76) {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    isStickyHandler();
  });

  useEffect(() => {
    window.addEventListener("scroll", isStickyHandler);
    return () => {
      window.removeEventListener("scroll", isStickyHandler);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full px-12 py-2 ease-out duration-500 flex  ${
        isSticky ? "bg-white h-[60px] shadow-lg" : "h-[76px]"
      }`}
    >
      <div
        className={`w-full flex items-center justify-between max-w-[1500px] mx-auto`}
      >
        <Link href="/">
          <Image src={Logo} alt="logo" width={53} height={39} />
        </Link>
        <nav>
          <ul className="flex font-semibold text-black text-sm">
            <li className="px-4">
              <Link href="/" className="link-animation">
                HOME
              </Link>
            </li>
            <li className="px-4 ">
              <Link href="/" className="link-animation">
                ABOUT ME
              </Link>
            </li>
            <li className="px-4 ">
              <Link href="/" className="link-animation">
                EXPERIENCE
              </Link>
            </li>
            <li className="px-4 ">
              <Link href="/" className="link-animation">
                WORK
              </Link>
            </li>
            <li className="px-4 ">
              <Link href="/" className="link-animation">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3">
          <Link
            href="/"
            className="ease-out duration-500 hover:translate-y-[-3px]"
          >
            <Image src={Linkedin} alt="linkedin" width={30} height={30} />
          </Link>
          <Link
            href="/"
            className="ease-out duration-500 hover:translate-y-[-3px]"
          >
            <Image src={Github} alt="github" width={30} height={30} />
          </Link>
          <Link
            href="/"
            className="ease-out duration-500 hover:translate-y-[-3px]"
          >
            <Image src={Facebook} alt="facebook" width={30} height={30} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
