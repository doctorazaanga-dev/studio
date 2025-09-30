import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    step: '01',
    title: 'Book Your Free Consultation',
    description: 'Schedule a complimentary 15-minute call to discuss your needs and see if we\'re a good fit.',
  },
  {
    step: '02',
    title: 'Begin Your Sessions',
    description: 'Start your personalized one-on-one sessions, either online or in-person.',
  },
  {
    step: '03',
    title: 'Integrate & Grow',
    description: 'Apply the insights and practices from our sessions to create lasting change in your life.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">How It Works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(item => (
            <Card key={item.step} className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="text-5xl font-bold font-serif text-accent mb-4">{item.step}</div>
                <h3 className="text-xl font-bold font-serif mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}