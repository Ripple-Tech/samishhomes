import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EstatesSection from "@/components/EstatesSection";
import PropertiesSection from "@/components/PropertiesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PlotSizes from "@/components/PlotSizes";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <EstatesSection />
      <PropertiesSection />
      <WhyChooseUs />
      <PlotSizes />
      <CTASection />
      <Footer />
    </main>
  );
}
