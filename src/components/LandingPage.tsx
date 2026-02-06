'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Trust from '@/components/sections/Trust';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function LandingPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Process />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
