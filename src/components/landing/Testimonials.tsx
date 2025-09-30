
'use client';
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The retreat was a deeply healing and transformative experience. I left feeling rejuvenated and more connected to my spiritual self. The guidance I received helped me release emotional blockages and gain a clearer vision for my life's path.",
    image: "https://picsum.photos/seed/1/40/40",
    name: "Ryan",
    role: "39"
  },
  {
    text: "I reached out to Doctor Azaanga during a period of uncertainty in my relationship. His counselling helped me understand my feelings better and gave me the tools to communicate more openly with my partner. Our connection is now stronger, and I feel more secure in myself.",
    image: "https://picsum.photos/seed/2/40/40",
    name: "Mark",
    role: "45"
  },
  {
    text: "After years of burnout, energy healing with Doctor Azaanga has brought a sense of calm and balance back into my life. His intuitive approach significantly reduced my stress levels.",
    image: "https://picsum.photos/seed/3/40/40",
    name: "Jessica",
    role: "32"
  },
  {
    text: "The retreat was a transformative experience that deepened my spiritual connection and gave me the strength to move forward.",
    image: "https://picsum.photos/seed/4/40/40",
    name: "Michael",
    role: "51"
  },
  {
    text: "Energy healing with Doctor Azaanga has been life-changing—my stress and anxiety have significantly reduced.",
    image: "https://picsum.photos/seed/5/40/40",
    name: "Emily",
    role: "29"
  },
  {
    text: "I felt truly seen and heard on my journey—Doctor Azaanga is a compassionate guide who truly understands my needs.",
    image: "https://picsum.photos/seed/6/40/40",
    name: "Sarah",
    role: "41"
  },
  {
    text: "Doctor Azaanga's guidance helped me navigate a difficult career transition with confidence and clarity. I am now in a role that feels aligned with my purpose.",
    image: "https://picsum.photos/seed/7/40/40",
    name: "David",
    role: "35"
  },
  {
    text: "The spiritual cleansing ritual was incredibly powerful. I feel lighter, more centered, and free from negative energy that was holding me back.",
    image: "https://picsum.photos/seed/8/40/40",
    name: "Aisha",
    role: "48"
  },
  {
    text: "I was skeptical about love spells, but Doctor Azaanga's ritual helped me open my heart again after a painful divorce. I've since found a loving partner.",
    image: "https://picsum.photos/seed/9/40/40",
    name: "Maria",
    role: "55"
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-sm">Testimonials</div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mt-5">
            What Clients Say
          </h2>
          <p className="text-center mt-5 opacity-75 text-muted-foreground">
            See what others are saying about their healing journey.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
