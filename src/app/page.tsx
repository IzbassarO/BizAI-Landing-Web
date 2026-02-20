import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Calculator from '@/components/Calculator';
import FeaturesSlider from '@/components/FeaturesSlider';
import CaseStudy from '@/components/CaseStudy';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <FeaturesSlider />
        <CaseStudy />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}