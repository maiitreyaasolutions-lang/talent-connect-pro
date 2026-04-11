import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground font-heading font-bold">M</span>
            </div>
            <span className="font-heading font-bold text-lg">ManpowerPro</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Your trusted partner for reliable manpower solutions. Over 10 years of connecting top talent with leading businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Careers", path: "/careers" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li>Skilled Workers</li>
            <li>Semi-Skilled Workers</li>
            <li>Unskilled Workers</li>
            <li>Contract Staffing</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
              123 Business Avenue, Industrial District, Mumbai 400001
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0 text-secondary" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0 text-secondary" />
              info@manpowerpro.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} ManpowerPro. All rights reserved.
        </p>
        <div className="flex gap-4">
          {["Facebook", "LinkedIn", "Twitter"].map((s) => (
            <a key={s} href="#" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors" aria-label={s}>
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
