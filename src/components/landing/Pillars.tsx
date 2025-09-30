import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Compass, Zap } from 'lucide-react';

const pillars = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: 'Emotional Healing',
    description: 'Address past traumas and emotional blockages in a safe and supportive space.',
  },
  {
    icon: <Compass className="w-8 h-8 text-primary" />,
    title: 'Spiritual Guidance',
    description: 'Explore your spiritual path and connect with your inner wisdom and intuition.',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Personal Growth',
    description: 'Unlock your potential and cultivate a life of purpose, joy, and fulfillment.',
  },
];

export default function Pillars() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="text-center p-8 bg-background border-0 shadow-none">
              <div className="flex justify-center mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold font-serif mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}