import React from 'react'
import Logo from "@/components/Logo";

export default function RootLayout({  children}) {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-6 min-h-screen gap-y-24 ">
      <Logo />{children}</div>
  )
}
