import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { siteConfig, getWhatsAppUrl, whatsappMessages } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      {/* Top trust bar - hidden on mobile, visible on scroll */}
      <div
        className={cn(
          "hidden md:block border-b border-border/50 transition-all duration-300",
          isScrolled ? "py-1.5" : "py-2"
        )}
      >
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-muted-foreground">
              <span className="text-gold">⭐</span> {siteConfig.ratings.google} Google
            </span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground">
              🕐 {siteConfig.hours.display}
            </span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground">
              📍 Sardarpura, Jodhpur
            </span>
          </div>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={cn(
          "container flex items-center justify-between transition-all duration-300",
          isScrolled ? "py-3" : "py-4 md:py-5"
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors p-1.5">
            <img src={logo} alt="Petit Paris logo" className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-semibold text-foreground">
              {siteConfig.name}
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Jodhpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent relative",
                location.pathname === link.href
                  ? "text-accent"
                  : "text-foreground/80"
              )}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden sm:flex bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground font-medium"
          >
            <a
              href={getWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </a>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </nav>

      {/* Mobile Sheet Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-3 p-5 border-b border-border">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center p-1.5">
                <img src={logo} alt="Petit Paris" className="w-full h-full" />
              </div>
              <div>
                <span className="font-serif text-lg font-semibold text-foreground block">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-muted-foreground">Jodhpur</span>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto py-4 px-3">
              <div className="flex flex-col gap-1">
                {siteConfig.navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "py-3.5 px-4 rounded-xl text-base font-medium transition-colors min-h-[48px] flex items-center",
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-secondary text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Info section */}
              <div className="mt-6 mx-4 py-4 border-t border-border space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-gold">⭐</span>
                  {siteConfig.ratings.google} Google • {siteConfig.ratings.zomato} Zomato
                </div>
                <div className="text-sm text-muted-foreground">
                  🕐 {siteConfig.hours.display}
                </div>
                <div className="text-sm text-muted-foreground">
                  📍 Sardarpura, Jodhpur
                </div>
              </div>
            </nav>

            {/* Bottom CTAs */}
            <div className="p-4 border-t border-border space-y-3">
              <Button
                asChild
                className="w-full bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground min-h-[48px]"
              >
                <a
                  href={getWhatsAppUrl(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full min-h-[48px]"
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
