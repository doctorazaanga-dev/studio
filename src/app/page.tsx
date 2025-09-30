'use client';

import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Pillars from '@/components/landing/Pillars';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import HowItWorks from '@/components/landing/HowItWorks';
import Testimonials from '@/components/landing/Testimonials';
import Faq from '@/components/landing/Faq';
import Cta from '@/components/landing/Cta';
import Footer from '@/components/landing/Footer';

export default function App() {
  return (
    <div className="bg-background font-sans text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <About />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
