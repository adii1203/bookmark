import { Heart, LayoutDashboard, TagIcon } from "lucide-react";

export const NAVBAR_ITEMS = [
  {
    lable: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    lable: "Tags",
    icon: TagIcon,
    path: "/tags",
  },
  {
    lable: "Favorites",
    icon: Heart,
    path: "/favorites",
  },
];
