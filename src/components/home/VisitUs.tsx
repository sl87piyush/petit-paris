import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export const VisitUs = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 gold-underline inline-block">
            Visit Us
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Find us in the heart of Sardarpura. We can't wait to serve you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden card-shadow h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.8!2d72.98!3d26.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418ddfe8575613%3A0x3f971499cb76cff0!2sPetit%20Paris!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Petit Paris location"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {/* Address card */}
            <div className="bg-card rounded-xl p-5 card-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground text-sm">{siteConfig.address.full}</p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-primary font-medium mt-2"
                >
                  <a
                    href={siteConfig.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-3.5 h-3.5 mr-1" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-card rounded-xl p-5 card-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Opening Hours</h4>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.hours.days}: {siteConfig.hours.display}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1 italic">
                  {siteConfig.hours.note}
                </p>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-card rounded-xl p-5 card-shadow flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Contact</h4>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  Click to call or message on WhatsApp
                </p>
              </div>
            </div>

            {/* Get directions button */}
            <Button
              asChild
              size="lg"
              className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold"
            >
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
