import React from "react";
import SignUp from "@/components/auth/signup";
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
        <CardHeader className="font-bold">Créez votre compte ! 🔥</CardHeader>
        <CardDescription className="pl-6 pb-4">
          Rejoignez le monde entier !
        </CardDescription>
        <CardContent className="flex flex-col items-center justify-center">
          <SignUp />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
