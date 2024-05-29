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
import { User, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";

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
            {jwt.decode(localStorage.getItem("accessToken"))?.mail}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mon profil</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDisconnect}>
          <Trash2 className="pr-2" />
            Se déconnecter
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
  return localStorage.getItem("accessToken") !== null;
};

const handleDisconnect = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login";
};

export default HeaderProfile;
