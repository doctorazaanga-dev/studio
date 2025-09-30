import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold font-serif text-primary">Aura</div>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Aura Spiritual Counseling. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}