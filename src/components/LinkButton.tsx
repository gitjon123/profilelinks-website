import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LinkButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  variant?: "default" | "social";
}

export const LinkButton = ({ href, icon: Icon, label, variant = "default" }: LinkButtonProps) => {
  return (
    <Button
      asChild
      className={`
        w-full h-14 text-lg font-medium transition-all duration-300 transform
        ${variant === "social" 
          ? "bg-gradient-card hover:bg-gradient-primary border-border/50 hover:border-primary/50 hover:scale-105 hover:shadow-glow animate-fade-in" 
          : "bg-gradient-primary hover:bg-primary-glow hover:scale-105 hover:shadow-glow animate-fade-in"
        }
      `}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="mr-3 h-5 w-5" />
        {label}
      </a>
    </Button>
  );
};