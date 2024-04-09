import React from "react";
import SignIn from "@/components/auth/signin";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Card className="w-1/3">
        <CardHeader className="font-bold">Identifiez vous ! 🔥</CardHeader>
        <CardDescription className="pl-6 pb-4">
          Connectez-vous au monde entier !
        </CardDescription>
        <CardContent className="flex flex-col items-center justify-center">
          <SignIn />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
