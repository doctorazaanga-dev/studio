// src/ai/flows/journaling-prompt.ts
'use server';

/**
 * @fileOverview A journaling prompt AI agent.
 *
 * - getJournalingPrompt - A function that generates a thought-provoking journaling prompt.
 * - JournalingPromptInput - The input type for the getJournalingPrompt function.
 * - JournalingPromptOutput - The return type for the getJournalingPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JournalingPromptInputSchema = z.object({
  mood: z
    .string()
    .optional()
    .describe('The current mood of the user, if available.'),
});
export type JournalingPromptInput = z.infer<typeof JournalingPromptInputSchema>;

const JournalingPromptOutputSchema = z.object({
  prompt: z.string().describe('A thought-provoking journaling prompt.'),
});
export type JournalingPromptOutput = z.infer<typeof JournalingPromptOutputSchema>;

export async function getJournalingPrompt(
  input: JournalingPromptInput
): Promise<JournalingPromptOutput> {
  return journalingPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'journalingPrompt',
  input: {schema: JournalingPromptInputSchema},
  output: {schema: JournalingPromptOutputSchema},
  prompt: `You are a helpful assistant designed to provide thought-provoking journaling prompts.

  The user may provide their current mood. If they do, tailor the prompt to be relevant to their mood.

  Mood: {{{mood}}}

  Generate a single, thought-provoking question that the user can use as a journaling prompt to reflect on their thoughts and feelings.`,
});

const journalingPromptFlow = ai.defineFlow(
  {
    name: 'journalingPromptFlow',
    inputSchema: JournalingPromptInputSchema,
    outputSchema: JournalingPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
