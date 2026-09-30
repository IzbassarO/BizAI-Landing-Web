import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Recognition from '@/components/Recognition';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import FeaturesSlider from '@/components/FeaturesSlider';
import Results from '@/components/Results';
import Press from '@/components/Press';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Recognition />
        <Problem />
        <HowItWorks />
        <FeaturesSlider />
        <Results />
        <Press />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
