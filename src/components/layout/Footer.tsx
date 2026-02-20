import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container section-padding">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center p-1.5">
                <img src={logo} alt="Petit Paris" className="w-full h-full" />
              </div>
              <span className="font-serif text-xl font-semibold">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{siteConfig.address.full}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-primary-foreground/70 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <div>{siteConfig.hours.display}</div>
                  <div className="text-xs text-primary-foreground/50">{siteConfig.hours.days}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours & Note */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="bg-primary-foreground/10 rounded-xl p-4">
              <div className="text-2xl font-serif font-semibold mb-1">
                {siteConfig.hours.display}
              </div>
              <div className="text-primary-foreground/70 text-sm mb-3">
                {siteConfig.hours.days}
              </div>
              <p className="text-xs text-primary-foreground/50 italic">
                {siteConfig.hours.note}
              </p>
            </div>
            <div className="mt-4 text-sm text-primary-foreground/70">
              Average spend: <span className="text-primary-foreground font-medium">{siteConfig.averageSpend}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Made with ❤️ in Jodhpur</p>
        </div>
      </div>
    </footer>
  );
};
