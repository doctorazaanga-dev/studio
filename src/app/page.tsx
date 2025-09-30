'use client';

import { useState } from 'react';
import { isToday } from 'date-fns';
import Header from '@/components/dashboard/header';
import DailyAffirmation from '@/components/dashboard/daily-affirmation';
import MoodTracker from '@/components/dashboard/mood-tracker';
import JournalAndGratitude from '@/components/dashboard/journal-and-gratitude';
import ProgressChart from '@/components/dashboard/progress-chart';
import type { MoodLog } from '@/lib/types';
import useLocalStorage from '@/lib/hooks/use-local-storage';

export default function Home() {
  const [moodLogs, setMoodLogs] = useLocalStorage<MoodLog[]>('moodLogs', []);

  const lastLogDate = moodLogs.length > 0 ? new Date(moodLogs[0].date) : null;
  const hasLoggedToday = lastLogDate ? isToday(lastLogDate) : false;

  const addMoodLog = (log: MoodLog) => {
    setMoodLogs([log, ...moodLogs]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-5">
            {/* Left Column */}
            <div className="lg:col-span-3 space-y-8">
              <DailyAffirmation />
              <ProgressChart moodLogs={moodLogs} />
            </div>
            {/* Right Column */}
            <div className="lg:col-span-2 space-y-8">
              <MoodTracker addMoodLog={addMoodLog} hasLoggedToday={hasLoggedToday} />
              <JournalAndGratitude />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
