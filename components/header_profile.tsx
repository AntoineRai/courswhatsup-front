"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Pen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeaderProfile = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-6">
      {isLoggedIn() ? isConnected() : isNotConnected()}
    </div>
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
          <DropdownMenuItem>
            <Pen className="pr-2" />
            Editer mon profil
          </DropdownMenuItem>
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

const isLoggedIn = (): boolean => {
  return localStorage.getItem("theme") !== null;
};

export default HeaderProfile;
