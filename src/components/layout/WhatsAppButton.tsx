import { MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppUrl, whatsappMessages } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 md:w-16 md:h-16",
        "bg-[#25D366] hover:bg-[#20BD5A] text-white",
        "rounded-full shadow-lg hover:shadow-xl",
        "flex items-center justify-center",
        "transition-all duration-300 hover:scale-110",
        "whatsapp-pulse"
      )}
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-current" />
    </a>
  );
};
