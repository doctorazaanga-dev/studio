import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  { title: 'One-on-One Sessions', description: 'Personalized guidance tailored to your specific needs and goals.' },
  { title: 'Couples Counseling', description: 'Strengthen your bond and navigate relationship challenges together.' },
  { title: 'Group Workshops', description: 'Connect with a community and explore spiritual topics in a group setting.' },
  { title: 'Meditation & Mindfulness', description: 'Learn techniques to reduce stress and cultivate inner peace.' },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Services</h2>
          <p className="text-muted-foreground">We offer a range of services to support your spiritual and emotional well-being.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <Card key={service.title} className="p-8 bg-background shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold font-serif mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}