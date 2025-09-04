"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import MainLayout from "@/components/layout/MainLayout";
import MusicPlayer from "@/components/music/MusicPlayer";
import StationList from "@/components/music/StationList";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const Index = () => {
  const [playLocalOnly, setPlayLocalOnly] = useState(false);

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        <div className="lg:w-1/2 flex flex-col items-center justify-center p-4">
          <MusicPlayer className="w-full max-w-md" />
          <div className="flex items-center space-x-2 mt-4">
            <Switch
              id="local-only-mode"
              checked={playLocalOnly}
              onCheckedChange={setPlayLocalOnly}
            />
            <Label htmlFor="local-only-mode">Play local music only</Label>
          </div>
        </div>
        <Separator orientation="vertical" className="hidden lg:block" />
        <Separator orientation="horizontal" className="lg:hidden" />
        <div className="lg:w-1/2 p-4">
          <StationList className="h-full" />
        </div>
      </div>
      <MadeWithDyad />
    </MainLayout>
  );
};

export default Index;