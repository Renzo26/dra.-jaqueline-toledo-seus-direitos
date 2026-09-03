import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const WHATSAPP_URL = "https://wa.me/5511958074409";

interface Props extends Pick<ButtonProps, "variant" | "size"> {
  children: React.ReactNode;
  className?: string;
}

export function WhatsAppButton({
  children,
  className,
  variant = "whatsapp",
  size = "xl",
}: Props) {
  return (
    <Button asChild variant={variant} size={size} className={cn("group", className)}>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="transition-transform group-hover:scale-110" />
        <span>{children}</span>
      </a>
    </Button>
  );
}
