import { Wrench, HardHat, Hammer } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Wrench,
    title: "Skilled Workers",
    description: "Certified professionals including electricians, plumbers, welders, machine operators, and technicians ready for specialized roles.",
    features: ["Certified & Trained", "Industry Experienced", "Quality Assured"],
  },
  {
    icon: HardHat,
    title: "Semi-Skilled Workers",
    description: "Trained workforce for construction, manufacturing, and logistics roles requiring moderate technical knowledge.",
    features: ["On-Job Trained", "Adaptable", "Cost Effective"],
  },
  {
    icon: Hammer,
    title: "Unskilled Workers",
    description: "Reliable labor force for general tasks, loading, cleaning, and support roles across industries.",
    features: ["Readily Available", "Scalable Teams", "Dependable"],
  },
];

const ServicesSection = () => (
  <section className="py-20 lg:py-28 bg-background" id="services">
    <div className="container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Workforce Solutions for Every Need
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From specialized technicians to general laborers, we provide the right manpower for your project's unique requirements.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.15}>
            <div className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-secondary/30 h-full">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
