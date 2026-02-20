import { useState, useMemo } from "react";
import { MessageCircle, Filter, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { menuCategories, menuItems, getWhatsAppUrl, whatsappMessages, MenuItem } from "@/config/siteConfig";

type FilterTag = "bestseller" | "eggless" | "contains-nuts" | "chocolate" | "fruit" | "veg";

const filterOptions: { value: FilterTag; label: string }[] = [
  { value: "bestseller", label: "Bestseller" },
  { value: "eggless", label: "Eggless" },
  { value: "contains-nuts", label: "Contains Nuts" },
  { value: "chocolate", label: "Chocolate" },
  { value: "fruit", label: "Fruit" },
  { value: "veg", label: "Veg" },
];

const tagStyles: Record<string, string> = {
  bestseller: "bg-gold/20 text-gold border-gold/30",
  new: "bg-accent/20 text-accent border-accent/30",
  eggless: "bg-green-100 text-green-700 border-green-200",
  veg: "bg-green-100 text-green-700 border-green-200",
  "contains-nuts": "bg-amber-100 text-amber-700 border-amber-200",
  chocolate: "bg-amber-900/20 text-amber-900 border-amber-900/30",
  fruit: "bg-pink-100 text-pink-700 border-pink-200",
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeFilters, setActiveFilters] = useState<FilterTag[]>([]);

  const filteredItems = useMemo(() => {
    let items = menuItems;

    // Filter by category
    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Filter by tags
    if (activeFilters.length > 0) {
      items = items.filter((item) =>
        activeFilters.some((filter) => item.tags.includes(filter))
      );
    }

    return items;
  }, [activeCategory, activeFilters]);

  const toggleFilter = (filter: FilterTag) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setActiveCategory("all");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary/5 py-12 md:py-20">
        <div className="container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fresh daily bakes, signature cheesecakes, and café favorites. All prices in ₹.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 md:py-6 border-b border-border sticky top-[72px] md:top-[110px] bg-background/95 backdrop-blur-md z-30">
        <div className="container px-3 md:px-6">
          {/* Category tabs */}
          <div className="flex overflow-x-auto gap-2 mb-3 md:mb-4 md:flex-wrap md:justify-center pb-1 -mx-1 px-1 scrollbar-hide">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              All
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Filter chips */}
          <div className="flex overflow-x-auto md:flex-wrap items-center md:justify-center gap-2 pb-1 -mx-1 px-1 scrollbar-hide">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {filterOptions.map((filter) => (
              <button
                key={filter.value}
                onClick={() => toggleFilter(filter.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                  activeFilters.includes(filter.value)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
            {(activeFilters.length > 0 || activeCategory !== "all") && (
              <button
                onClick={clearFilters}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Menu items */}
      <section className="section-padding">
        <div className="container">
          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredItems.length} items
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
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
                  {/* Tags */}
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
                  {/* Category badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs px-2 py-1 rounded-full">
                      {menuCategories.find((c) => c.id === item.category)?.icon}{" "}
                      {menuCategories.find((c) => c.id === item.category)?.label}
                    </span>
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
                      Order on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No items match your filters.</p>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
