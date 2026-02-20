import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Bestsellers } from "@/components/home/Bestsellers";
import { OrderSteps } from "@/components/home/OrderSteps";
import { MenuPreview } from "@/components/home/MenuPreview";
import { GalleryPeek } from "@/components/home/GalleryPeek";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { Reviews } from "@/components/home/Reviews";
import { VisitUs } from "@/components/home/VisitUs";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <OrderSteps />
      <MenuPreview />
      <GalleryPeek />
      <AboutSnippet />
      <Reviews />
      <VisitUs />
    </Layout>
  );
};

export default Index;
