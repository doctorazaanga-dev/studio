import React from 'react';
import { Check } from 'lucide-react';

const reasons = [
  'Holistic approach addressing mind, body, and spirit.',
  'A safe, non-judgmental, and confidential space.',
  'Personalized guidance based on your unique needs.',
  'Proven techniques for lasting transformation.',
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Why Choose Aura?</h2>
            <p className="mb-8 text-muted-foreground">
              We provide a unique and transformative experience, guiding you towards a more balanced and fulfilling life.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* Placeholder for an image or illustration */}
            <div className="bg-accent/20 rounded-4xl h-96 w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}