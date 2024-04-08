import React from "react";
import { ModeToggle } from "@/components/dark/dark-mode";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-4 mb-4">
      <Link href="/">
        <h1 className="font-bold text-xl">Whatsup!</h1>
      </Link>
      <ModeToggle />
    </header>
  );
};

export default Header;
