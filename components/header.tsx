import React from "react";
import { ModeToggle } from "@/components/dark/dark-mode";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Pen } from "lucide-react";

const Header = () => {
  const isLogged = isLoggedIn();

  return (
    <header className="w-full flex flex-row justify-between items-center p-4 mb-4">
      <Link href="/">
        <h1 className="font-bold text-xl">Whatsup!</h1>
      </Link>
      <div className="flex flex-row items-center justify-center gap-6">
        {isLogged ? isConnected() : isNotConnected()}
        <ModeToggle />
      </div>
    </header>
  );
};

const isConnected = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex flex-row items-center justify-center gap-2">
          <User /> 
        Antoine
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mon profil</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Pen className="pr-2"/>Editer mon profil</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

const isNotConnected = () => {
  return (
    <>
      <Link href="/login">
        <Button>Se connecter</Button>
      </Link>
      <Link href="/signup">
        <Button variant="secondary">Se créer un compte</Button>
      </Link>
    </>
  );
};

const isLoggedIn = () => {
  return true;
};

export default Header;
