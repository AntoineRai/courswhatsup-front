import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeaderMessenger = () => {
  return (
    <div className="px-4 flex flex-row justify-center items-center">
      <Avatar className="mr-4">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="font-bold">Antoine</h2>
    </div>
  );
};

export default HeaderMessenger;
