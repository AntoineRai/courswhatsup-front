import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const ContentMessenger = () => {
  const messages = [
    {
      id: 1,
      content: "Salut",
      sender: "Manon Kawalko",
    },
    {
      id: 2,
      content: "Salut",
      reciever: "Jane Doe",
    },
    {
      id: 3,
      content: "Salut",
      reciever: "Jane Doe",
    },
    {
      id: 4,
      content: "Salut",
      reciever: "Jane Doe",
    },
    {
      id: 5,
      content: "Salut",
      reciever: "Jane Doe",
    },
    {
      id: 6,
      content: "Salut",
      reciever: "Jane Doe",
    },
  ];

  return (
    <div className="h-full w-full overflow-hidden">
      <ScrollArea className="h-full w-full flex flex-col gap-4">
        {messages.map((message) =>
          message.sender ? SenderMessage(message) : RecieverMessage(message)
        )}
      </ScrollArea>
    </div>
  );
};

const RecieverMessage = (message: any) => {
  return (
    <div className="w-full flex flex-row-reverse">
      <div
        key={message.id}
        className="p-4 w-1/2 flex flex-row-reverse items-center border-2 rounded-xl gap-4 m-4"
      >
        <div>
          <p className="text-sm italic">{message.reciever}</p>
        </div>
        <p>{message.content}</p>
      </div>
    </div>
  );
};

const SenderMessage = (message: any) => {
  return (
    <div className="w-full flex flex-row">
      <div
        key={message.id}
        className="p-4 w-1/2 flex flex-row items-center border-2 rounded-xl gap-4 m-4"
      >
        <div>
          <p className="text-sm italic">{message.sender}</p>
        </div>
        <p>{message.content}</p>
      </div>
    </div>
  );
};

export default ContentMessenger;
