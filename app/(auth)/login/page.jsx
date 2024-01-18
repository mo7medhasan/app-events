"use client";
import { useEventsContext } from "@/context/EventsContext";
import { Input, PasswordInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export default function LogIn() {
  const {LogInUser} =useEventsContext()
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
const router=useRouter()
  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent default form submission

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
   const check =await LogInUser({email, password})
    console.log(email, password);
  if(check) router.replace("/")

  }

  return (
   
      <form
        onSubmit={handleSubmit}
        className="max-w-sm w-full bg-white p-4 md:p-6 rounded-xl border  flex items-center flex-col gap-8 py-8 md:py-12"
      >
        <h1 className="font-bold my-4 text-3xl">Log In</h1>
        <Input
          ref={emailRef}
          radius="xl"
          type="email"
          placeholder="Enter Email"
          className="w-full"
        />
        <PasswordInput
          ref={passwordRef}
          radius="xl"
          minLength={8}
          placeholder="Enter your password"
          className="w-full"
        />
        <button className="px-12 py-2 text-white bg-sky-500 rounded-full font-bold shadow " type="submit">
          submit
        </button>
      </form>
    
  );
}
