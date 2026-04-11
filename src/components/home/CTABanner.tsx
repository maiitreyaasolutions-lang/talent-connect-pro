import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTABanner = () => (
  <section className="py-20 bg-secondary relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-teal-light blur-3xl" />
    </div>
    <div className="container relative z-10 text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-foreground mb-4">
          Ready to Build Your Workforce?
        </h2>
        <p className="text-secondary-foreground/80 max-w-lg mx-auto mb-8 leading-relaxed">
          Get in touch today and let us provide the manpower solutions your business needs to succeed.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-navy-light transition-colors shadow-lg"
        >
          Contact Us Now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABanner;
