import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { menuItems, getWhatsAppUrl, whatsappMessages } from "@/config/siteConfig";

const bestsellers = menuItems.filter((item) => item.tags.includes("bestseller")).slice(0, 6);

const tagStyles: Record<string, string> = {
  bestseller: "bg-gold/20 text-gold border-gold/30",
  new: "bg-accent/20 text-accent border-accent/30",
  eggless: "bg-green-100 text-green-700 border-green-200",
  veg: "bg-green-100 text-green-700 border-green-200",
  "contains-nuts": "bg-amber-100 text-amber-700 border-amber-200",
  chocolate: "bg-amber-900/20 text-amber-900 border-amber-900/30",
  fruit: "bg-pink-100 text-pink-700 border-pink-200",
};

export const Bestsellers = () => {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 gold-underline inline-block">
            Our Bestsellers
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            The crowd favorites that keep Jodhpur coming back for more. Fresh daily, loved always.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-children">
          {bestsellers.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover-lift"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Tags overlay */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`text-xs capitalize ${tagStyles[tag] || ""}`}
                    >
                      {tag.replace("-", " ")}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-accent shrink-0">
                    ₹{item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground"
                >
                  <a
                    href={getWhatsAppUrl(whatsappMessages.menuItem(item.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
