
'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "What can I expect from a session?",
    answer: "Each session is tailored to your unique needs. We start with a conversation to understand your goals, followed by guided practices which may include meditation, energy work, and intuitive counselling to help you find clarity and peace."
  },
  {
    question: "How do I know if spiritual counselling is right for me?",
    answer: "If you feel stuck, are seeking deeper meaning in your life, or want to heal from past traumas, spiritual counselling can provide valuable support. A free consultation is a great way to see if we are a good fit."
  },
  {
    question: "How long is a typical session?",
    answer: "A typical session lasts for 60 minutes, providing ample time for discussion and therapeutic work. Longer sessions can be arranged if needed."
  },
  {
    question: "Do you offer online sessions?",
    answer: "Yes, all services are available online via secure video call, allowing you to connect from the comfort of your own home. In-person sessions are also available."
  }
];

export default function Faq() {
  return (
    <section className="bg-card rounded-5xl my-24 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-4 py-1 text-xs font-semibold text-primary bg-background border border-border rounded-full">
              FAQ
            </span>
            <h2 className="mt-4 text-5xl md:text-6xl font-serif font-medium text-foreground">
              Questions Answered
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If you don't see your question answered here, please get in touch.
            </p>
          </div>
          <div className="mt-12">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqData.map((faq, i) => (
                <AccordionItem value={`item-${i}`} key={i} className="border-border">
                  <AccordionTrigger className="text-left font-medium text-lg text-foreground">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
