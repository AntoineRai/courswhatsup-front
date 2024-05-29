"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CSR } from "@/config/CSR";

const formSchema = z.object({
  emailAdress: z.string().email({ message: "Email invalide" }),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
});

const SignIn = () => {

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAdress: "",
      password: "",
    },
  });

  const handleSubmit = () => {
    axios.post(`${CSR}/login/`, {
      mail: form.getValues().emailAdress,
      password: form.getValues().password,
    })
    .then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      router.push("/");
    })
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="max-w-md w-full flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="emailAdress"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Adresse Mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="mail@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mot de passe"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full">
          Se connecter
        </Button>
      </form>
    </Form>
  );
};

export default SignIn;
