import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Scroll = () => {
  const contacts = [
    { id: 1, name: "John Doe", email: "mail@example.com" },
    { id: 2, name: "Jane Doe", email: "mail@example.fr" },
    { id: 3, name: "Alice Smith", email: "alice@example.com" },
    { id: 4, name: "Bob Johnson", email: "bob@example.com" },
    { id: 5, name: "Emily Brown", email: "emily@example.com" },
    { id: 6, name: "David Wilson", email: "david@example.com" },
    { id: 7, name: "Sarah Taylor", email: "sarah@example.com" },
    { id: 8, name: "Michael Anderson", email: "michael@example.com" },
    { id: 9, name: "Emma Martinez", email: "emma@example.com" },
    { id: 10, name: "Christopher Garcia", email: "christopher@example.com" },
    { id: 11, name: "Olivia Lopez", email: "olivia@example.com" },
    { id: 12, name: "Daniel Perez", email: "daniel@example.com" },
    { id: 13, name: "Ava Gonzalez", email: "ava@example.com" },
    { id: 14, name: "Matthew Rodriguez", email: "matthew@example.com" },
    { id: 15, name: "Sophia Hernandez", email: "sophia@example.com" },
  ];

  return (
    <ScrollArea className="h-full w-full">
      <div>
        {contacts.map((contact) => (
          <>
            <div key={contact.id} className="px-4 flex flex-row">
              <Avatar className="mr-4">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-ellipsis overflow-hidden">
                <p className="text-md">{contact.name}</p>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Scroll;
