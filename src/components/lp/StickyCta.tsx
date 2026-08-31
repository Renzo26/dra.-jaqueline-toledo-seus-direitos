import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./WhatsAppButton";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-[image:var(--gradient-wine)] p-3 md:hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold text-sm font-semibold text-wine-deep"
      >
        <MessageCircle className="size-5" />
        Falar pelo WhatsApp
      </a>
    </div>
  );
}
