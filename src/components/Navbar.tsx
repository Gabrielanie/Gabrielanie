import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, personal } from '../data/portfolio';
import { scrollTo } from '../lib/scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('home');
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 24);
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const id  = navLinks[i].href.slice(1);
        const el  = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
          scrolled ? 'border-white/10 bg-[#08080d]/90 backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-blue-500 font-display text-xs font-bold text-white">
              GA
            </div>
            <span className="font-display text-sm font-semibold text-white">
              {personal.name}
            </span>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-1">
            {/* Desktop links */}
            {navLinks.map(link => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                  className={`relative hidden px-3.5 py-2 text-sm font-medium transition-colors md:inline-flex ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-brand-500 to-blue-500"
                    />
                  )}
                </a>
              );
            })}

            {/* Hire Me */}
            <a
              href={personal.socials.email}
              className="ml-2 hidden rounded-full bg-linear-to-r from-brand-600 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-shadow hover:shadow-lg hover:shadow-brand-600/35 md:inline-flex"
            >
              Hire Me
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-1 bg-[#08080d]"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); setOpen(false); scrollTo(link.href); }}
                className={`rounded-xl px-10 py-2 font-display text-2xl font-semibold ${
                  active === link.href.slice(1) ? 'text-brand-400' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personal.socials.email}
              className="mt-6 rounded-full bg-linear-to-r from-brand-600 to-blue-600 px-9 py-3 text-lg font-semibold text-white"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
