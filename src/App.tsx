import './index.css';
import Navbar       from './components/Navbar';
import Hero         from './components/sections/Hero';
import Services     from './components/sections/Services';
import Projects     from './components/sections/Projects';
import Process      from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import About        from './components/sections/About';
import Experience   from './components/sections/Experience';
import Skills       from './components/sections/Skills';
import Contact      from './components/sections/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
