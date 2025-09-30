import React from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-serif text-white">Aura</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-opacity-80 transition">About</a>
          <a href="#" className="text-white hover:text-opacity-80 transition">Services</a>
          <a href="#" className="text-white hover:text-opacity-80 transition">Testimonials</a>
        </nav>
        <Button variant="secondary">Book a Session</Button>
      </div>
    </header>
  );
}