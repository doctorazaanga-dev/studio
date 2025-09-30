import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="p-2 border-2 border-accent rounded-t-[200px] rounded-b-3xl overflow-hidden">
              <Image
                src="https://raw.githubusercontent.com/doctorazaanga-dev/pics/main/azaanga.jpg"
                alt="Doctor Azaanga, spiritual healer"
                data-ai-hint="spiritual healer"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-t-[190px] rounded-b-2xl"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-primary-foreground text-foreground p-10 md:p-14 rounded-4xl dark:bg-card">
            <span className="inline-block px-4 py-1 text-xs font-semibold text-primary-foreground bg-primary border border-gray-600 rounded-full dark:text-primary dark:bg-primary-foreground">
              ABOUT YOUR THERAPIST
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-medium leading-tight text-primary dark:text-primary-foreground">
              About Doctor Azaanga
            </h2>
            <p className="mt-6 text-muted-foreground">
              Doctor Azaanga is a renowned herbalist, witch doctor, and astrologist dedicated to providing authentic and effective spiritual solutions. With a deep understanding of the mystical world and natural remedies, Doctor Azaanga has been the guiding light for many seeking spiritual healing and empowerment. His profound knowledge and compassionate approach have transformed the lives of countless individuals, bringing harmony, prosperity, and protection.
            </p>
            <Button asChild className="mt-10">
              <a
                href="#"
                className="inline-block px-8 py-4 text-primary-foreground bg-gradient-to-br from-primary via-primary to-accent rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Book My Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
