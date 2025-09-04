"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">User Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid w-full gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="shadcn" readOnly />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="shadcn@example.com" type="email" readOnly />
              </div>
              <Button className="w-full">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <MadeWithDyad />
    </MainLayout>
  );
};

export default Profile;