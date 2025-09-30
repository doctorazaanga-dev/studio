'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Smile, Feather, Meh, BrainCircuit, Frown, CheckCircle } from 'lucide-react';
import type { Mood, MoodLog } from '@/lib/types';

interface MoodTrackerProps {
  addMoodLog: (log: MoodLog) => void;
  hasLoggedToday: boolean;
}

const moodOptions: { mood: Mood; icon: React.ElementType; label: string }[] = [
  { mood: 'Happy', icon: Smile, label: 'Happy' },
  { mood: 'Calm', icon: Feather, label: 'Calm' },
  { mood: 'Okay', icon: Meh, label: 'Okay' },
  { mood: 'Anxious', icon: BrainCircuit, label: 'Anxious' },
  { mood: 'Sad', icon: Frown, label: 'Sad' },
];

export default function MoodTracker({ addMoodLog, hasLoggedToday }: MoodTrackerProps) {
  const handleMoodSelect = (mood: Mood) => {
    if (hasLoggedToday) return;

    const newLog: MoodLog = {
      id: new Date().toISOString(),
      mood,
      date: new Date().toISOString(),
    };
    addMoodLog(newLog);
  };

  return (
    <Card className="shadow-lg border-accent/20">
      <CardHeader>
        <CardTitle className="font-headline">How are you feeling?</CardTitle>
        <CardDescription>Log your mood for today.</CardDescription>
      </CardHeader>
      <CardContent>
        {hasLoggedToday ? (
          <div className="flex flex-col items-center justify-center gap-4 text-center p-8 rounded-lg bg-secondary">
            <CheckCircle className="w-12 h-12 text-primary" />
            <p className="font-medium text-primary">You&apos;ve logged your mood for today.</p>
            <p className="text-sm text-muted-foreground">Come back tomorrow to reflect again.</p>
          </div>
        ) : (
          <TooltipProvider>
            <div className="flex justify-around">
              {moodOptions.map(({ mood, icon: Icon, label }) => (
                <Tooltip key={mood}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-14 h-14 rounded-full hover:bg-accent/20"
                      onClick={() => handleMoodSelect(mood)}
                    >
                      <Icon className="w-8 h-8 text-primary/80" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        )}
      </CardContent>
    </Card>
  );
}
