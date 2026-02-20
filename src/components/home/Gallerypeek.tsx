import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/config/siteConfig";

export const GalleryPeek = () => {
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 gold-underline inline-block">
            Sweet Moments
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            A peek into our kitchen, café, and the celebrations we've been part of.
          </p>
        </div>

        {/* Gallery grid - asymmetric masonry-like */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large left */}
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src={previewImages[0]?.src}
              alt={previewImages[0]?.alt}
              className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Small right stack */}
          {previewImages.slice(1, 5).map((image, index) => (
            <div
              key={image.id}
              className="rounded-xl overflow-hidden relative group aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* View more tile */}
          <Link
            to="/gallery"
            className="rounded-xl bg-primary/10 aspect-square flex flex-col items-center justify-center gap-2 group hover:bg-primary/20 transition-colors"
          >
            <span className="text-3xl">📸</span>
            <span className="font-medium text-primary group-hover:underline">View All</span>
          </Link>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Button asChild size="lg" variant="outline" className="rounded-full font-semibold">
            <Link to="/gallery">
              Explore Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
