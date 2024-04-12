"use client";

import React from "react";
import { ModeToggle } from "@/components/dark/dark-mode";
import Link from "next/link";
import HeaderProfile from "./header_profile";


const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center p-4">
      <Link href="/">
        <h1 className="font-bold text-xl">Whatsup!</h1>
      </Link>
      <div className="flex flex-row items-center justify-center gap-6">
        <HeaderProfile />
        <ModeToggle />
      </div>
    </header>
  );
};


export default Header;
