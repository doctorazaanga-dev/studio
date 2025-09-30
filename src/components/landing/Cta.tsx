import React from 'react';
import { Button } from '@/components/ui/button';

export default function Cta() {
  return (
    <section className="container mx-auto px-6 pb-24">
        <div className="bg-primary text-primary-foreground text-center p-12 md:p-20 rounded-5xl">
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight max-w-2xl mx-auto">
              Take your first step towards peace and fulfilment...
            </h2>
            <p className="mt-6 text-primary-foreground/80 max-w-lg mx-auto">
              Ready to get started or still have some questions? Perfect. Book a free consultation call today and we can begin your journey of self-exploration.
            </p>
            <Button asChild size="lg" className="mt-10 bg-accent text-accent-foreground hover:bg-accent/90 transform hover:scale-105 transition-transform duration-300">
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
