import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NewsFeed } from "@/components/NewsFeed";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <NewsFeed />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
