"use client";

import React, { useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Heart, ThumbsDown, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface MusicPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const MusicPlayer = ({ className }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [progress, setProgress] = useState([30]); // Mock progress
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const currentSong = {
    title: "Mock Song Title",
    artist: "Mock Artist",
    albumArt: "https://via.placeholder.com/150", // Placeholder image
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false); // Cannot like and dislike at the same time
    // In a real app, this would send feedback to the backend
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false); // Cannot like and dislike at the same time
    // In a real app, this would send feedback to the backend
  };

  return (
    <div className={cn("flex flex-col items-center p-4 bg-card rounded-lg shadow-md", className)}>
      <img
        src={currentSong.albumArt}
        alt="Album Art"
        className="w-48 h-48 rounded-md mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-1">{currentSong.title}</h3>
      <p className="text-muted-foreground mb-4">{currentSong.artist}</p>

      <div className="w-full flex items-center gap-2 mb-4">
        <span className="text-sm text-muted-foreground">0:30</span>
        <Slider
          value={progress}
          max={100}
          step={1}
          onValueChange={setProgress}
          className="w-full"
        />
        <span className="text-sm text-muted-foreground">3:45</span> {/* Mock total time */}
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <Button variant="ghost" size="icon" onClick={handleDislike} className={cn(disliked && "text-destructive")}>
          <ThumbsDown className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <SkipBack className="h-7 w-7" />
        </Button>
        <Button variant="default" size="icon" className="h-12 w-12 rounded-full" onClick={handlePlayPause}>
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
        <Button variant="ghost" size="icon">
          <SkipForward className="h-7 w-7" />
        </Button>
        <Button variant="ghost" size="icon" onClick={handleLike} className={cn(liked && "text-red-500")}>
          <Heart className="h-6 w-6" />
        </Button>
      </div>

      <div className="w-full flex items-center gap-2">
        {volume[0] === 0 ? <VolumeX className="h-5 w-5 text-muted-foreground" /> : <Volume2 className="h-5 w-5 text-muted-foreground" />}
        <Slider
          value={volume}
          max={100}
          step={1}
          onValueChange={setVolume}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;