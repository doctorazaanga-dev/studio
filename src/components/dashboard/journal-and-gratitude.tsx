'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Plus, X, BookOpen, Loader2 } from 'lucide-react';
import useLocalStorage from '@/lib/hooks/use-local-storage';
import { getJournalingPrompt } from '@/ai/flows/journaling-prompt';
import type { GratitudeItem } from '@/lib/types';
import { ScrollArea } from '../ui/scroll-area';

export default function JournalAndGratitude() {
  const [gratitudeItems, setGratitudeItems] = useLocalStorage<GratitudeItem[]>('gratitudeItems', []);
  const [newGratitudeText, setNewGratitudeText] = useState('');
  const [journalPrompt, setJournalPrompt] = useState('');
  const [isPromptLoading, setIsPromptLoading] = useState(false);

  const handleAddGratitude = () => {
    if (newGratitudeText.trim() === '') return;
    const newItem: GratitudeItem = {
      id: new Date().toISOString(),
      text: newGratitudeText.trim(),
    };
    setGratitudeItems([newItem, ...gratitudeItems]);
    setNewGratitudeText('');
  };

  const handleDeleteGratitude = (id: string) => {
    setGratitudeItems(gratitudeItems.filter(item => item.id !== id));
  };

  const fetchJournalPrompt = useCallback(async () => {
    setIsPromptLoading(true);
    try {
      const result = await getJournalingPrompt({});
      setJournalPrompt(result.prompt);
    } catch (error) {
      console.error('Failed to generate journal prompt:', error);
      setJournalPrompt('What small moment from today brought you unexpected joy?');
    } finally {
      setIsPromptLoading(false);
    }
  }, []);

  return (
    <Card className="shadow-lg border-accent/20">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <BookOpen />
          Reflection Space
        </CardTitle>
        <CardDescription>Journal your thoughts and list what you're grateful for.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Journaling Section */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Journal Prompt</h3>
          <div className="p-4 rounded-md border border-dashed border-accent bg-secondary/50 min-h-[6rem] flex items-center justify-center">
            {isPromptLoading ? <Loader2 className="w-6 h-6 animate-spin text-primary" /> : <p className="text-center italic text-foreground/90">{journalPrompt || "Click the button to get a prompt!"}</p>}
          </div>
          <Button variant="secondary" onClick={fetchJournalPrompt} disabled={isPromptLoading} className="w-full">
            {isPromptLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Get a new prompt
          </Button>
          <Textarea placeholder="Write your reflections here..." className="h-32" />
        </div>

        <Separator />

        {/* Gratitude Section */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Gratitude List</h3>
          <div className="flex gap-2">
            <Input
              placeholder="I'm grateful for..."
              value={newGratitudeText}
              onChange={e => setNewGratitudeText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAddGratitude()}
            />
            <Button onClick={handleAddGratitude} size="icon" aria-label="Add gratitude item">
              <Plus />
            </Button>
          </div>
          <ScrollArea className="h-40">
            <ul className="space-y-2 pr-4">
              {gratitudeItems.length > 0 ? (
                gratitudeItems.map(item => (
                  <li key={item.id} className="flex items-center justify-between text-sm bg-secondary p-2 rounded-md">
                    <span>{item.text}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-muted-foreground hover:text-destructive"
                      onClick={() => handleDeleteGratitude(item.id)}
                      aria-label={`Delete ${item.text}`}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </li>
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">Your gratitude list is empty.</p>
              )}
            </ul>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}
