import { Mail, Link2, Code2, Heart } from 'lucide-react';

const NAV = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

const SOCIALS = [
  { href: 'https://github.com/gabrielanie',                     icon: <Code2 size={17} />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/gabriel-udoh-85974616b/', icon: <Link2 size={17} />, label: 'LinkedIn' },
  { href: 'mailto:younganiel@gmail.com',                         icon: <Mail  size={17} />, label: 'Email' },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative', zIndex: 1,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(5,5,5,0.85)',
        padding: '2.8rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'flex', flexDirection: 'column', gap: '2rem',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '2.1rem', height: '2.1rem', borderRadius: '9px',
                background: 'linear-gradient(135deg, #16a34a, #0d9488)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 700, fontSize: '0.75rem',
                fontFamily: "'Space Grotesk', sans-serif",
                flexShrink: 0,
              }}
            >
              GA
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: '#f1f5f9', fontSize: '0.9rem' }}>
                Gabriel Anie
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem 1.4rem', justifyContent: 'center' }}>
            {NAV.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  fontSize: '0.83rem', color: '#64748b',
                  transition: 'color 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4ade80')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={s.label}
                style={{
                  width: '2.2rem', height: '2.2rem', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#64748b',
                  transition: 'background 0.18s, border-color 0.18s, color 0.18s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(22,101,52,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(22,101,52,0.35)';
                  e.currentTarget.style.color = '#4ade80';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = '#64748b';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'space-between',
            gap: '0.75rem',
            paddingTop: '1.4rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            fontSize: '0.78rem', color: '#475569',
          }}
        >
          <span>© {new Date().getFullYear()} Gabriel Anietie Udoh. All rights reserved.</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            I Birth Creativity
            <Heart size={12} fill="#16a34a" style={{ color: '#16a34a' }} />
            &amp; Design Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
