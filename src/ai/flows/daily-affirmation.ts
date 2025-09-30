'use server';

/**
 * @fileOverview Generates a daily affirmation for the user.
 *
 * - generateDailyAffirmation - A function that returns a daily affirmation.
 * - DailyAffirmationOutput - The return type for the generateDailyAffirmation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DailyAffirmationOutputSchema = z.object({
  affirmation: z.string().describe('A positive affirmation for the day.'),
});
export type DailyAffirmationOutput = z.infer<typeof DailyAffirmationOutputSchema>;

export async function generateDailyAffirmation(): Promise<DailyAffirmationOutput> {
  return dailyAffirmationFlow();
}

const prompt = ai.definePrompt({
  name: 'dailyAffirmationPrompt',
  output: {schema: DailyAffirmationOutputSchema},
  prompt: `You are a spiritual guide. Generate a positive affirmation to start the day with positive intentions. The affirmation should be short and inspiring.`,
});

const dailyAffirmationFlow = ai.defineFlow({
  name: 'dailyAffirmationFlow',
  outputSchema: DailyAffirmationOutputSchema,
}, async () => {
  const {output} = await prompt({});
  return output!;
});
