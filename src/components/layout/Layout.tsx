import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 paper-texture pointer-events-none z-0" />
      
      <Navbar />
      <main className="flex-1 relative z-10 pt-[72px] md:pt-[110px]">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
