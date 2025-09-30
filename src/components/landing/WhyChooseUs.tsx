import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const whyChooseUsData = [
  {
    title: 'Authentic & Effective Solutions',
    description: 'With over 32 years of experience, Doctor Azaanga offers genuine spiritual guidance rooted in ancestral wisdom.',
  },
  {
    title: 'Compassionate & Confidential',
    description: 'Every consultation is held in a safe, non-judgmental space, ensuring your privacy and comfort.',
  },
  {
    title: 'Personalized Approach',
    description: 'Your challenges are unique. We provide tailored rituals and counselling to address your specific needs and goals.',
  },
  {
    title: 'Proven Track Record',
    description: 'Countless individuals have found healing, success, and peace through Doctor Azaanga’s powerful interventions.',
  },
];

export default function WhyChooseUs() {
  const whyChooseUsImage = PlaceHolderImages.find(p => p.id === 'why-choose-us');

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <span className="inline-block px-4 py-1 text-xs font-semibold text-primary bg-background border border-border rounded-full">
            WHY CHOOSE US
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-medium text-foreground leading-tight">
            Your Trusted Spiritual Guide
          </h2>
          <p className="mt-6 text-muted-foreground">
            Navigating life’s spiritual challenges requires a guide with experience, integrity, and genuine power. Doctor Azaanga combines deep ancestral knowledge with a compassionate approach to help you find the clarity and peace you deserve.
          </p>
          <div className="mt-8 space-y-6">
            {whyChooseUsData.map((item) => (
              <div key={item.title} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
           <div className="relative w-full max-w-sm">
            <div className="p-2 border-2 border-accent rounded-t-3xl rounded-b-[200px] overflow-hidden">
              {whyChooseUsImage && (
                <Image 
                  src={whyChooseUsImage.imageUrl} 
                  alt={whyChooseUsImage.description}
                  data-ai-hint={whyChooseUsImage.imageHint}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover rounded-t-2xl rounded-b-[190px]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
