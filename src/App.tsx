import { AuthProvider } from "./components/AuthContext";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { SeedsSection } from "./components/SeedsSection";
import { VlogSection } from "./components/VlogSection";
import { ProblemSolvingSection } from "./components/ProblemSolvingSection";
import { BranchesSection } from "./components/BranchesSection";
import { ImpactSection } from "./components/ImpactSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Header />
        <div id="home">
          <HeroSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="buy">
          <SeedsSection />
        </div>
        <div id="vlog">
          <VlogSection />
        </div>
        <div id="problems">
          <ProblemSolvingSection />
        </div>
        <div id="branches">
          <BranchesSection />
        </div>
        <ImpactSection />
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
        <Toaster />
      </div>
    </AuthProvider>
  );
}