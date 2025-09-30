import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center text-white">
      <Image
        src="https://picsum.photos/seed/hero/1800/1200"
        alt="Spiritual counseling session"
        data-ai-hint="spiritual counseling"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-brand-dark bg-opacity-60"></div>
      <div className="relative container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4">Find Your Inner Peace</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Guidance and support for your spiritual journey. Reconnect with your true self.
        </p>
        <Button size="lg" className="bg-accent text-brand-dark hover:bg-accent/90">
          Begin Your Journey
        </Button>
      </div>
    </section>
  );
}