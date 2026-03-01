import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Briefcase, Zap, Download } from 'lucide-react';
import { personal } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.25, 1, 0.35, 1] as [number, number, number, number] },
  });

  return (
    <section
      id="about"
      style={{ position: 'relative', zIndex: 1, padding: '7rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into "
          accent="impactful products"
        />

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Avatar card */}
          <motion.div {...anim(0)} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', maxWidth: '360px', width: '100%' }}>
              <div
                style={{
                  aspectRatio: '1',
                  borderRadius: '24px',
                  background: 'linear-gradient(145deg, #0a1f10, #0d1a14)',
                  border: '1px solid rgba(22,101,52,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Dot pattern */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(rgba(34,197,94,0.1) 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                  }}
                />
                <div
                  style={{
                    position: 'relative', zIndex: 1,
                    width: '160px', height: '160px', borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid rgba(22,101,52,0.35)',
                  }}
                >
                  <img
                    src="/images/profile.jpg"
                    alt="Gabriel Anie"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>

              {/* Stats badge */}
              <motion.div
                {...anim(0.3)}
                style={{
                  position: 'absolute', bottom: '-1.4rem', right: '-1rem',
                  padding: '1rem 1.4rem',
                  background: '#0f0f0f',
                  border: '1px solid rgba(22,101,52,0.22)',
                  borderRadius: '16px',
                  display: 'flex', gap: '1.4rem',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                }}
              >
                {personal.stats.map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: '1.45rem', fontWeight: 800,
                        fontFamily: "'Space Grotesk', sans-serif",
                        background: 'linear-gradient(135deg, #16a34a, #22c55e)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1.1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '3px', whiteSpace: 'nowrap' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div style={{ paddingBottom: '1rem' }}>
            {/* Info pills */}
            <motion.div
              {...anim(0.1)}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.8rem' }}
            >
              {[
                { icon: <MapPin size={13} />, label: personal.location },
                { icon: <Briefcase size={13} />, label: personal.title },
                { icon: <Zap size={13} />, label: personal.availability, green: true },
              ].map(p => (
                <div
                  key={p.label}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.38rem',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '999px',
                    background: p.green ? 'rgba(22,101,52,0.12)' : 'rgba(255,255,255,0.04)',
                    border: p.green ? '1px solid rgba(22,101,52,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    color: p.green ? '#4ade80' : '#94a3b8',
                    fontSize: '0.8rem',
                  }}
                >
                  {p.icon} {p.label}
                </div>
              ))}
            </motion.div>

            {/* Bio */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {personal.bio.map((para, i) => (
                <motion.p
                  key={i}
                  {...anim(0.15 + i * 0.1)}
                  style={{ fontSize: '0.97rem', color: '#94a3b8', lineHeight: 1.8 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              {...anim(0.45)}
              href="/Gabriel_Anietie_Udoh_CV_.docx"
              download
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.65rem 1.5rem', borderRadius: '999px',
                background: 'rgba(22,101,52,0.1)',
                border: '1px solid rgba(22,101,52,0.3)',
                color: '#4ade80', fontWeight: 600, fontSize: '0.88rem',
                transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(22,101,52,0.18)';
                e.currentTarget.style.borderColor = 'rgba(22,101,52,0.5)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(22,101,52,0.22)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(22,101,52,0.1)';
                e.currentTarget.style.borderColor = 'rgba(22,101,52,0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Download size={15} /> Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
