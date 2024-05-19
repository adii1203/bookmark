import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "all your bookmarks in one place",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}
