import { Card } from "@/components/ui/card";
import { Brain, Newspaper, FileText, TrendingUp, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Newspaper,
    title: "Multi-Source Aggregation",
    description: "Automatically collect news from 500+ cryptocurrency sources including major exchanges, news outlets, and social media"
  },
  {
    icon: Brain,
    title: "AI Sentiment Analysis",
    description: "Advanced transformer models analyze market sentiment with 98% accuracy, detecting nuanced emotions and trends"
  },
  {
    icon: FileText,
    title: "Comprehensive Reports",
    description: "Generate detailed market reports with insights, summaries, and actionable recommendations"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Leverage historical data and AI to forecast potential market movements based on news sentiment"
  },
  {
    icon: Shield,
    title: "Verified Sources",
    description: "All news sources are verified and ranked by reliability to ensure high-quality information"
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "24/7 monitoring with instant notifications for significant market sentiment shifts"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful <span className="text-secondary">AI Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to stay ahead in the cryptocurrency market
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-glow-accent">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
