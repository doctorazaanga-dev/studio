import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Compass, Zap } from 'lucide-react';

const pillars = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: 'EMOTIONAL HEALING',
    description: 'Release stress, anxiety, and past traumas',
  },
  {
    icon: <Compass className="w-8 h-8 text-primary" />,
    title: 'CLARITY & PURPOSE',
    description: 'Gain insight into your life\'s direction',
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'SPIRITUAL CONNECTION',
    description: 'Align with your values and higher self',
  },
];

export default function Pillars() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="flex flex-col items-center">
             <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-md">
              {pillar.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">{pillar.title}</h3>
            <p className="mt-2 text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
