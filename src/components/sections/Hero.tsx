import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download, Code2, Link2 } from 'lucide-react';
import { personal } from '../../data/portfolio';

const TECH_BADGES = ['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'Tailwind CSS'];

function useTypewriter(items: string[]) {
  const [index,     setIndex]     = useState(0);
  const [text,      setText]      = useState('');
  const [deleting,  setDeleting]  = useState(false);
  const [charPos,   setCharPos]   = useState(0);

  useEffect(() => {
    const word = items[index];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && charPos < word.length) {
      t = setTimeout(() => { setText(word.slice(0, charPos + 1)); setCharPos(c => c + 1); }, 65);
    } else if (!deleting && charPos === word.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charPos > 0) {
      t = setTimeout(() => { setText(word.slice(0, charPos - 1)); setCharPos(c => c - 1); }, 38);
    } else {
      setDeleting(false);
      setIndex(i => (i + 1) % items.length);
    }
    return () => clearTimeout(t);
  }, [charPos, deleting, index, items]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(personal.roles);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
        zIndex: 1,
      }}
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: '1280px', margin: '0 auto',
          padding: '5rem 1.5rem',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >

          {/* ── Left column ── */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.32rem 0.9rem', borderRadius: '999px', marginBottom: '1.8rem',
                background: 'rgba(22,101,52,0.12)',
                border: '1px solid rgba(22,101,52,0.28)',
                fontSize: '0.82rem', fontWeight: 500, color: '#4ade80',
              }}
            >
              <span
                style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 8px rgba(34,197,94,0.7)',
                  flexShrink: 0,
                }}
              />
              Available for new projects
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.35, 1] }}
              style={{
                fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '0.6rem',
                color: '#f1f5f9',
              }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Gabriel Anie
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                height: '2rem', marginBottom: '1.4rem',
                fontSize: '1.15rem', fontWeight: 500, color: '#4ade80',
                display: 'flex', alignItems: 'center', gap: '2px',
              }}
            >
              {role}
              <span className="cursor-blink" style={{ color: '#16a34a', marginLeft: '1px' }}>|</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              style={{
                fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.75,
                maxWidth: '460px', marginBottom: '2rem',
              }}
            >
              {personal.tagline}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '2.5rem',
                marginBottom: '2.2rem',
              }}
            >
              {personal.stats.map(s => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: '1.9rem', fontWeight: 800, lineHeight: 1,
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: 'linear-gradient(135deg, #16a34a, #22c55e)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}
            >
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  padding: '0.7rem 1.6rem', borderRadius: '999px',
                  background: 'linear-gradient(135deg, #16a34a, #0d9488)',
                  color: '#fff', fontWeight: 600, fontSize: '0.92rem',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 6px 22px rgba(22,101,52,0.45)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                View My Work <ArrowDown size={15} />
              </a>
              <a
                href="mailto:younganiel@gmail.com"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  padding: '0.7rem 1.6rem', borderRadius: '999px',
                  background: 'rgba(22,101,52,0.08)',
                  border: '1px solid rgba(22,101,52,0.35)',
                  color: '#4ade80', fontWeight: 600, fontSize: '0.92rem',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(22,101,52,0.16)';
                  e.currentTarget.style.borderColor = 'rgba(22,101,52,0.55)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(22,101,52,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(22,101,52,0.35)';
                }}
              >
                <Mail size={15} /> Get In Touch
              </a>
              <a
                href="/Gabriel_Udoh.pdf"
                download="Gabriel_Udoh.pdf"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  padding: '0.7rem 1.6rem', borderRadius: '999px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#94a3b8', fontWeight: 600, fontSize: '0.92rem',
                  transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                  e.currentTarget.style.color = '#f1f5f9';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.color = '#94a3b8';
                }}
              >
                <Download size={15} /> Download CV
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              {[
                { href: personal.socials.github,   icon: <Code2 size={19} />, label: 'GitHub' },
                { href: personal.socials.linkedin,  icon: <Link2 size={19} />, label: 'LinkedIn' },
                { href: personal.socials.email,     icon: <Mail size={19} />,  label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '2.4rem', height: '2.4rem', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: '#94a3b8',
                    transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(22,101,52,0.16)';
                    e.currentTarget.style.borderColor = 'rgba(22,101,52,0.4)';
                    e.currentTarget.style.color = '#4ade80';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  {s.icon}
                </a>
              ))}
              <div style={{ width: '1px', height: '22px', background: 'rgba(255,255,255,0.1)' }} />
              <a
                href="/Gabriel_Udoh.pdf"
                download="Gabriel_Udoh.pdf"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.82rem', fontWeight: 500, color: '#64748b',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#4ade80')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                <Download size={14} /> Resume
              </a>
            </motion.div>
          </div>

          {/* ── Right column (visual) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.35, 1] }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', minHeight: '380px',
            }}
          >
            {/* Glow behind avatar */}
            <div
              aria-hidden="true"
              className="float"
              style={{
                position: 'absolute',
                width: '340px', height: '340px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(22,101,52,0.18) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />

            {/* Avatar ring */}
            <div
              className="float"
              style={{
                position: 'relative',
                width: '280px', height: '280px', borderRadius: '50%',
                border: '2px solid rgba(22,101,52,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '250px', height: '250px', borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid rgba(22,101,52,0.2)',
                }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Gabriel Anie"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>

            {/* Floating tech badges */}
            {TECH_BADGES.map((badge, i) => {
              const angle = (i / TECH_BADGES.length) * 2 * Math.PI;
              const r = 190;
              const x = Math.cos(angle - Math.PI / 2) * r;
              const y = Math.sin(angle - Math.PI / 2) * r;
              return (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 220 }}
                  style={{
                    position: 'absolute',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    top: '50%', left: '50%',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px',
                    background: 'rgba(10,10,10,0.88)',
                    border: '1px solid rgba(22,101,52,0.3)',
                    color: '#4ade80',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(8px)',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    animation: `float-y ${4 + i * 0.5}s ease-in-out ${i * 0.35}s infinite`,
                  }}
                >
                  {badge}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          color: '#475569', cursor: 'pointer',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
