import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experience, type Experience as ExpType } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

/* ── Single timeline entry — own component so useInView is called at top level ── */
function ExperienceItem({ exp, index, isLast }: { exp: ExpType; index: number; isLast: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.35, 1] }}
      style={{ display: 'flex', gap: '1.25rem' }}
    >
      {/* Timeline dot + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div
          style={{
            width: '2.4rem', height: '2.4rem', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.78rem', fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            background: exp.current
              ? 'linear-gradient(135deg, #16a34a, #0d9488)'
              : 'rgba(255,255,255,0.05)',
            border: exp.current ? 'none' : '1px solid rgba(255,255,255,0.1)',
            color: exp.current ? '#fff' : '#64748b',
            boxShadow: exp.current ? '0 4px 14px rgba(22,101,52,0.4)' : 'none',
            flexShrink: 0,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
        {!isLast && (
          <div
            style={{
              width: '1px', flex: 1, minHeight: '2rem', margin: '0.4rem 0',
              background: 'linear-gradient(to bottom, rgba(22,101,52,0.35), transparent)',
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        style={{
          flex: 1,
          marginBottom: isLast ? 0 : '1.5rem',
          padding: '1.4rem 1.6rem',
          borderRadius: '16px',
          background: '#0d0d0d',
          border: exp.current
            ? '1px solid rgba(22,101,52,0.22)'
            : '1px solid rgba(255,255,255,0.06)',
          transition: 'border-color 0.22s, box-shadow 0.22s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(22,101,52,0.3)';
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(22,101,52,0.1)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = exp.current
            ? 'rgba(22,101,52,0.22)'
            : 'rgba(255,255,255,0.06)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Role row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
          <h3
            style={{
              fontSize: '1.05rem', fontWeight: 600, color: '#f1f5f9',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {exp.role}
          </h3>
          {exp.current && (
            <span
              style={{
                fontSize: '0.65rem', fontWeight: 700,
                padding: '0.18rem 0.5rem', borderRadius: '999px',
                background: 'rgba(22,101,52,0.15)',
                border: '1px solid rgba(22,101,52,0.3)',
                color: '#4ade80',
              }}
            >
              Current
            </span>
          )}
        </div>

        {/* Company */}
        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#4ade80', marginBottom: '0.65rem' }}>
          {exp.company}
        </div>

        {/* Meta */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginBottom: '1rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#64748b' }}>
            <Calendar size={12} /> {exp.period}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: '#64748b' }}>
            <MapPin size={12} /> {exp.location}
          </span>
        </div>

        {/* Achievements */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {exp.achievements.map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex', gap: '0.6rem', alignItems: 'flex-start',
                fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.7,
              }}
            >
              <CheckCircle2 size={14} style={{ color: '#16a34a', marginTop: '4px', flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export default function Experience() {
  return (
    <section
      id="experience"
      style={{ position: 'relative', zIndex: 1, padding: '7rem 1.5rem' }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <SectionHeading
          eyebrow="Work History"
          title="My "
          accent="Experience"
          description="A track record of building products that matter, across industries and continents."
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experience.map((exp, index) => (
            <ExperienceItem
              key={`${exp.company}-${index}`}
              exp={exp}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
