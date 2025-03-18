"use client"; // Required for client-side interactivity

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface CountdownTimerProps {
  targetTime: string; // Target time in "HH:MM" format (e.g., "23:59")
}

export const CountdownTimer = ({ targetTime }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();

      // Set the target time (e.g., 11:59 PM)
      const [targetHours, targetMinutes] = targetTime.split(":").map(Number);
      target.setHours(targetHours, targetMinutes, 0, 0);

      // If the target time has already passed today, set it for tomorrow
      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      // Calculate the difference in milliseconds
      const difference = target.getTime() - now.getTime();

      // Convert milliseconds to hours, minutes, and seconds
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    // Update the countdown every second
    const interval = setInterval(calculateTimeLeft, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <Label className="text-2xl font-bold">
              {String(timeLeft.hours).padStart(2, "0")}
            </Label>
            <Label className="text-sm text-muted-foreground">Hours</Label>
          </div>
          <div className="text-center">
            <Label className="text-2xl font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </Label>
            <Label className="text-sm text-muted-foreground">Minutes</Label>
          </div>
          <div className="text-center">
            <Label className="text-2xl font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </Label>
            <Label className="text-sm text-muted-foreground">Seconds</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
