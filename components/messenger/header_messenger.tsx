import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeaderMessenger = ({ selectedUser  }) => {
  return (
    <div className="px-4 flex flex-row justify-center items-center">
      {selectedUser ? (
        <>
          <Avatar className="mr-4">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="font-bold">{selectedUser.name}</h2>
        </>
      ) : (
        <h2 className="font-bold">Aucun utilisateur sélectionné</h2>
      )}
    </div>
  );
};

export default HeaderMessenger;
