import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    title: 'Witchcraft Rituals',
    description: 'Negative spiritual forces can disrupt every aspect of life. Doctor Azaanga uses ancient techniques to remove harmful witchcraft and protect you from future attacks — restoring balance and peace.',
    image: PlaceHolderImages.find(p => p.id === 'witchcraft-rituals'),
  },
  {
    title: 'Win Court Cases',
    description: 'When legal and land disputes threaten your peace, Doctor Azaanga’s spiritual guidance can tip the scales in your favor. His methods have helped many clients find justice and resolution in even the most difficult cases.',
    image: PlaceHolderImages.find(p => p.id === 'court-cases'),
  },
  {
    title: 'Love Spells',
    description: 'Ignite new love, rekindle lost passion, or unite two hearts. Doctor Azaanga’s love spells channel pure, powerful energy to strengthen bonds and attract romance.',
    image: PlaceHolderImages.find(p => p.id === 'love-spells'),
  },
  {
    title: 'Marriage Binding Rituals',
    description: 'Strengthen love, heal misunderstandings, and restore intimacy with rituals that bring couples closer. Whether you are seeking to save your relationship, spark new romance, or protect your union from outside interference, Doctor Azaanga offers powerful, time-tested solutions.',
    image: PlaceHolderImages.find(p => p.id === 'marriage-rituals'),
  },
  {
    title: 'Job Promotion Spells',
    description: 'Secure your position, earn a promotion, or protect your career from threats. Doctor Azaanga’s spells help you rise and stay at the top.',
    image: PlaceHolderImages.find(p => p.id === 'job-promotion'),
  },
  {
    title: 'Man Power Spells',
    description: 'Boost your personal confidence, strength, and vitality. These masculine empowerment rituals help you reclaim energy, enhance performance, and project a strong, confident presence.',
    image: PlaceHolderImages.find(p => p.id === 'man-power'),
  },
  {
    title: 'Spiritual Cleansing Rituals',
    description: 'Remove negativity, restore inner peace, and invite positive energy into your life. These ceremonies bring clarity, spiritual lightness, and emotional renewal.',
    image: PlaceHolderImages.find(p => p.id === 'spiritual-cleansing'),
  },
  {
    title: 'Family Affairs Spells',
    description: 'Settle disputes, prevent divorce, and restore harmony within your family. These rituals promote unity, peace, and mutual understanding.',
    image: PlaceHolderImages.find(p => p.id === 'family-affairs'),
  },
  {
    title: 'Returning Stolen Items',
    description: 'Recover what’s rightfully yours — stolen possessions, unpaid debts, or withheld property — through Doctor Azaanga’s swift and powerful rituals.',
    image: PlaceHolderImages.find(p => p.id === 'stolen-items'),
  },
  {
    title: 'Win Games Spells',
    description: 'Whether it’s betting, lottery, or casino games, Doctor Azaanga’s winning-energy spells can help shift luck in your favor and improve your chances of success.',
    image: PlaceHolderImages.find(p => p.id === 'win-games'),
  },
  {
    title: 'Lucky Rings',
    description: 'Specially crafted and blessed by Doctor Azaanga, these rings bring success, love, and good fortune. They can also be tailored to specific miracles and goals.',
    image: PlaceHolderImages.find(p => p.id === 'lucky-rings'),
  },
  {
    title: 'Boosting Business Spells',
    description: 'Attract more customers, increase profits, and keep your business thriving. With Doctor Azaanga’s business attraction spells, success becomes a constant companion.',
    image: PlaceHolderImages.find(p => p.id === 'boosting-business'),
  }
];

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-full max-w-xs p-2 border-2 border-accent rounded-t-[150px] rounded-b-3xl overflow-hidden bg-background">
       <div className="w-full h-64 rounded-t-[140px] rounded-b-2xl overflow-hidden relative">
        {service.image && (
          <Image 
            src={service.image.imageUrl} 
            alt={service.image.description} 
            data-ai-hint={service.image.imageHint}
            fill
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
    <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
    <p className="mt-2 text-muted-foreground max-w-xs">{service.description}</p>
  </div>
);

export default function Services() {
  return (
    <section className="bg-card rounded-5xl my-24 py-24">
      <div className="container mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1 text-xs font-semibold text-primary bg-background border border-border rounded-full">
          SERVICES
        </span>
        <h2 className="mt-4 text-5xl md:text-6xl font-serif font-medium text-foreground">
          Herbalist Doctor Azaanga’s Services
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          For over 32 years, Doctor Azaanga has dedicated his life to healing, restoring harmony, and solving complex spiritual and personal challenges. Known for his wisdom, compassion, and ancestral gifts, he works with clients from all walks of life — helping them overcome obstacles, mend relationships, and reclaim peace of mind.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {services.map(service => <ServiceCard key={service.title} service={service} />)}
        </div>
        <p className="mt-20 text-3xl font-serif text-foreground italic max-w-3xl mx-auto">
          "I hold a space for you to be fully seen and heard—this is when healing begins."
        </p>
      </div>
    </section>
  );
};
