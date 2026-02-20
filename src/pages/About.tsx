import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { aboutContent, siteConfig } from "@/config/siteConfig";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/gallery-38.jpg"
            alt="Café ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where Parisian elegance meets Jodhpur's Blue City charm
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
                <img
                  src="/images/gallery/gallery-34.jpg"
                  alt="Petit Paris interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 gold-underline inline-block">
                {siteConfig.name}
              </h2>
              
              <div className="prose prose-lg text-muted-foreground mt-8 space-y-4">
                {aboutContent.story.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we're known for */}
      <section className="section-padding bg-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3 gold-underline inline-block">
              What We're Known For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {aboutContent.knownFor.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 card-shadow text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-3xl">
                    {index === 0 ? "🧀" : index === 1 ? "🥐" : "🎂"}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center gold-underline inline-block">
              Our Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {aboutContent.values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card p-4 rounded-xl card-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to taste the magic?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Visit us at Sardarpura or order your favorite treats on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#88C4EA] hover:bg-[#7AB0D3] text-primary-foreground font-semibold px-8 rounded-full"
            >
              <Link to="/menu">
                Explore Menu
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 rounded-full"
            >
              <Link to="/contact">
                Visit Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
