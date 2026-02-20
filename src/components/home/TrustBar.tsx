import { Star, Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const TrustBar = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-gold">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold text-foreground">{siteConfig.ratings.google}</span>
            </div>
            <span className="text-sm text-muted-foreground">Google</span>
            <span className="text-border mx-1">•</span>
            <div className="flex items-center gap-1 text-gold">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold text-foreground">{siteConfig.ratings.zomato}</span>
            </div>
            <span className="text-sm text-muted-foreground">Zomato</span>
          </div>

          <div className="hidden md:block w-px h-6 bg-border" />

          {/* Hours */}
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{siteConfig.hours.display}</span>
          </div>

          <div className="hidden md:block w-px h-6 bg-border" />

          {/* Location */}
          <a
            href={siteConfig.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Sardarpura, Jodhpur</span>
          </a>

          <div className="hidden md:block w-px h-6 bg-border" />

          {/* Phone */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
