"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Home, Music, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const navItems = [
    {
      name: "Stations",
      icon: Music,
      href: "/",
    },
    {
      name: "Profile",
      icon: User,
      href: "/profile", // Placeholder route
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/settings", // Placeholder route
    },
  ];

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start"
                asChild
              >
                <Link to={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;