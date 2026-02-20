import { useState } from "react";
import { MessageCircle, Cake, Send, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { menuItems, menuCategories, faqItems, getWhatsAppUrl, whatsappMessages, siteConfig } from "@/config/siteConfig";

const cakeSizes = ["1/2 kg", "1 kg", "1.5 kg", "2 kg", "3 kg+"];
const cakeFlavors = ["Chocolate", "Vanilla", "Red Velvet", "Butterscotch", "Pineapple", "Black Forest", "Other"];
const budgetRanges = ["₹500-1000", "₹1000-1500", "₹1500-2500", "₹2500+"];

const Order = () => {
  const [customCakeForm, setCustomCakeForm] = useState({
    name: "",
    phone: "",
    size: "",
    flavor: "",
    theme: "",
    date: "",
    budget: "",
    message: "",
  });

  const [quickOrderCart, setQuickOrderCart] = useState<{ id: string; name: string; qty: number }[]>([]);

  const handleCustomFormChange = (field: string, value: string) => {
    setCustomCakeForm((prev) => ({ ...prev, [field]: value }));
  };

  const buildCustomCakeMessage = () => {
    const { name, phone, size, flavor, theme, date, budget, message } = customCakeForm;
    return `Hi! I'd like to order a custom cake from Petit Paris.

Name: ${name || "Not provided"}
Phone: ${phone || "Not provided"}
Size: ${size || "Not selected"}
Flavor: ${flavor || "Not selected"}
Theme/Design: ${theme || "Not specified"}
Delivery Date: ${date || "Not specified"}
Budget: ${budget || "Not specified"}
${message ? `\nAdditional Notes: ${message}` : ""}

Please confirm availability. Thank you!`;
  };

  const addToQuickOrder = (item: { id: string; name: string }) => {
    setQuickOrderCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: item.id, name: item.name, qty: 1 }];
    });
  };

  const removeFromQuickOrder = (id: string) => {
    setQuickOrderCart((prev) => prev.filter((i) => i.id !== id));
  };

  const buildQuickOrderMessage = () => {
    if (quickOrderCart.length === 0) return whatsappMessages.general;
    const items = quickOrderCart.map((i) => `• ${i.name} x${i.qty}`).join("\n");
    return `Hi! I'd like to order from Petit Paris:\n\n${items}\n\nPlease confirm availability and total. Thank you!`;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary/5 py-12 md:py-20">
        <div className="container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Order & Custom Cakes
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Quick orders or custom creations—we've got you covered. Just message us on WhatsApp!
          </p>
        </div>
      </section>

      {/* Order tabs */}
      <section className="section-padding">
        <div className="container">
          <Tabs defaultValue="custom" className="max-w-4xl mx-auto">
            <TabsList className="w-full grid grid-cols-2 mb-8">
              <TabsTrigger value="quick" className="text-base py-3">
                Quick Order
              </TabsTrigger>
              <TabsTrigger value="custom" className="text-base py-3">
                <Cake className="w-4 h-4 mr-2" />
                Custom Cake
              </TabsTrigger>
            </TabsList>

            {/* Quick Order Tab */}
            <TabsContent value="quick">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Item picker */}
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="font-serif text-xl font-semibold">Select Items</h3>
                  {menuCategories.slice(0, 4).map((category) => (
                    <div key={category.id}>
                      <h4 className="font-medium text-muted-foreground mb-3">
                        {category.icon} {category.label}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {menuItems
                          .filter((item) => item.category === category.id)
                          .slice(0, 4)
                          .map((item) => (
                            <button
                              key={item.id}
                              onClick={() => addToQuickOrder({ id: item.id, name: item.name })}
                              className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors text-left"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-foreground truncate">{item.name}</p>
                                <p className="text-sm text-accent">₹{item.price}</p>
                              </div>
                              <span className="text-primary text-xl">+</span>
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-32 bg-card rounded-xl p-6 card-shadow">
                    <h3 className="font-serif text-xl font-semibold mb-4">Your Order</h3>
                    {quickOrderCart.length === 0 ? (
                      <p className="text-muted-foreground text-sm">Click items to add them here</p>
                    ) : (
                      <div className="space-y-3 mb-6">
                        {quickOrderCart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between">
                            <span className="text-sm">
                              {item.name} <span className="text-muted-foreground">x{item.qty}</span>
                            </span>
                            <button
                              onClick={() => removeFromQuickOrder(item.id)}
                              className="text-destructive text-sm hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    <Button
                      asChild
                      className="w-full bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground"
                      disabled={quickOrderCart.length === 0}
                    >
                      <a
                        href={getWhatsAppUrl(buildQuickOrderMessage())}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Custom Cake Tab */}
            <TabsContent value="custom">
              <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={customCakeForm.name}
                      onChange={(e) => handleCustomFormChange("name", e.target.value)}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={customCakeForm.phone}
                      onChange={(e) => handleCustomFormChange("phone", e.target.value)}
                    />
                  </div>

                  {/* Size */}
                  <div className="space-y-2">
                    <Label>Cake Size</Label>
                    <div className="flex flex-wrap gap-2">
                      {cakeSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleCustomFormChange("size", size)}
                          className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                            customCakeForm.size === size
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-border hover:border-primary/50"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Flavor */}
                  <div className="space-y-2">
                    <Label>Flavor</Label>
                    <div className="flex flex-wrap gap-2">
                      {cakeFlavors.map((flavor) => (
                        <button
                          key={flavor}
                          onClick={() => handleCustomFormChange("flavor", flavor)}
                          className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                            customCakeForm.flavor === flavor
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-border hover:border-primary/50"
                          }`}
                        >
                          {flavor}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theme */}
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme / Design</Label>
                    <Input
                      id="theme"
                      placeholder="e.g., Birthday, Princess, Sports..."
                      value={customCakeForm.theme}
                      onChange={(e) => handleCustomFormChange("theme", e.target.value)}
                    />
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <Label htmlFor="date">Delivery / Pickup Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={customCakeForm.date}
                      onChange={(e) => handleCustomFormChange("date", e.target.value)}
                    />
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <Label>Budget Range</Label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget}
                          onClick={() => handleCustomFormChange("budget", budget)}
                          className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                            customCakeForm.budget === budget
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-border hover:border-primary/50"
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">Additional Notes (Optional)</Label>
                    <Input
                      id="message"
                      placeholder="Any special requests or details..."
                      value={customCakeForm.message}
                      onChange={(e) => handleCustomFormChange("message", e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8 flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground font-semibold px-8 rounded-full"
                  >
                    <a
                      href={getWhatsAppUrl(buildCustomCakeMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Inquiry on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card rounded-xl px-6 border-none card-shadow"
              >
                <AccordionTrigger className="hover:no-underline text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary text-primary-foreground py-10">
        <div className="container text-center">
          <h3 className="font-serif text-2xl font-bold mb-2">Need a cake today?</h3>
          <p className="text-primary-foreground/70 mb-4">Same-day orders might be possible—just ask!</p>
          <Button
            asChild
            size="lg"
            className="bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground rounded-full font-semibold"
          >
            <a
              href={getWhatsAppUrl("Hi! I need a cake for today. Is it possible?")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Message Us Now
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
