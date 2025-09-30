'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="container mx-auto px-6 pt-16 pb-24 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1 text-xs font-semibold text-primary bg-background border border-border rounded-full">
          SPIRITUAL COUNSELLING
        </span>
        <h1 className="mt-4 text-5xl md:text-7xl font-serif font-medium text-foreground leading-tight">
          Finally Find Peace Of Mind
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Helping you navigate life&apos;s challenges with wisdom, compassion, and inner peace.
        </p>
        <Button asChild size="lg" className="mt-8 text-primary-foreground bg-gradient-to-br from-primary to-accent rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <a
            href="#"
          >
            Book My Free Consultation
          </a>
        </Button>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="relative w-full max-w-sm">
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent z-10"></div>
          <div className="relative w-full h-[450px] p-2 border-2 border-accent rounded-t-[200px] rounded-b-3xl overflow-hidden">
            <Image
              src="https://raw.githubusercontent.com/doctorazaanga-dev/pics/refs/heads/main/Am%20a%20well%20known%20black%20spell%20caster%20widely%20known%20as%E2%80%A6.jfif" 
              alt="Doctor Azaanga, spiritual healer"
              data-ai-hint="spiritual healer"
              fill
              className="w-full h-full object-cover rounded-t-[190px] rounded-b-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
