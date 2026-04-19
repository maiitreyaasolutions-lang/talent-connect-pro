import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Manager",
    company: "Infrastructure Corp",
    quote: "Maiitreyaa delivered 200+ workers for our infrastructure project within 48 hours. Their reliability is unmatched in the industry.",
    rating: 5,
    avatar: "RK",
    category: "Infrastructure",
  },
  {
    name: "Priya Sharma",
    role: "HR Director",
    company: "Manufacturing Ltd",
    quote: "We've been working with Maiitreyaa Integrated Solutions for our staffing needs. Their workers are well-trained, punctual, and professional. Highly recommended!",
    rating: 5,
    avatar: "PS",
    category: "Staffing",
  },
  {
    name: "Ahmed Khan",
    role: "Operations Head",
    company: "Construction Co.",
    quote: "Scaling our workforce during peak season was effortless with Maiitreyaa. Their team understands our needs perfectly and delivers every time.",
    rating: 5,
    avatar: "AK",
    category: "Operations",
  },
  {
    name: "Sanjay Singh",
    role: "Site Supervisor",
    company: "BuildTech Solutions",
    quote: "The quality of workforce supplied is top-notch. They handle all legal and compliance aspects smoothly, letting us focus on the work.",
    rating: 5,
    avatar: "SS",
    category: "Compliance",
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
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

        <div className="relative max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 sm:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-xl p-8 shadow-md border border-slate-100 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-slate-200 fill-slate-100" />
                      </div>

                      {/* Content */}
                      <blockquote className="text-slate-700 text-[17px] leading-relaxed mb-8 flex-grow font-medium">
                        "{t.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                        <Avatar className="h-12 w-12 border border-slate-100 shadow-sm">
                          <AvatarFallback className="bg-secondary/10 text-secondary font-bold text-sm">
                            {t.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left overflow-hidden">
                          <p className="font-bold text-slate-900 truncate">{t.name}</p>
                          <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[11px] font-bold uppercase tracking-wider text-secondary">
                            <span>{t.role}</span>
                            <span className="text-slate-300">|</span>
                            <span>{t.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation */}
            <div className="hidden lg:block">
              <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-slate-200 hover:bg-white hover:text-secondary shadow-lg" />
              <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-slate-200 hover:bg-white hover:text-secondary shadow-lg" />
            </div>

            <div className="lg:hidden flex justify-center gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-full border-slate-200 hover:bg-white hover:text-secondary shadow-lg" />
              <CarouselNext className="static translate-y-0 w-12 h-12 rounded-full border-slate-200 hover:bg-white hover:text-secondary shadow-lg" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
