import { useState } from "react";
import { Clock, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Skilled", "Semi-Skilled", "Unskilled"] as const;

const jobs = [
  { title: "Electrician", category: "Skilled", location: "Allahabad", type: "Full-time", desc: "Licensed electrician for industrial wiring and maintenance projects." },
  { title: "Welder", category: "Skilled", location: "Lucknow", type: "Contract", desc: "Certified welder for structural steel fabrication projects." },
  { title: "Machine Operator", category: "Semi-Skilled", location: "Kanpur", type: "Full-time", desc: "CNC machine operator for manufacturing plant operations." },
  { title: "Forklift Driver", category: "Semi-Skilled", location: "Varanasi", type: "Full-time", desc: "Licensed forklift operator for warehouse operations." },
  { title: "Construction Helper", category: "Unskilled", location: "Allahabad", type: "Contract", desc: "General helper for construction site activities." },
  { title: "Warehouse Loader", category: "Unskilled", location: "Lucknow", type: "Full-time", desc: "Loading and unloading goods in warehouse facility." },
  { title: "Plumber", category: "Skilled", location: "Allahabad", type: "Full-time", desc: "Experienced plumber for commercial building projects." },
  { title: "Painter", category: "Semi-Skilled", location: "Kanpur", type: "Contract", desc: "Industrial painter for factory and warehouse finishing." },
];

const Careers = () => {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? jobs : jobs.filter((j) => j.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Careers</span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-primary-foreground leading-tight">
                Find Your Next Opportunity
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-2xl">
                Browse open positions across skilled, semi-skilled, and unskilled categories. Join the Maiitreyaa workforce today.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters & Jobs */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${filter === cat
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((job, i) => (
              <ScrollReveal key={`${job.title}-${job.location}`} delay={i * 0.05}>
                <div className="bg-card rounded-xl p-6 border border-border hover:border-secondary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-lg">{job.title}</h3>
                      <span className="inline-block mt-1 text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">
                        {job.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.category}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs listings section only */}
    </>
  );
};

export default Careers;
