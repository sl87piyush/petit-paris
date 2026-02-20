import { Search, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, whatsappMessages } from "@/config/siteConfig";
const steps = [{
  icon: Search,
  title: "1. Choose",
  description: "Browse our menu and pick your favorites"
}, {
  icon: MessageCircle,
  title: "2. Message",
  description: "Send us a quick WhatsApp message"
}, {
  icon: CheckCircle,
  title: "3. Enjoy",
  description: "Pickup or get it delivered to your door"
}];
export const OrderSteps = () => {
  return <section className="bg-primary text-primary-foreground section-padding">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Order in 30 Seconds
          </h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto">
            No apps, no accounts. Just WhatsApp us and we'll take care of the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {steps.map((step, index) => <div key={index} className="relative text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-[#8ac5ea]">
                <step.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{step.description}</p>
              
              {/* Connector line (hidden on mobile, last item) */}
              {index < steps.length - 1 && <div className="hidden md:block absolute top-1/4 right-0 translate-x-1/2 w-12 h-0.5 bg-primary-foreground/20" />}
            </div>)}
        </div>

        {/* Quick order buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground font-semibold px-8 h-12 rounded-full">
            <a href={getWhatsAppUrl("Hi! I'd like to place an order from Petit Paris. Here's what I want: ")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Order Now
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 h-12 rounded-full">
            <a href={getWhatsAppUrl(whatsappMessages.customCake("Date: \nSize: \nFlavor: \nTheme/Design: \nBudget: "))} target="_blank" rel="noopener noreferrer">
              Custom Cake Inquiry
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
