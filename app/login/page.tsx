import React from "react";
import SignIn from "@/components/auth/signin";

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4">
      <SignIn />
    </div>
  );
};

export default Page;
