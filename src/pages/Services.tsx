import { useState } from "react";
import {
  Users,
  Wrench,
  HardHat,
  Hammer,
  Factory,
  Truck,
  Trash2,
  Building2,
  ClipboardCheck,
  CheckCircle2
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const serviceCategories = [
  {
    id: "manpower",
    title: "Manpower & Staffing",
    icon: Users,
    description: "Tailored workforce solutions providing skilled, semi-skilled, and unskilled professionals for various industrial and commercial needs."
  },
  {
    id: "industry",
    title: "Industry-Wise Solutions",
    icon: Factory,
    description: "Specialized services tailored for diverse sectors including Manufacturing, Construction, Retail, and Healthcare."
  },
  {
    id: "production",
    title: "Production & Supply",
    icon: Truck,
    description: "Comprehensive support for assembly lines, production management, and streamlined supply chain logistics."
  },
  {
    id: "waste",
    title: "Waste Management",
    icon: Trash2,
    description: "Responsible and efficient solid waste collection, industrial disposal, and commercial cleaning services."
  },
  {
    id: "facility",
    title: "Facility & Support",
    icon: Building2,
    description: "Proactive building maintenance, security services, and dedicated office support staff for seamless operations."
  },
  {
    id: "projects",
    title: "Govt. & Private Projects",
    icon: ClipboardCheck,
    description: "Extensive support for large-scale tenders and specialized project workforces for both government and private sectors."
  }
];

const manpowerSubcategories = [
  {
    title: "Skilled Workers",
    category: "Skilled",
    icon: Wrench,
    desc: "Certified professionals with specialized technical training.",
    items: ["Electricians", "Plumbers", "Welders", "Machine Operators", "Technicians", "Engineers", "IT Professionals", "ANM GNM Nurses", "Computer Operator"]
  },
  {
    title: "Semi-Skilled Workers",
    category: "Semi-Skilled",
    icon: HardHat,
    desc: "Trained workforce for roles requiring moderate technical knowledge.",
    items: ["Construction Helpers", "Logistics Assistants", "Drivers", "Warehouse Staff", "Security Guards", "Home Care Assistant"]
  },
  {
    title: "Unskilled Workers",
    category: "Unskilled",
    icon: Hammer,
    desc: "Reliable labor force for general tasks and support roles.",
    items: ["General Labor", "Loaders & Unloaders", "Cleaning Staff", "Office Boys", "Support Staff", "Housekeeping Person"]
  }
];

const Services = () => {
  const [filter, setFilter] = useState<string>("All");
  const filteredManpower = filter === "All"
    ? manpowerSubcategories
    : manpowerSubcategories.filter(s => s.category === filter);

  return (
    <>
      <SEOHead
        title="Services — Manpower Supply, Staffing & Facility Management"
        description="Explore our comprehensive services: skilled workers (electricians, plumbers, welders, nurses), semi-skilled workers (drivers, security guards), unskilled labor, facility management, waste management, and government project staffing. Maiitreyaa Integrated Solutions LLP, Allahabad."
        path="/services"
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-primary-foreground leading-tight">
                Integrated Solutions for All Sectors
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
                At Maiitreyaa Integrated Solutions LLP, we provide comprehensive, end-to-end solutions across manpower, production, facility support, and environmental services for both private and government sectors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground">Diverse Service Portfolio</h2>
              <p className="mt-4 text-muted-foreground">Expert solutions across multiple domains to help your organization scale efficiently.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-center text-secondary font-medium text-sm gap-2">
                    <div className="w-8 h-[2px] bg-secondary/30" />
                    Integrated Solution
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manpower Deep Dive */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Manpower & Staffing</span>
                <h2 className="mt-3 text-3xl font-heading font-bold text-foreground">Excellence in Workforce Management</h2>
                <p className="mt-4 text-muted-foreground">We provide meticulously vetted personnel categorized by skill levels to match your specific operational demands.</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["All", "Skilled", "Semi-Skilled", "Unskilled"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${filter === cat
                      ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20"
                      : "bg-background text-muted-foreground hover:bg-background/80 hover:text-foreground border border-border"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredManpower.flatMap((cat, i) =>
              cat.items.map((item, j) => (
                <ScrollReveal key={`${cat.category}-${item}`} delay={(i * 0.1) + (j * 0.05)}>
                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 flex flex-col h-full group">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <cat.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-muted rounded text-muted-foreground">{cat.category}</span>
                    </div>
                    <h4 className="text-base font-heading font-bold text-foreground mb-2">{item}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item === "ANM GNM Nurses"
                        ? `Professional ${item.toLowerCase()} services tailored for private and government hospitals.`
                        : `Professional ${item.toLowerCase()} services tailored for industrial, commercial, and residential projects.`}
                    </p>
                    <div className="mt-auto pt-4 flex items-center text-xs font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <div className="ml-1 w-4 h-[1px] bg-secondary" />
                    </div>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-light/5 rounded-full -ml-24 -mb-24" />

            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
                Whatever your industry or scale, Maiitreyaa Integrated Solutions LLP has the expertise to support your growth.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-bold hover:bg-teal-light transition-all transform hover:-translate-y-1 shadow-xl shadow-secondary/20"
              >
                Discuss Your Requirements
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
