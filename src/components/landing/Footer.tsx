import React from 'react';

export default function Footer() {
  const navLinks = ['About', 'Services', 'Testimonials', 'FAQ'];

  return (
    <footer className="bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="text-2xl font-bold font-serif text-primary">Aura</div>
          <nav className="flex flex-wrap justify-center gap-x-6">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
