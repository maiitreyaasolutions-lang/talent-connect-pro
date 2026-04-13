import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Manager, Infrastructure Corp",
    quote: "Maiitreyaa delivered 200+ workers for our infrastructure project within 48 hours. Their reliability is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "HR Director, Manufacturing Ltd",
    quote: "We've been working with Maiitreyaa Integrated Solutions for our staffing needs. Their workers are well-trained, punctual, and professional. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ahmed Khan",
    role: "Operations Head, Construction Co.",
    quote: "Scaling our workforce during peak season was effortless with Maiitreyaa. Their team understands our needs perfectly and delivers every time.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 sm:p-10 shadow-sm border border-border min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                  "{testimonials[current].quote}"
                </blockquote>
                <div>
                  <p className="font-heading font-semibold text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2 mt-8">
              <button onClick={prev} className="p-2 rounded-lg border border-border hover:bg-muted transition-colors" aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button onClick={next} className="p-2 rounded-lg border border-border hover:bg-muted transition-colors" aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
