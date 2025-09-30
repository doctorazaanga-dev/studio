export type Mood = 'Happy' | 'Calm' | 'Okay' | 'Anxious' | 'Sad';

export const moodValueMapping: Record<Mood, number> = {
  Happy: 5,
  Calm: 4,
  Okay: 3,
  Anxious: 2,
  Sad: 1,
};

export type MoodLog = {
  id: string;
  mood: Mood;
  date: string; // ISO string
};

export type GratitudeItem = {
  id: string;
  text: string;
};
