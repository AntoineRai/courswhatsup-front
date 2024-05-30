import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import useAuth from "@/hook/useAuth";
import { CSR } from "@/config/CSR";

const ContentMessenger = ({ selectedUser }: { selectedUser: any }) => {
  const [messages, setMessages] = useState([]);
  const user = useAuth();

  useEffect(() => {
    if (!selectedUser) return;

    console.log(selectedUser)

    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${CSR}/messages/conversation/${selectedUser.conversation_partner}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "acces-token": localStorage.getItem("accessToken"),
          },
        });
        console.log(response.data)
        setMessages(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des messages:", error);
      }
    };

    fetchMessages();
  }, [selectedUser]);

  return (
    <div className="h-full w-full overflow-hidden">
      <ScrollArea className="h-full w-full flex flex-col gap-4">
        {messages.map((message : any) =>
          message.sender === user
            ? RecieverMessage(message)
            : SenderMessage(message)
        )}
      </ScrollArea>
    </div>
  );
};

const RecieverMessage = (message :any) => {
  return (
    <div className="w-full flex flex-row-reverse">
      <div
        key={message.id}
        className="p-4 w-1/2 flex flex-row-reverse items-center border-2 rounded-xl gap-4 m-4"
      >
        <div>
          <p className="text-sm italic">{message.sender}</p>
        </div>
        <p>{message.content}</p>
      </div>
    </div>
  );
};

const SenderMessage = (message : any) => {
  return (
    <div key={message.id} className="w-full flex flex-row">
      <div className="p-4 w-1/2 flex flex-row items-center border-2 rounded-xl gap-4 m-4">
        <div>
          <p className="text-sm italic">{message.sender}</p>
        </div>
        <p>{message.content}</p>
      </div>
    </div>
  );
};

export default ContentMessenger;
