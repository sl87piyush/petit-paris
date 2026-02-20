import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutContent, siteConfig } from "@/config/siteConfig";
export const AboutSnippet = () => {
  return <section className="section-padding bg-primary/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
              <img src="/images/gallery/gallery-34.jpg" alt="Petit Paris café interior" className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 text-accent-foreground p-5 rounded-xl shadow-lg max-w-[200px] bg-[#8ac5ea]">
              <div className="text-3xl font-serif font-bold mb-1">{siteConfig.ratings.google}★</div>
              <div className="text-sm opacity-90">Rated on Google</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
              Our Story
            </h2>

            <div className="prose prose-lg text-muted-foreground mt-8 mb-8">
              <p className="leading-relaxed">
                {aboutContent.story.split("\n\n")[0]}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {aboutContent.knownFor.map((item, index) => <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gold shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>)}
            </div>

            <Button asChild variant="outline" className="rounded-full font-semibold">
              <Link to="/about">
                Read More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
