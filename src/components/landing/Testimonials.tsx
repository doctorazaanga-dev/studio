
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The retreat was a deeply healing and transformative experience. I left feeling rejuvenated and more connected to my spiritual self. The guidance I received helped me release emotional blockages and gain a clearer vision for my life's path.",
    name: 'Ryan Martinez, 39',
    rating: 5,
  },
  {
    quote: "I reached out to Doctor Azaanga during a period of uncertainty in my relationship. His counselling helped me understand my feelings better and gave me the tools to communicate more openly with my partner. Our connection is now stronger, and I feel more secure in myself.",
    name: 'Mark Williams, 45',
    rating: 5,
  },
  {
    quote: "After years of burnout, energy healing with Doctor Azaanga has brought a sense of calm and balance back into my life. His intuitive approach significantly reduced my stress levels.",
    name: 'Jessica Patel, 32',
    rating: 4,
  },
    {
    quote: "The retreat was a transformative experience that deepened my spiritual connection and gave me the strength to move forward.",
    name: 'Michael Lee, 51',
    rating: 5,
  },
  {
    quote: "Energy healing with Doctor Azaanga has been life-changing—my stress and anxiety have significantly reduced.",
    name: 'Emily Thompson, 29',
    rating: 5,
  },
  {
    quote: "I felt truly seen and heard on my journey—Doctor Azaanga is a compassionate guide who truly understands my needs.",
    name: 'Sarah Johnson, 41',
    rating: 5,
  },
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <Card className="bg-card p-8 rounded-3xl shadow-sm h-full">
    <CardContent className="p-0 flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-current' : 'text-muted-foreground/50'}`}
          />
        ))}
      </div>
      <blockquote className="text-muted-foreground italic flex-grow">“{testimonial.quote}”</blockquote>
      <footer className="mt-6 font-semibold text-foreground">{testimonial.name}</footer>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-24">
       <div className="text-center">
         <span className="inline-block px-4 py-1 text-xs font-semibold text-primary bg-background border border-border rounded-full">
            TESTIMONIALS
          </span>
          <h2 className="mt-4 text-5xl md:text-6xl font-serif font-medium text-foreground">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what others are saying about their healing journey.
          </p>
       </div>
       <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial} />)}
       </div>
    </section>
  );
}
