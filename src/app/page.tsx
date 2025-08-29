import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import ProblemSolution from "./components/sections/ProblemSolution";
import Benefits from "./components/sections/Benefits";
import Testimonials from "./components/sections/Testimonials";
import HowItWorks from "./components/sections/HowItWorks";
import Security from "./components/sections/Security";
import CTAFinal from "./components/sections/CTAFinal";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Testimonials />
      <HowItWorks />
      <Security />
      <CTAFinal />
      <Footer />
    </main>
  );
}
