import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StoryVideo from "@/components/StoryVideo";
import Problem from "@/components/Problem";
import SocialProof from "@/components/SocialProof";
import WhyEdorena from "@/components/WhyEdorena";
import Product from "@/components/Product";
import BuiltFor from "@/components/BuiltFor";
import FounderStory from "@/components/FounderStory";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FullDemo from "@/components/FullDemo";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StoryVideo />
      <Problem />
      <SocialProof />
      <WhyEdorena />
      <Product />
      <FullDemo />
      <BuiltFor />
      <FounderStory />
      <FinalCTA />
      <Footer />
    </main>
  );
}
