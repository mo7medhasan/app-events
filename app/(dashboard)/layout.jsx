"use client"
import React from "react";
import Logo from "@/components/Logo";
import { deleteCookies } from "../actions";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router=useRouter()

  const handleLogOut = async() => {
   const check =await deleteCookies()
  if(check) router.replace("/login")

  }
  return (
    <div className="h-full w-full flex flex-col min-h-screen">
      <header className="flex justify-between items-center px-6 md:px-12 py-4 border-b fixed w-full shadow bg-white">
        <Logo />
        <button className="px-12 py-2 text-white bg-red-500 shadow rounded-full font-bold " 
        type="button"
        onClick={handleLogOut}>
          sign out
        </button>
      </header>
      {children}
    </div>
  );
}
