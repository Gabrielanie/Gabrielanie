import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, studio } from '../data/portfolio';
import { scrollTo } from '../lib/scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('home');
  const [open,     setOpen]     = useState(false);

  const menuRef    = useRef<HTMLDivElement>(null);
  const toggleRef  = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 24);
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const id  = navLinks[i].href.slice(1);
        const el  = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(id);
          break;
        }
      }
      ticking = false;
    };
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Mobile menu: focus trap + Escape to close + restore focus on close
  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a[href]');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const toggleEl = toggleRef.current;
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      toggleEl?.focus();
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
          scrolled ? 'border-white/10 bg-[#000000]/90 backdrop-blur-md' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-blue-500 font-display text-xs font-bold text-black">
              GA
            </div>
            <span className="font-display text-sm font-semibold text-white">
              {studio.name}
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

            {/* Start a Project */}
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
              className="ml-2 hidden rounded-full bg-linear-to-r from-brand-600 to-blue-600 px-5 py-2 text-sm font-semibold text-black shadow-md shadow-brand-600/25 transition-shadow hover:shadow-lg hover:shadow-brand-600/35 md:inline-flex"
            >
              Start a Project
            </a>

            {/* Hamburger */}
            <button
              ref={toggleRef}
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
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
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-1 bg-[#000000]"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                ref={i === 0 ? firstLinkRef : undefined}
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
              href="#contact"
              onClick={e => { e.preventDefault(); setOpen(false); scrollTo('#contact'); }}
              className="mt-6 rounded-full bg-linear-to-r from-brand-600 to-blue-600 px-9 py-3 text-lg font-semibold text-black"
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
