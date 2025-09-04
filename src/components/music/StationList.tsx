"use client";

import React from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StationListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const mockStations = [
  { id: "1", name: "Chill Vibes", description: "Relaxing tunes for a calm mood." },
  { id: "2", name: "Workout Mix", description: "High energy tracks to get you moving." },
  { id: "3", name: "Focus Flow", description: "Instrumental beats for concentration." },
  { id: "4", name: "Morning Coffee", description: "Acoustic and indie for your morning routine." },
  { id: "5", name: "Late Night Jazz", description: "Smooth jazz for unwinding." },
];

const StationList = ({ className }: StationListProps) => {
  const handleSelectStation = (stationId: string) => {
    console.log(`Selected station: ${stationId}`);
    // In a real app, this would load the station's music
  };

  const handleCreateStation = () => {
    console.log("Create new station");
    // In a real app, this would open a dialog to create a new station
  };

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Your Stations</CardTitle>
        <Button variant="outline" size="sm" onClick={handleCreateStation}>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Station
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="grid gap-4">
            {mockStations.map((station) => (
              <div
                key={station.id}
                className="flex items-center justify-between rounded-md border p-4 hover:bg-muted cursor-pointer"
                onClick={() => handleSelectStation(station.id)}
              >
                <div>
                  <p className="font-medium">{station.name}</p>
                  <p className="text-sm text-muted-foreground">{station.description}</p>
                </div>
                {/* Add a play button or indicator for active station */}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default StationList;