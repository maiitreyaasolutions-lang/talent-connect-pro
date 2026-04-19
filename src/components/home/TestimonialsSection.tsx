import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Manager, Infrastructure Corp",
    quote: "Maiitreyaa delivered 200+ workers for our infrastructure project within 48 hours. Their reliability is unmatched in the industry.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "HR Director, Manufacturing Ltd",
    quote: "We've been working with Maiitreyaa Integrated Solutions for our staffing needs. Their workers are well-trained, punctual, and professional. Highly recommended!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Ahmed Khan",
    role: "Operations Head, Construction Co.",
    quote: "Scaling our workforce during peak season was effortless with Maiitreyaa. Their team understands our needs perfectly and delivers every time.",
    rating: 5,
    avatar: "AK",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)), []);
  const next = useCallback(() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)), []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isAutoPlaying]);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-bg/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl text-primary" />
      </div>

      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-secondary bg-secondary/10 rounded-full">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground leading-tight">
              Voices of <span className="text-secondary">Excellence</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Hear from the industry leaders who trust us with their critical workforce needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
          <div
            className="relative bg-card/80 backdrop-blur-md rounded-3xl p-8 sm:p-14 shadow-2xl shadow-primary/5 border border-white/20 min-h-[380px] sm:min-h-[320px] overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Background Quote Icon */}
            <Quote className="absolute top-8 right-10 w-24 h-24 text-primary/5 -z-0 rotate-12" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 h-full flex flex-col"
              >
                <div className="flex gap-1.5 mb-8">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <blockquote className="text-foreground text-xl sm:text-2xl font-medium italic leading-relaxed mb-10 flex-grow">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex items-center gap-5">
                  <Avatar className="h-16 w-16 border-2 border-secondary/20 shadow-lg shadow-secondary/10">
                    <AvatarFallback className="bg-secondary/10 text-secondary font-bold text-xl">
                      {testimonials[current].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-heading font-bold text-lg text-foreground mb-0.5">{testimonials[current].name}</p>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="group p-4 rounded-2xl bg-white shadow-lg border border-border hover:bg-secondary hover:border-secondary transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={next}
                className="group p-4 rounded-2xl bg-white shadow-lg border border-border hover:bg-secondary hover:border-secondary transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-foreground group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-500",
                    i === current ? "w-10 bg-secondary" : "w-2.5 bg-secondary/20 hover:bg-secondary/40"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
