import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { menuCategories, menuItems, getWhatsAppUrl, whatsappMessages } from "@/config/siteConfig";

const tagStyles: Record<string, string> = {
  bestseller: "bg-gold/20 text-gold border-gold/30",
  new: "bg-accent/20 text-accent border-accent/30",
  eggless: "bg-green-100 text-green-700 border-green-200",
  veg: "bg-green-100 text-green-700 border-green-200",
};

export const MenuPreview = () => {
  const [activeTab, setActiveTab] = useState("cheesecakes");

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 gold-underline inline-block">
            Our Menu
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            From creamy cheesecakes to flaky croissants, discover what makes us Jodhpur's favorite.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border"
              >
                <span className="mr-1.5">{category.icon}</span>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems
                  .filter((item) => item.category === category.id)
                  .slice(0, 6)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="group flex items-center gap-4 p-4 bg-card rounded-xl card-shadow hover-lift cursor-pointer"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-accent font-bold shrink-0">₹{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-1.5">
                          {item.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className={`text-[10px] px-1.5 py-0 capitalize ${tagStyles[tag] || "bg-muted"}`}
                            >
                              {tag === "contains-nuts" ? "Nuts" : tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* View full menu CTA */}
        <div className="flex justify-center mt-10">
          <Button asChild size="lg" variant="outline" className="rounded-full font-semibold">
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
