import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is spiritual counseling?",
    answer: "Spiritual counseling is a form of therapy that focuses on a person's spiritual or existential concerns. It helps individuals find meaning, purpose, and connection in their lives."
  },
  {
    question: "Is this related to a specific religion?",
    answer: "No, our approach is non-denominational and respects all spiritual paths and beliefs. We focus on universal principles of love, compassion, and inner wisdom."
  },
  {
    question: "How long does a session last?",
    answer: "A typical one-on-one session lasts for 60 minutes. Couples sessions are 90 minutes."
  },
  {
    question: "Are the sessions confidential?",
    answer: "Absolutely. All sessions are completely confidential, creating a safe space for you to share and explore freely."
  }
]

export default function Faq() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}