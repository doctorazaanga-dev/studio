'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles, RefreshCw } from 'lucide-react';
import { generateDailyAffirmation } from '@/ai/flows/daily-affirmation';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DailyAffirmation() {
  const [affirmation, setAffirmation] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchAffirmation = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await generateDailyAffirmation();
      setAffirmation(result.affirmation);
    } catch (error) {
      console.error('Failed to generate affirmation:', error);
      setAffirmation('Embrace the journey of self-discovery today.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAffirmation();
  }, [fetchAffirmation]);
  
  const placeholderImage = PlaceHolderImages[0];

  return (
    <Card className="overflow-hidden shadow-lg border-accent/20">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
           <Image
            src={placeholderImage.imageUrl}
            alt={placeholderImage.description}
            data-ai-hint={placeholderImage.imageHint}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <CardTitle className="font-headline text-2xl text-primary-foreground flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Your Daily Affirmation
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {isLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        ) : (
          <blockquote className="text-xl italic text-foreground/90 text-center">
            &ldquo;{affirmation}&rdquo;
          </blockquote>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-center">
        <Button variant="outline" onClick={fetchAffirmation} disabled={isLoading}>
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          New Affirmation
        </Button>
      </CardFooter>
    </Card>
  );
}
