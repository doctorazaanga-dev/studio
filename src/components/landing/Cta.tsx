import React from 'react';
import { Button } from '@/components/ui/button';

export default function Cta() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Ready to Begin Your Transformation?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Take the first step towards a more centered and joyful life. Your free consultation is waiting.
        </p>
        <Button size="lg" variant="secondary" className="bg-accent text-brand-dark hover:bg-accent/90">
          Book Your Free Consultation
        </Button>
      </div>
    </section>
  );
}