import React from "react";
import { ModeToggle } from "@/components/dark/dark-mode";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center p-4 mb-4">
      <Link href="/">
        <h1 className="font-bold text-xl">Whatsup!</h1>
      </Link>
      <div className="flex flex-row items-center justify-center gap-4">
      <Link href="/login">
          <Button>Se connecter</Button>
        </Link>
        <Link href="/signup">
          <Button variant="secondary">Se créer un compte</Button>
        </Link>
      <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
