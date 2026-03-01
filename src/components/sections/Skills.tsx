import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function Skills() {
  const [activeId, setActiveId] = useState(skills[0].id);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const active = skills.find(s => s.id === activeId)!;

  return (
    <section
      id="skills"
      style={{ position: 'relative', zIndex: 1, padding: '7rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeading
          eyebrow="Technical Skills"
          title="My "
          accent="Tech Stack"
          description="Tools and technologies I use to build scalable, performant applications."
        />

        <div ref={ref}>
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex', flexWrap: 'wrap',
              justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem',
            }}
          >
            {skills.map(skill => {
              const isActive = skill.id === activeId;
              return (
                <button
                  key={skill.id}
                  onClick={() => setActiveId(skill.id)}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: '999px',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    color: isActive ? '#fff' : '#94a3b8',
                    background: isActive ? skill.color : 'rgba(255,255,255,0.04)',
                    border: isActive
                      ? `1px solid ${skill.color}`
                      : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isActive ? `0 4px 14px ${skill.color}40` : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {skill.label}
                </button>
              );
            })}
          </motion.div>

          {/* Tag grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: '2.5rem',
                borderRadius: '20px',
                background: '#0d0d0d',
                border: `1px solid ${active.color}22`,
              }}
            >
              <div
                style={{
                  display: 'flex', flexWrap: 'wrap',
                  gap: '0.65rem', justifyContent: 'center',
                }}
              >
                {active.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.035, type: 'spring', stiffness: 280 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.45rem 1rem',
                      borderRadius: '10px',
                      background: `${active.color}0e`,
                      border: `1px solid ${active.color}20`,
                      color: '#e2e8f0',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'transform 0.18s, background 0.18s, box-shadow 0.18s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = `${active.color}1c`;
                      e.currentTarget.style.boxShadow = `0 4px 10px ${active.color}20`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.background = `${active.color}0e`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span
                      style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: active.color, flexShrink: 0,
                      }}
                    />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Count strip */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${skills.length}, 1fr)`,
              gap: '0.75rem',
              marginTop: '1.25rem',
            }}
          >
            {skills.map(skill => (
              <button
                key={skill.id}
                onClick={() => setActiveId(skill.id)}
                style={{
                  padding: '0.85rem 0.5rem',
                  borderRadius: '14px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: activeId === skill.id ? `${skill.color}14` : '#0d0d0d',
                  border: activeId === skill.id
                    ? `1px solid ${skill.color}38`
                    : '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.2s',
                }}
              >
                <div
                  style={{
                    fontSize: '1.35rem', fontWeight: 800, lineHeight: 1,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: skill.color,
                  }}
                >
                  {skill.items.length}
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '4px' }}>
                  {skill.label}
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
