import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, MessageCircle, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig, getWhatsAppUrl } from "@/config/siteConfig";
const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const handleFormChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const buildContactMessage = () => {
    const {
      name,
      phone,
      message
    } = contactForm;
    return `Hi Petit Paris!

Name: ${name || "Not provided"}
Phone: ${phone || "Not provided"}

Message: ${message || "I have a question."}

Looking forward to your response!`;
  };
  return <Layout>
      {/* Hero */}
      <section className="bg-primary/5 py-12 md:py-20">
        <div className="container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Questions, orders, or just want to say hi? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send us a message
              </h2>
              <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input id="contact-name" placeholder="Enter your name" value={contactForm.name} onChange={e => handleFormChange("name", e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input id="contact-phone" type="tel" placeholder="+91 98765 43210" value={contactForm.phone} onChange={e => handleFormChange("phone", e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Your Message</Label>
                    <textarea id="contact-message" rows={4} placeholder="How can we help you?" className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none" value={contactForm.message} onChange={e => handleFormChange("message", e.target.value)} />
                  </div>

                  <Button asChild size="lg" className="w-full bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground font-semibold rounded-full">
                    <a href={getWhatsAppUrl(buildContactMessage())} target="_blank" rel="noopener noreferrer">
                      <Send className="w-4 h-4 mr-2" />
                      Send via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Direct contact options */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us</p>
                    <p className="font-medium text-foreground">{siteConfig.phone}</p>
                  </div>
                </a>

                <a href={getWhatsAppUrl("Hi! I have a quick question.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-card rounded-xl card-shadow hover:bg-secondary/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">Message us</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map and info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Find us here
              </h2>
              
              {/* Map */}
              <div className="rounded-2xl overflow-hidden card-shadow h-[300px] mb-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.8!2d72.98!3d26.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418ddfe8575613%3A0x3f971499cb76cff0!2sPetit%20Paris!5e0!3m2!1sen!2sin!4v1700000000000" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Petit Paris location" />
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-5 card-shadow flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground text-sm mb-2">{siteConfig.address.full}</p>
                    <Button asChild variant="link" className="p-0 h-auto text-primary font-medium">
                      <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer">
                        <Navigation className="w-3.5 h-3.5 mr-1" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-5 card-shadow flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="text-accent-foreground py-10 bg-primary">
        <div className="container text-center">
          <h3 className="font-serif text-2xl font-bold mb-2">Need a cake today?</h3>
          <p className="opacity-90 mb-4">Same-day orders might be possible—just message us!</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold">
            <a href={getWhatsAppUrl("Hi! I need a cake urgently. Is same-day delivery possible?")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Message Us Now
            </a>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default Contact;
