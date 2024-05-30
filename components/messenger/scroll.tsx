"use client"

import React, {useState, useEffect} from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { CSR } from "@/config/CSR";

const Scroll = ({setSelectedUser} : {setSelectedUser : any}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get(`${CSR}/messages/recent-conversations`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          'acces-token': localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data)
        setContacts(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <ScrollArea className="h-full w-full">
      <div>
        {contacts.map((contact : any) => (
            <div key={contact.id} className="px-4 flex flex-row my-3" onClick={() => setSelectedUser(contact)}>
              <Avatar className="mr-4">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-ellipsis overflow-hidden">
                <p className="text-md">{contact.name}</p>
                <p className="text-sm">{contact.surname}</p>
              </div>
            </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Scroll;
