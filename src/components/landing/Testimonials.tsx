import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Working with Aura has been life-changing. I've found a sense of peace I never thought possible.",
    name: 'Sarah L.',
  },
  {
    quote: "The guidance I received was both profound and practical. I highly recommend their services.",
    name: 'Michael B.',
  },
  {
    quote: "A truly gifted counselor who creates a warm and supportive environment for growth.",
    name: 'Jessica P.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Words from Our Clients</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card p-8 rounded-3xl">
              <CardContent className="p-0">
                <blockquote className="text-lg italic mb-6">“{testimonial.quote}”</blockquote>
                <footer className="font-bold">{testimonial.name}</footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}