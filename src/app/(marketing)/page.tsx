import Benefits from "../components/sections/Benefits";
import BlogPreview from "../components/sections/BlogPreview";
import CTAFinal from "../components/sections/CTAFinal";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import ProblemSolution from "../components/sections/ProblemSolution";
import Security from "../components/sections/Security";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Benefits />
      <BlogPreview />
      <Testimonials />
      <HowItWorks />
      <Security />
      <CTAFinal />
    </main>
  );
}
