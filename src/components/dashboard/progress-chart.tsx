'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartTooltipContent } from '@/components/ui/chart';
import { subDays, format } from 'date-fns';
import { useMemo } from 'react';
import type { Mood, MoodLog } from '@/lib/types';
import { moodValueMapping } from '@/lib/types';
import { BarChart2 } from 'lucide-react';

interface ProgressChartProps {
  moodLogs: MoodLog[];
}

const moodColors: Record<Mood, string> = {
  Happy: 'hsl(var(--chart-1))',
  Calm: 'hsl(var(--chart-2))',
  Okay: 'hsl(var(--chart-3))',
  Anxious: 'hsl(var(--chart-4))',
  Sad: 'hsl(var(--chart-5))',
};

export default function ProgressChart({ moodLogs }: ProgressChartProps) {
  const chartData = useMemo(() => {
    const last7Days = Array.from({ length: 7 }, (_, i) => subDays(new Date(), i)).reverse();
    
    return last7Days.map(day => {
      const dayStr = format(day, 'yyyy-MM-dd');
      const logForDay = moodLogs.find(log => format(new Date(log.date), 'yyyy-MM-dd') === dayStr);
      
      return {
        date: format(day, 'MMM d'),
        mood: logForDay ? logForDay.mood : null,
        value: logForDay ? moodValueMapping[logForDay.mood] : 0,
        fill: logForDay ? moodColors[logForDay.mood] : 'transparent',
      };
    });
  }, [moodLogs]);

  return (
    <Card className="shadow-lg border-accent/20">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <BarChart2 />
          Your Week in Review
        </CardTitle>
        <CardDescription>A look at your mood over the last 7 days.</CardDescription>
      </CardHeader>
      <CardContent>
        {moodLogs.length > 0 ? (
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis
                  dataKey="date"
                  stroke="hsl(var(--foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => {
                    const mood = Object.keys(moodValueMapping).find(key => moodValueMapping[key as Mood] === value);
                    return mood || '';
                  }}
                  domain={[0, 5]}
                  ticks={[1, 2, 3, 4, 5]}
                />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  content={<ChartTooltipContent
                    formatter={(value, name, props) => {
                        if (props.payload.mood) {
                            return (
                                <div className="flex flex-col">
                                    <span className="font-bold">{props.payload.mood}</span>
                                    <span className="text-xs text-muted-foreground">{props.payload.date}</span>
                                </div>
                            )
                        }
                        return null;
                    }}
                    label="Mood"
                    hideIndicator
                  />}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-[250px] flex flex-col items-center justify-center text-center p-8 rounded-lg bg-secondary">
             <p className="font-medium text-primary">No mood data yet.</p>
            <p className="text-sm text-muted-foreground">Start logging your mood to see your progress.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
