import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-primary">
            <TrendingUp className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-mono">CryptoSentinel</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#analysis" className="text-sm font-medium hover:text-primary transition-colors">
            Analysis
          </a>
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-glow-primary">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};
