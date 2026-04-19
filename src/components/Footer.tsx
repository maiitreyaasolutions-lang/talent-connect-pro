import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <img
              src={logo}
              alt="Maiitreyaa"
              className="h-12 w-12 md:h-16 md:w-16 object-contain shrink-0"
              width={64}
              height={64}
              loading="lazy"
            />
            <div className="flex flex-col justify-center pt-0.5">
              <span className="font-heading font-bold text-base md:text-lg block leading-none text-[#D4AF37]">Maiitreyaa</span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-[#D4AF37]/60 mt-1">Integrated Solutions LLP</span>
            </div>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Your trusted partner for reliable integrated manpower solutions. Providing skilled, semi-skilled, and unskilled workforce across industries in Uttar Pradesh and beyond.
          </p>
          <p className="text-primary-foreground/50 text-xs mt-3">LLPIN: ACW-8159</p>
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
            <li>Industrial Manpower</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-semibold text-base mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-secondary" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=A-2/99+Badri+Awas+Yojana,+Mehdauri,+Teliyarganj,+Allahabad,+Uttar+Pradesh+211004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                A-2/99 Badri Awas Yojana, Mehdauri, Teliyarganj, Allahabad, Uttar Pradesh 211004
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 shrink-0 text-secondary" />
              <a href="tel:+919696318388" className="hover:text-secondary transition-colors">+91 96963 18388</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 shrink-0 text-secondary" />
              <a href="mailto:maiitreyaasolutions@gmail.com" className="hover:text-secondary transition-colors">maiitreyaasolutions@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex items-center justify-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-sm text-primary-foreground/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Maiitreyaa Integrated Solutions LLP. All rights reserved.</p>
          <span className="hidden sm:inline text-primary-foreground/20">|</span>
          <p>
            Developed by{" "}
            <a
              href="https://abhishek-s-animated-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 font-medium transition-colors"
            >
              Abhishek Mishra
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
