import { Target, Eye, Users, Award, Building, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const team = [
  { name: "Vikram Patel", role: "CEO & Founder", desc: "20+ years in workforce management" },
  { name: "Anita Desai", role: "Operations Director", desc: "Expert in large-scale deployments" },
  { name: "Suresh Menon", role: "HR Head", desc: "Specialist in talent acquisition" },
  { name: "Fatima Sheikh", role: "Client Relations", desc: "Dedicated to client satisfaction" },
];

const timeline = [
  { year: "2013", event: "Founded with a vision to revolutionize manpower supply" },
  { year: "2016", event: "Expanded to 5 major cities across India" },
  { year: "2019", event: "Crossed 10,000 workers deployed milestone" },
  { year: "2022", event: "Launched digital platform for workforce management" },
  { year: "2024", event: "Serving 500+ clients across 15+ industries" },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="pt-32 pb-20 bg-primary">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About Us</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-primary-foreground leading-tight">
              Building India's Most Trusted Workforce Partner
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-2xl">
              For over a decade, ManpowerPro has been connecting businesses with reliable, skilled workers. Our commitment to quality and speed sets us apart.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-card rounded-xl p-8 border border-border h-full">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide businesses with the highest quality workforce solutions, ensuring reliable, vetted, and skilled workers are deployed swiftly to meet evolving industry demands.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-card rounded-xl p-8 border border-border h-full">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading manpower supply partner in Asia, known for innovation, reliability, and creating meaningful employment opportunities for millions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-muted/50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Journey</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
              10+ Years of Excellence
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-0">
          {timeline.map((t, i) => (
            <ScrollReveal key={t.year} delay={i * 0.1}>
              <div className="flex gap-6 pb-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold shrink-0">
                    {t.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <p className="font-heading font-semibold text-foreground">{t.year}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Team</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Leadership That Delivers
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border text-center group hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-secondary font-medium mt-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{member.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
