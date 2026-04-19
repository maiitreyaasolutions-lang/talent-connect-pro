import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-card/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <img src={logo} alt="Maiitreyaa Integrated Solutions LLP" className="h-12 w-12 md:h-16 md:w-16 object-contain shrink-0" width={64} height={64} />
          <div className="flex flex-col justify-center pt-0.5">
            <span className="font-heading font-bold text-base md:text-lg block leading-none text-[#D4AF37]">Maiitreyaa</span>
            <span className="text-[10px] font-medium tracking-wider uppercase text-[#D4AF37]/60 mt-1">Integrated Solutions LLP</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors relative",
                location.pathname === link.path
                  ? "text-secondary font-semibold"
                  : scrolled
                    ? "text-foreground hover:text-secondary"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary rounded-full" />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold hover:bg-teal-light transition-colors shadow-sm"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={cn("w-6 h-6", scrolled ? "text-foreground" : "text-primary-foreground")} />
          ) : (
            <Menu className={cn("w-6 h-6", scrolled ? "text-foreground" : "text-primary-foreground")} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-muted text-secondary font-semibold"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold text-center"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
