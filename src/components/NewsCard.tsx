import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, ExternalLink } from "lucide-react";

interface NewsCardProps {
  title: string;
  source: string;
  sentiment: "positive" | "negative" | "neutral";
  sentimentScore: number;
  summary: string;
  timestamp: string;
  url: string;
}

export const NewsCard = ({ 
  title, 
  source, 
  sentiment, 
  sentimentScore, 
  summary, 
  timestamp,
  url 
}: NewsCardProps) => {
  const getSentimentIcon = () => {
    switch (sentiment) {
      case "positive":
        return <TrendingUp className="w-4 h-4" />;
      case "negative":
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getSentimentColor = () => {
    switch (sentiment) {
      case "positive":
        return "bg-accent/20 text-accent border-accent/30";
      case "negative":
        return "bg-destructive/20 text-destructive border-destructive/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <Card className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-muted-foreground font-mono">{source}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <Badge className={`${getSentimentColor()} flex items-center gap-1 px-3 py-1`}>
          {getSentimentIcon()}
          <span className="font-mono text-xs">{sentimentScore}%</span>
        </Badge>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {summary}
      </p>
      
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
      >
        Read full article
        <ExternalLink className="w-3 h-3" />
      </a>
    </Card>
  );
};
