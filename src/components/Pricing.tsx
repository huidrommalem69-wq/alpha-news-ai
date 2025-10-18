import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Access to 50 news sources",
      "Basic sentiment analysis",
      "Daily market summaries",
      "Email reports (weekly)",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "$29",
    description: "For serious crypto traders",
    features: [
      "Access to 200+ news sources",
      "Advanced AI sentiment analysis",
      "Real-time market insights",
      "Email & SMS alerts",
      "Predictive analytics",
      "Priority support",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For institutions and teams",
    features: [
      "Access to all 500+ sources",
      "Deep AI analysis with custom models",
      "White-label reports",
      "Custom data feeds",
      "Dedicated account manager",
      "Advanced API with higher limits",
      "Custom integrations",
      "24/7 premium support"
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="text-accent">Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free and upgrade as you grow. All plans include 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 relative ${
                plan.popular ? 'shadow-glow-primary border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold font-mono">{plan.price}</span>
                  {plan.price !== "$0" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 shadow-glow-primary' 
                    : 'bg-secondary hover:bg-secondary/90'
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
