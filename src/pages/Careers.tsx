import { useState } from "react";
import { MapPin, Clock, Briefcase, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

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

const applicationSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Invalid phone number").max(15),
  category: z.string().min(1, "Select a category"),
  message: z.string().trim().max(1000).optional(),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const Careers = () => {
  const [filter, setFilter] = useState<string>("All");
  const [applyJob, setApplyJob] = useState<string | null>(null);
  const { toast } = useToast();

  const filtered = filter === "All" ? jobs : jobs.filter((j) => j.category === filter);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = (data: ApplicationForm) => {
    toast({ title: "Application Submitted!", description: `Thanks ${data.name}, we'll be in touch soon.` });
    reset();
    setApplyJob(null);
  };

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
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    filter === cat
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
                    <button
                      onClick={() => setApplyJob(job.title)}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold hover:bg-teal-light transition-colors shrink-0"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{job.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.type}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.category}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {applyJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
            onClick={() => setApplyJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl p-8 w-full max-w-md shadow-2xl border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-semibold text-foreground">Apply: {applyJob}</h3>
                <button onClick={() => setApplyJob(null)} className="p-1 rounded-md hover:bg-muted" aria-label="Close">
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="name">Full Name</label>
                  <input {...register("name")} id="name" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="email">Email</label>
                  <input {...register("email")} id="email" type="email" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="phone">Phone</label>
                  <input {...register("phone")} id="phone" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="category">Category</label>
                  <select {...register("category")} id="category" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none">
                    <option value="">Select category</option>
                    <option value="Skilled">Skilled</option>
                    <option value="Semi-Skilled">Semi-Skilled</option>
                    <option value="Unskilled">Unskilled</option>
                  </select>
                  {errors.category && <p className="text-xs text-destructive mt-1">{errors.category.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="message">Message (Optional)</label>
                  <textarea {...register("message")} id="message" rows={3} className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none resize-none" />
                </div>
                <button type="submit" className="w-full py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-teal-light transition-colors">
                  Submit Application
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Careers;
