import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, CheckCircle, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import industrialWorkers from "@/assets/industrial-workers.png";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Maiitreyaa Integrated Solutions LLP - Skilled Manpower Supply Services in Allahabad, Uttar Pradesh"
        className="w-full h-full object-cover object-right sm:object-center lg:object-right"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      {/* Dynamic Overlay - Optimized for readability on mobile and visibility on desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/40 lg:bg-gradient-to-r lg:from-primary/95 lg:via-primary/50 lg:to-transparent" />
      <div className="absolute inset-0 bg-navy/20 mix-blend-multiply sm:hidden" />
    </div>

    <div className="container relative z-10 pt-24 pb-16 sm:py-24 lg:py-36">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 mb-6 animate-fade-in">
            <Users className="w-4 h-4 text-secondary-foreground bg-secondary rounded-full p-0.5" />
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">Trusted Integrated Workforce Partner</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6 drop-shadow-md">
            Powering Your{" "}
            <span className="text-secondary">Workforce</span>{" "}
            With the Right Talent
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-xl mb-8 leading-relaxed">
            Maiitreyaa Integrated Solutions LLP provides skilled, semi-skilled, and unskilled manpower
            to industries across Uttar Pradesh and India. Reliable, fast, and scalable workforce solutions.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold hover:bg-teal-light transition-all shadow-xl shadow-secondary/30 hover:-translate-y-1"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-lg font-bold hover:border-primary-foreground/60 transition-all backdrop-blur-sm hover:bg-white/5"
            >
              Explore Our Services
            </Link>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base font-bold sm:font-medium text-primary-foreground">
            <span className="flex items-center gap-2 bg-black/20 sm:bg-white/5 px-3 py-1.5 rounded-lg border border-white/20 sm:border-white/10 backdrop-blur-sm"><CheckCircle className="w-4 h-4 text-secondary" /> Verified Workers</span>
            <span className="flex items-center gap-2 bg-black/20 sm:bg-white/5 px-3 py-1.5 rounded-lg border border-white/20 sm:border-white/10 backdrop-blur-sm"><Zap className="w-4 h-4 text-secondary" /> 48hr Deployment</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-12 xl:col-span-5 mt-16 lg:mt-32 xl:mt-40 flex justify-center xl:justify-end"
        >
          <div className="relative xl:pl-12 group">
            <div className="w-full aspect-square max-w-[280px] sm:max-w-[340px] xl:max-w-[380px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10 relative z-10 group bg-primary transition-transform duration-500 hover:scale-[1.02]">
              <img
                src={industrialWorkers}
                alt="Industrial workers and manpower team provided by Maiitreyaa Integrated Solutions LLP"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                loading="eager"
                fetchPriority="high"
                width={380}
                height={380}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70" />
            </div>

            {/* Floating cards - shifted downwards to avoid faces */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 sm:-left-12 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl z-20 border border-secondary/20 scale-90 sm:scale-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-tighter">LLPIN: ACW-8159</p>
                  <p className="text-[10px] text-muted-foreground font-semibold">Registered LLP</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-2 sm:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl z-20 border border-secondary/20 scale-90 sm:scale-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-primary leading-none">98%</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
