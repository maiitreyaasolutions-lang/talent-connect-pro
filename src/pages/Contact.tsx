import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/lib/frontend-mail";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Invalid phone number").max(15),
  subject: z.string().trim().min(2, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const info = [
  { icon: MapPin, label: "Address", value: "A-2/99 Badri Awas Yozana, Mehdauri, Teliyarganj, Cavellary Lines, Allahabad, Uttar Pradesh, India, 211004" },
  { icon: Phone, label: "Phone", value: "+91 96963 18388" },
  { icon: Mail, label: "Email", value: "maiitreyaasolutions@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });
  const { toast } = useToast();

  const onSubmit = async (data: ContactForm) => {
    setIsLoading(true);
    try {
      const result = await sendContactEmail(data);

      toast({
        title: "Message Sent",
        description: "Thanks for reaching out. Your message has been delivered successfully.",
      });
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Error",
        description:
          error instanceof Error ? error.message : "We couldn't prepare your email right now. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Contact Us</span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-heading font-bold text-primary-foreground leading-tight">
                Let's Talk About Your Workforce Needs
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-2xl">
                Have a question or need a quote? Fill out the form below or reach out directly. We respond within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground" htmlFor="c-name">Full Name</label>
                        <input {...register("name")} id="c-name" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground" htmlFor="c-email">Email</label>
                        <input {...register("email")} id="c-email" type="email" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground" htmlFor="c-phone">Phone</label>
                        <input {...register("phone")} id="c-phone" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                        {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground" htmlFor="c-subject">Subject</label>
                        <input {...register("subject")} id="c-subject" className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                        {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground" htmlFor="c-message">Message</label>
                      <textarea {...register("message")} id="c-message" rows={5} className="mt-1 w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-secondary focus:border-transparent outline-none resize-none" />
                      {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                    </div>
                    <button type="submit" disabled={isLoading} className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-teal-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {info.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <div className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                    <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      {item.label === "Phone" ? (
                        <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="text-sm text-muted-foreground mt-0.5 hover:text-secondary transition-colors block">
                          {item.value}
                        </a>
                      ) : item.label === "Email" ? (
                        <a href={`mailto:${item.value}`} className="text-sm text-muted-foreground mt-0.5 hover:text-secondary transition-colors block">
                          {item.value}
                        </a>
                      ) : item.label === "Address" ? (
                        <a
                          href="https://www.google.com/maps/place/25.497216,81.8566275"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground mt-0.5 hover:text-secondary transition-colors block leading-relaxed"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Map Placeholder */}
              <ScrollReveal delay={0.4}>
                <div className="bg-muted rounded-xl overflow-hidden border border-border">
                  <iframe
                    title="Maiitreyaa Office Location"
                    src="https://maps.google.com/maps?q=25.497216,81.8566275&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-48"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
