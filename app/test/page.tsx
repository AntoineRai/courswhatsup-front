"use client"

import React from "react";
import useAuth from "@/hook/useAuth";

const Page = () => {
  const user = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div>Page</div>;
};

export default Page;
