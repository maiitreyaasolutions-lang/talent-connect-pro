import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Invalid phone number").max(15),
  subject: z.string().trim().min(2, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const info = [
  { icon: MapPin, label: "Address", value: "A-2/99 Badri Awas Yojana, Mehdauri, Teliyarganj, Cavellary Lines, Allahabad, UP 211004" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "rishuraj89850@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });
  const { toast } = useToast();

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("qUaIgVi9gYl3nAvXa");
  }, []);

  const onSubmit = async (data: ContactForm) => {
    setIsLoading(true);
    try {
      const result = await emailjs.send(
        "service_talent_connect",
        "template_contact_form",
        {
          to_email: "rishuraj89850@gmail.com",
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          reply_to: data.email,
        }
      );

      if (result.status === 200) {
        toast({ 
          title: "Message Sent Successfully!", 
          description: `Thanks ${data.name}, your message has been sent to rishuraj89850@gmail.com. We'll get back to you within 24 hours.` 
        });
        reset();
      }
    } catch (error) {
      console.error("Email error:", error);
      toast({ 
        title: "Error", 
        description: "Failed to send message. Please try again or contact us directly.",
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
                      <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Map Placeholder */}
              <ScrollReveal delay={0.4}>
                <div className="bg-muted rounded-xl overflow-hidden border border-border">
                  <iframe
                    title="Maiitreyaa Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.8!2d81.85!3d25.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzAwLjAiTiA4McKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
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
