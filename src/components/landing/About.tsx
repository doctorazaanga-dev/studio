import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://picsum.photos/seed/about/600/700"
              alt="Portrait of the counselor"
              data-ai-hint="counselor portrait"
              width={600}
              height={700}
              className="rounded-4xl object-cover"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">A Compassionate Guide for Your Journey</h2>
            <p className="mb-6 text-muted-foreground">
              With over 15 years of experience in spiritual counseling and holistic healing, I am dedicated to helping you navigate life's challenges and discover your authentic self. My approach is rooted in empathy, intuition, and a deep respect for your unique path.
            </p>
            <Button>Learn More About My Approach</Button>
          </div>
        </div>
      </div>
    </section>
  );
}