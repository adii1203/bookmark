import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/ui/dashboard/navbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "all your bookmarks in one place",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="flex">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
