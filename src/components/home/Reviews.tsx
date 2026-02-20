import { Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { reviews, siteConfig } from "@/config/siteConfig";

export const Reviews = () => {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 gold-underline inline-block">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Don't just take our word for it—hear from dessert lovers across Jodhpur.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-xl p-6 card-shadow hover-lift"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-serif font-semibold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {review.source}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "fill-gold text-gold" : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary/5 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-muted-foreground mb-2">
            Average spend: <span className="font-semibold text-foreground">{siteConfig.averageSpend}</span> per person
          </p>
          <Button asChild size="lg" className="bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground rounded-full font-semibold mt-4">
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="w-4 h-4 mr-2" />
              Call for Today's Fresh Bakes
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
