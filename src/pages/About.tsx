import { Target, Eye, Users, Award, Building, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

import jaySingh from "@/assets/jay-singh.jpg";
import vaibhawSingh from "@/assets/vaibhaw-singh.jpg";
import surajManiTripathi from "@/assets/suraj-mani-tripathi-cropped.jpg";

const team = [
  {
    name: "Kunwar Jay Singh",
    role: "Designated Partner",
    email: "kunwarjaisingh1995@gmail.com",
    image: jaySingh,
    education: [
      "Post-graduation - M.Sc. Biotechnology",
      "Sam Higginbottom University of Agriculture, Technology and Sciences",
      "Prayagraj, Uttar Pradesh"
    ]
  },
  {
    name: "Kunwar Vaibhaw Singh",
    role: "Designated Partner",
    email: "vksingh1best@gmail.com",
    image: vaibhawSingh,
    education: [
      "M.Com (Finance)",
      "Delhi School of Economics, University of Delhi"
    ]
  },
  {
    name: "Suraj Mani Tripathi",
    role: "Accounting Manager",
    email: "surajmanitripathi03@gmail.com",
    image: surajManiTripathi,
  },
];

const timeline = [
  { year: "2026", event: "Maiitreyaa Integrated Solutions LLP incorporated on 30th March 2026 in Allahabad, UP" },
  { year: "2026", event: "Registered under MCA with LLPIN ACW-8159 under ROC Uttar Pradesh I" },
  { year: "2026", event: "Began operations as a Small LLP providing integrated manpower solutions" },
];

const About = () => (
  <>
    <SEOHead
      title="About Us — Our Story, Mission & Leadership"
      description="Learn about Maiitreyaa Integrated Solutions LLP (LLPIN: ACW-8159), a registered manpower supply company in Allahabad, UP. Meet our leadership team — Kunwar Jay Singh and Kunwar Vaibhaw Singh. Founded in March 2026 to provide reliable workforce solutions across India."
      path="/about"
    />
    {/* Hero */}
    <section className="pt-32 pb-20 bg-primary">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">About Us</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-primary-foreground leading-tight">
              Building India's Most Trusted Integrated Workforce Partner
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-2xl">
              Maiitreyaa Integrated Solutions LLP is a Registered LLP (LLPIN: ACW-8159) based in Allahabad, Uttar Pradesh.
              We provide reliable skilled, semi-skilled, and unskilled manpower to industries across India.
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
                To provide businesses with the highest quality integrated workforce solutions, ensuring reliable, vetted, and skilled workers are deployed swiftly to meet evolving industry demands across Uttar Pradesh and India.
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
                To become the leading integrated manpower solutions partner in India, known for innovation, reliability, and creating meaningful employment opportunities for thousands of workers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Company Details */}
    <section className="py-20 bg-muted/50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">LLP Details</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Officially Registered & Compliant
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            { label: "Registered Address", value: "A-2/99 Badri Awas Yozana, Mehdauri, Teliyarganj, Cavellary Lines, Allahabad, Uttar Pradesh, India, 211004" },
            { label: "RD Region", value: "RD Delhi, Northern Region" },
            { label: "LLPIN", value: "ACW-8159" },
            { label: "LLP Name", value: "Maiitreyaa Integrated Solutions LLP" },
            { label: "ROC", value: "ROC Uttar Pradesh I" },
            { label: "Date of Incorporation", value: "30/03/2026" },
            { label: "Status", value: "Active" },
            { label: "Category", value: "Small LLP" },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.05} className={item.label === "Registered Address" || item.label === "RD Region" ? "sm:col-span-2 lg:col-span-1" : ""}>
              {item.label === "Registered Address" ? (
                <a
                  href="https://www.google.com/maps/place/25%C2%B029'50.0%22N+81%C2%B051'23.9%22E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-xl p-5 border border-border hover:border-secondary transition-colors group block h-full"
                >
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1 group-hover:text-secondary">{item.label}</p>
                  <p className="text-sm text-foreground font-medium">{item.value}</p>
                </a>
              ) : (
                <div className="bg-card rounded-xl p-5 border border-border h-full">
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm text-foreground font-medium">{item.value}</p>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Journey</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
              The Beginning of Excellence
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-0">
          {timeline.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
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
    <section className="py-20 bg-muted/50">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Partners</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Leadership That Delivers
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 border border-border text-center group hover:shadow-xl hover:shadow-secondary/5 hover:border-secondary/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-6 border-4 border-secondary/10 group-hover:border-secondary/30 transition-all duration-500 shadow-inner">
                  <img src={member.image} alt={`${member.name} - ${member.role} at Maiitreyaa Integrated Solutions LLP`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" loading="lazy" width={144} height={144} />
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg">{member.name}</h3>
                <p className="text-secondary font-semibold text-sm mt-1">{member.role}</p>
                {member.education && (
                  <div className="text-xs text-muted-foreground mt-3 mb-2 px-1">
                    {member.education.map((line, idx) => (
                      <p key={idx} className="leading-tight mb-1">{line}</p>
                    ))}
                  </div>
                )}
                <a
                  href={`mailto:${member.email}`}
                  className={`text-xs text-muted-foreground hover:text-secondary transition-colors block underline underline-offset-4 decoration-secondary/30 ${member.education ? 'mt-2' : 'mt-4'}`}
                >
                  {member.email}
                </a>
                <div className="mt-auto pt-6 border-t border-border/50">
                  <div className="flex justify-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-secondary group-hover:bg-secondary/10 transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
