import { Hero } from "@/components/Hero";
import { StatsDashboard } from "@/components/StatsDashboard";
import { HowItWorks } from "@/components/HowItWorks";
import { RewardSection } from "@/components/RewardSection";
import { Transparency } from "@/components/Transparency";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsDashboard />
      <HowItWorks />
      <RewardSection />
      <Transparency />
    </>
  );
}
