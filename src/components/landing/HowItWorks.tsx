import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowIcon } from '@/components/icons/ArrowIcon';

const steps = [
  {
    num: '1.',
    title: 'FREE CONSULTATION',
    description: 'We meet each other and I learn about your needs and goals.',
  },
  {
    num: '2.',
    title: 'COUNSELLING PLAN',
    description: 'I provide a counselling plan tailored to your unique situation.',
  },
  {
    num: '3.',
    title: 'YOUR HEALING BEGINS',
    description: 'You receive support until you flourish without my help.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-card rounded-5xl my-24 py-24">
      <div className="container mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1 text-xs font-semibold text-primary bg-background border border-border rounded-full">
          HOW IT WORKS
        </span>
        <h2 className="mt-4 text-5xl md:text-6xl font-serif font-medium text-foreground">
          Just Three Easy Steps
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I keep the process simple, so we can focus on what matters.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="text-center md:text-left col-span-1 md:col-span-1">
                <p className="text-6xl font-serif text-primary/50">{step.num}</p>
                <h3 className="mt-2 text-xl font-semibold uppercase">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex justify-center col-span-1 md:col-span-1">
                  <ArrowIcon className="w-24 h-8 text-primary" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <Button asChild size="lg" className="mt-16 text-primary-foreground bg-gradient-to-br from-primary to-accent rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
           <a
              href="#"
            >
              Book My Free Consultation
            </a>
        </Button>
      </div>
    </section>
  );
};