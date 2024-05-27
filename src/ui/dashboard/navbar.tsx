"use client";
import { cn } from "@/lib/utils";
import {
  BookmarkIcon,
  Heart,
  LayoutDashboard,
  Menu,
  SettingsIcon,
  TagIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState<string>("favrites");

  return (
    <div className="hidden md:block border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex max-h-screen flex-col gap-2 sticky top-0 h-screen w-60">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link href={"#"} className="flex items-center gap-2 font-semibold">
            <BookmarkIcon className="h-6 w-6" />
            <span className="">Bookmarks</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                active === "dashboard" &&
                  "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50"
              )}
              href="dashboard">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                active === "tags" &&
                  "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50"
              )}
              href="tags">
              <TagIcon className="h-4 w-4" />
              Tags
            </Link>
            <Link
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                active === "favorites" &&
                  "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50"
              )}
              href="favorites">
              <Heart className="h-4 w-4" />
              Favorites
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
