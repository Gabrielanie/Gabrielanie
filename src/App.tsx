import './index.css';
import Navbar       from './components/Navbar';
import Hero         from './components/sections/Hero';
import About        from './components/sections/About';
import Skills       from './components/sections/Skills';
import Projects     from './components/sections/Projects';
import Experience   from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Contact      from './components/sections/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      {/* Ambient background orbs */}
      <div className="orb orb-green" aria-hidden="true" />
      <div className="orb orb-teal"  aria-hidden="true" />
      <div className="orb orb-lime"  aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
