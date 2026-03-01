import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('home');
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 48);
      for (let i = LINKS.length - 1; i >= 0; i--) {
        const id  = LINKS[i].href.slice(1);
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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 1, 0.35, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(5,5,5,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); scrollTo('#home'); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <div
              style={{
                width: '2.15rem', height: '2.15rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #16a34a, #0d9488)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 700, fontSize: '0.78rem',
                fontFamily: "'Space Grotesk', sans-serif",
                flexShrink: 0,
              }}
            >
              GA
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600, color: '#f1f5f9', fontSize: '0.95rem',
              }}
            >
              Gabriel Anie
            </span>
          </a>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>

            {/* Desktop links — hidden on narrow viewports via inline responsive trick */}
            {LINKS.map(link => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                  className="hidden md:inline-flex"
                  style={{
                    position: 'relative',
                    padding: '0.42rem 0.95rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: isActive ? '#f1f5f9' : '#94a3b8',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = '#f1f5f9';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      style={{
                        position: 'absolute', inset: 0, borderRadius: '8px',
                        background: 'rgba(22,101,52,0.16)', zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}

            {/* Hire Me */}
            <a
              href="mailto:younganiel@gmail.com"
              className="hidden md:inline-flex"
              style={{
                marginLeft: '0.6rem',
                padding: '0.45rem 1.2rem',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #16a34a, #0d9488)',
                color: '#fff',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 18px rgba(22,101,52,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              Hire Me
            </a>

            {/* Hamburger — only visible on mobile */}
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden"
              style={{
                marginLeft: '0.5rem',
                width: '2.35rem', height: '2.35rem',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#f1f5f9',
              }}
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
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: 'rgba(5,5,5,0.97)',
              backdropFilter: 'blur(22px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
            }}
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.055 }}
                onClick={e => { e.preventDefault(); setOpen(false); scrollTo(link.href); }}
                style={{
                  display: 'block',
                  fontSize: '1.65rem', fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: active === link.href.slice(1) ? '#4ade80' : '#f1f5f9',
                  padding: '0.55rem 2.5rem', borderRadius: '12px',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="mailto:younganiel@gmail.com"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: LINKS.length * 0.055 }}
              style={{
                marginTop: '1.4rem',
                padding: '0.85rem 2.8rem',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #16a34a, #0d9488)',
                color: '#fff',
                fontSize: '1.1rem', fontWeight: 600,
              }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
