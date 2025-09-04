"use client";

import React from "react";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Music } from "lucide-react"; // Import Music icon
import { Link } from "react-router-dom"; // Import Link

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col w-64 p-0">
              <Sidebar className="flex-1" />
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-semibold">Music App</h1>
        </header>
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Music className="h-6 w-6" />
              <span className="">Music App</span>
            </Link>
          </div>
          <div className="flex-1">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;