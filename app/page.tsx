"use client"

import HeaderMessenger from "@/components/messenger/header_messenger";
import Scroll from "@/components/messenger/scroll";
import ContentMessenger from "@/components/messenger/content_messenger";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useAuth from "@/hook/useAuth";
import { useState } from "react";

export default function Home() {
  const user = useAuth();

  const [selectedUser, setSelectedUser] = useState(null);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-[90%] h-[90%] border-4 rounded-xl flex flex-row">
        <div className="h-full w-1/4 overflow-hidden">
          <div className="h-[10%] border-r-4">
            <h2 className="font-bold text-xl p-4">Mes contacts</h2>
          </div>
          <div className="h-[90%] border-r-4">
            <Scroll setSelectedUser={setSelectedUser}/>
          </div>
        </div>
        <div className="h-full w-3/4 overflow-hidden">
          <div className="h-[10%] border-b-2 flex flex-col justify-center px-4">
            <HeaderMessenger selectedUser={selectedUser}/>
          </div>
          <div className="h-[80%]">
            <ContentMessenger selectedUser={selectedUser}/>
          </div>
          <div className="h-[10%] border-t-2 flex flex-row justify-center items-center gap-4">
            <Input placeholder="Message" className="w-[80%]" />
            <Button variant="default">Envoyer</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
