import { useState } from "react";
import { X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { galleryImages } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

type Category = "all" | "cakes" | "cafe" | "celebrations";

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "cakes", label: "Cakes & Desserts" },
  { value: "cafe", label: "Café Vibes" },
  { value: "celebrations", label: "Celebrations" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary/5 py-12 md:py-20">
        <div className="container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sweet moments, beautiful creations, and café vibes. A peek into our world.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-4 md:py-6 border-b border-border sticky top-[72px] md:top-[110px] bg-background/95 backdrop-blur-md z-30">
        <div className="container px-3 md:px-6">
          <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-2 pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap shrink-0",
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-padding">
        <div className="container">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
              >
                <div className="relative rounded-xl overflow-hidden card-shadow">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={cn(
                      "w-full object-cover group-hover:scale-105 transition-transform duration-500",
                      index % 3 === 0 ? "aspect-square" : index % 3 === 1 ? "aspect-[4/5]" : "aspect-[3/4]"
                    )}
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium bg-foreground/50 backdrop-blur-sm px-4 py-2 rounded-full">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/30 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage.replace("w=600", "w=1200").replace("h=400", "h=800")}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
