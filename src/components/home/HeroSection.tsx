import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, CheckCircle, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
    </div>

    <div className="container relative z-10 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Trusted Integrated Workforce Partner
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Powering Your{" "}
            <span className="text-secondary">Workforce</span>{" "}
            With the Right Talent
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-lg mb-8 leading-relaxed">
            Maiitreyaa Integrated Solutions LLP provides skilled, semi-skilled, and unskilled manpower 
            to industries across Uttar Pradesh and India. Reliable, fast, and scalable workforce solutions.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-teal-light transition-colors shadow-lg shadow-secondary/25"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground rounded-lg font-semibold hover:border-primary-foreground/60 transition-colors"
            >
              Browse Opportunities
            </Link>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-secondary" /> Verified Workers</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-secondary" /> 48hr Deployment</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-secondary" /> 15,000+ Deployed</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/40 backdrop-blur-sm border border-primary-foreground/10 flex items-center justify-center">
              <div className="text-center text-primary-foreground/80">
                <Users className="w-24 h-24 mx-auto mb-4 text-secondary" />
                <p className="font-heading text-2xl font-bold">15,000+</p>
                <p className="text-sm">Workers Deployed</p>
              </div>
            </div>
            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-xl"
            >
              <p className="text-sm font-semibold text-foreground">LLPIN: ACW-8159</p>
              <p className="text-xs text-muted-foreground">Govt. Registered LLP</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-xl"
            >
              <p className="text-sm font-semibold text-foreground">98%</p>
              <p className="text-xs text-muted-foreground">Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
