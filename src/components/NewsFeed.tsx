import { NewsCard } from "./NewsCard";

const mockNews = [
  {
    title: "Bitcoin Surges Past $65K as Institutional Adoption Accelerates",
    source: "CoinDesk",
    sentiment: "positive" as const,
    sentimentScore: 87,
    summary: "Major financial institutions announce increased Bitcoin holdings, driving prices to new quarterly highs. Market analysts predict continued upward momentum.",
    timestamp: "2h ago",
    url: "#"
  },
  {
    title: "Ethereum Network Upgrade Postponed Due to Security Concerns",
    source: "CryptoNews",
    sentiment: "negative" as const,
    sentimentScore: 34,
    summary: "Core developers identify critical vulnerability requiring additional testing. Community remains optimistic about long-term stability improvements.",
    timestamp: "4h ago",
    url: "#"
  },
  {
    title: "SEC Provides Clarity on Cryptocurrency Regulation Framework",
    source: "Bloomberg Crypto",
    sentiment: "neutral" as const,
    sentimentScore: 62,
    summary: "New regulatory guidelines aim to balance innovation with investor protection. Industry leaders welcome increased transparency.",
    timestamp: "6h ago",
    url: "#"
  },
  {
    title: "DeFi Platform Reports Record $2B in Daily Trading Volume",
    source: "DeFi Pulse",
    sentiment: "positive" as const,
    sentimentScore: 91,
    summary: "Decentralized exchange reaches milestone as users seek alternative trading venues. Liquidity providers see increased returns.",
    timestamp: "8h ago",
    url: "#"
  },
  {
    title: "Major Exchange Suffers Brief Service Disruption During Peak Hours",
    source: "CoinTelegraph",
    sentiment: "negative" as const,
    sentimentScore: 28,
    summary: "Technical issues resolved within 45 minutes. Platform reassures users all funds remain secure and accessible.",
    timestamp: "10h ago",
    url: "#"
  },
  {
    title: "NFT Market Shows Signs of Stabilization After Volatile Quarter",
    source: "NFT News",
    sentiment: "neutral" as const,
    sentimentScore: 58,
    summary: "Trading volumes normalize as market matures. Blue-chip collections maintain value while speculative assets decline.",
    timestamp: "12h ago",
    url: "#"
  }
];

export const NewsFeed = () => {
  return (
    <section id="analysis" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Latest Market <span className="text-primary">Sentiment Analysis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time AI analysis of cryptocurrency news from hundreds of trusted sources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};
