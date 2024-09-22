import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Humburger_Menu from "../app/assets/humburger_menu.svg";
import Image from "next/image";
import Link from "next/link";
import Logo from "../app/assets/Logo.svg";
import { Button } from "./ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src={Humburger_Menu}
          alt="close"
          width={30}
          height={30}
          className="h-10 w-10 min-w-10 p-2"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="h-screen  bg-white"
        aria-describedby="menu"
      >
        <SheetHeader>
          <SheetClose asChild>
            <Link href="/">
              <Image src={Logo} alt="logo" width={53} height={39} />
            </Link>
          </SheetClose>
        </SheetHeader>
        <VisuallyHidden>
          <DialogTitle>Mobile Menu</DialogTitle>
          <SheetDescription>Mobile Menu</SheetDescription>
        </VisuallyHidden>
        <div className="flex flex-col text-center my-auto h-[calc(100%-40px)] justify-between">
          <div className="flex flex-col gap-7 font-semibold text-black text-2xl w-full my-auto">
            <SheetClose asChild>
              <Link href="/">HOME</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/">ABOUT ME</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/">EXPERIENCE</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/">WORK</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/">CONTACT</Link>
            </SheetClose>
          </div>
          <div className="mt-[44px] mb-6 flex flex-wrap gap-4 w-full">
            <SheetClose asChild>
              <Button className="w-full" size="lg">
                Hire Me
              </Button>
            </SheetClose>
            <Button className="w-full" size="lg" variant="outline">
              <a
                download="Mykyta_Krumalenko_Full-Stak_Developer"
                href="/Mykyta_Krumalenko_Full-Stak_Developer.pdf"
              >
                Get CV
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
