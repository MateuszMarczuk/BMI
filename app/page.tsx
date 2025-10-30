import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Regions from "@/components/Regions";
import Calculator from "@/components/Calculator";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import SEOContent from "@/components/SEOContent";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Regions />
      <Calculator />
      <WhyUs />
      <FAQ />
      <SEOContent />
      <Contact />
      <Footer />
    </main>
  );
}
