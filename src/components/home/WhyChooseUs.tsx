import { Shield, Clock, Award, Headphones, TrendingUp, UserCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  { icon: Shield, title: "Verified Workers", desc: "Background-checked and verified workforce for your peace of mind." },
  { icon: Clock, title: "Fast Deployment", desc: "Get workers on-site within 24-48 hours of request." },
  { icon: Award, title: "10+ Years Experience", desc: "A decade of trusted manpower supply across industries." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated account managers and round-the-clock assistance." },
  { icon: TrendingUp, title: "Scalable Teams", desc: "Easily scale workforce up or down based on project demands." },
  { icon: UserCheck, title: "Skilled Matching", desc: "AI-driven matching of workers to job requirements for best fit." },
];

const WhyChooseUs = () => (
  <section className="py-20 lg:py-28 bg-muted/50">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            The ManpowerPro Advantage
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We go beyond just supplying workers. We deliver reliable, quality workforce solutions that power your success.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.1}>
            <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                <r.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
