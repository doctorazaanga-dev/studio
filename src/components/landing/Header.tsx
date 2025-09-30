import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  const navLinks = ['About', 'Services', 'Testimonials', 'FAQ'];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" aria-label="Home" className="text-2xl font-bold font-serif text-primary">
          Aura
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-foreground hover:text-primary transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>
        <Button asChild>
           <a
              href="#"
            >
              Book My Free Consultation
            </a>
        </Button>
      </div>
    </header>
  );
}
