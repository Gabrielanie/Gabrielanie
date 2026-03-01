import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      style={{ position: 'relative', zIndex: 1, padding: '7rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients "
          accent="say about me"
          description="Feedback from people I've had the pleasure of working with."
        />

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.25rem',
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{
                padding: '1.6rem',
                borderRadius: '16px',
                background: '#0d0d0d',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', flexDirection: 'column', gap: '1rem',
                position: 'relative',
                transition: 'transform 0.22s, border-color 0.22s, box-shadow 0.22s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = `${t.color}30`;
                e.currentTarget.style.boxShadow = `0 12px 36px ${t.color}12`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Background quote icon */}
              <Quote
                size={26}
                style={{
                  position: 'absolute', top: '1.2rem', right: '1.2rem',
                  color: t.color, opacity: 0.1,
                }}
              />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px' }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                ))}
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.8,
                  flex: 1,
                }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.7rem',
                  paddingTop: '0.8rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    width: '2.4rem', height: '2.4rem', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.78rem', fontWeight: 700,
                    background: `${t.color}1e`, color: t.color,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.88rem', fontWeight: 600, color: '#f1f5f9',
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
