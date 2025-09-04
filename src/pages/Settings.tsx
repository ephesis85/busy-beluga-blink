"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes"; // Import useTheme

const Settings = () => {
  const { theme, setTheme } = useTheme();

  const handleDarkModeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Settings</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <Switch
                id="dark-mode"
                checked={theme === "dark"}
                onCheckedChange={handleDarkModeToggle}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Enable Notifications</Label>
              <Switch id="notifications" defaultChecked />
            </div>
            <Separator />
            <Button variant="destructive" className="w-full">Logout</Button>
          </CardContent>
        </Card>
      </div>
      <MadeWithDyad />
    </MainLayout>
  );
};

export default Settings;