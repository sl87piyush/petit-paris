import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig, getWhatsAppUrl, whatsappMessages } from "@/config/siteConfig";
import heroBg from "@/assets/hero-bg.png";
import brandIcon from "@/assets/brand-icon.svg";
export const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} />
      {/* Light white overlay for readability */}
      <div className="absolute inset-0 z-0 bg-white/15" />

      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-20">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Rating pill */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-5">
            <span className="text-gold">⭐</span>
            {siteConfig.ratings.google} on Google • {siteConfig.ratings.zomato} on Zomato
          </div>

          {/* Main title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-[#8ac5ea]">
            <span className="inline-flex items-baseline justify-center gap-2.5 sm:gap-3.5">
              <img src={brandIcon} alt="" aria-hidden="true" className="h-[0.75em] sm:h-[0.85em] w-auto translate-y-[2px] flex-shrink-0" />
              <span>{siteConfig.name}</span>
            </span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-primary mb-6">
            {siteConfig.tagline}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            {siteConfig.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button asChild size="lg" className="bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground font-semibold text-base px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all">
              <a href={getWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Order on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold text-base px-8 h-12 rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all">
              <Link to="/menu">
                View Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {siteConfig.trustBadges.map((badge, index) => <span key={index} className="inline-flex items-center gap-1.5 bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                {badge}
              </span>)}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
