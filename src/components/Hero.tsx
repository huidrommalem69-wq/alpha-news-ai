import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">AI-Powered Crypto Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Real-Time Crypto News
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Sentiment Analysis
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automated cryptocurrency news aggregation with AI-driven sentiment tracking. 
            Make informed decisions with comprehensive market insights and predictive analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow-primary group">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-secondary hover:bg-secondary/10">
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold font-mono text-accent">500+</div>
              <div className="text-sm text-muted-foreground">News Sources</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Live Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
