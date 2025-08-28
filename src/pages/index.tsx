// pages/index.tsx

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Shop from '../components/Shop';
import BlogSection from '../components/Blog'; // Zmieniono nazwę na BlogSection dla jasności
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Shop />
      <BlogSection />
      <Contact />
    </>
  )
}