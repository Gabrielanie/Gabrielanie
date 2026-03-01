import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code2, X } from 'lucide-react';
import { projects, type Project } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

const FILTERS = [
  { id: 'all',       label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend',  label: 'Frontend' },
  { id: 'backend',   label: 'Backend' },
  { id: 'mobile',    label: 'Mobile' },
  { id: 'cms',       label: 'CMS' },
];

/* ── Card ── */
function Card({ project, onClick, index }: { project: Project; onClick: () => void; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onClick={onClick}
      style={{
        borderRadius: '16px',
        background: '#0d0d0d',
        border: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.22s, border-color 0.22s, box-shadow 0.22s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = `${project.color}40`;
        e.currentTarget.style.boxShadow = `0 12px 36px ${project.color}18`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Image preview or colour bar */}
      {project.image ? (
        <div style={{ position: 'relative', height: '168px', overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
          {/* colour overlay at bottom for text contrast */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(to bottom, transparent 40%, #0d0d0d 100%)`,
            }}
          />
          {/* accent line */}
          <div
            style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '3px',
              background: `linear-gradient(90deg, ${project.color}, transparent)`,
            }}
          />
        </div>
      ) : (
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
      )}

      <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {/* Title */}
        <h3
          style={{
            fontSize: '1rem', fontWeight: 600,
            color: '#f1f5f9', lineHeight: 1.35,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.7, flex: 1 }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tech.slice(0, 4).map(t => (
            <span
              key={t}
              style={{
                fontSize: '0.72rem',
                padding: '0.18rem 0.55rem',
                borderRadius: '6px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#64748b',
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span style={{ fontSize: '0.72rem', color: '#475569', padding: '0.18rem 0.2rem' }}>
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer links */}
        <div
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div style={{ display: 'flex', gap: '0.9rem' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  fontSize: '0.78rem', fontWeight: 500, color: project.color,
                  transition: 'opacity 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <ExternalLink size={12} /> Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  fontSize: '0.78rem', fontWeight: 500, color: '#64748b',
                  transition: 'color 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#94a3b8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                <Code2 size={12} /> Code
              </a>
            )}
          </div>
          <span style={{ fontSize: '0.72rem', color: '#475569' }}>Details →</span>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Modal ── */
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 60,
        background: 'rgba(5,5,5,0.82)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto',
      }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '680px',
          borderRadius: '20px',
          background: '#111',
          border: `1px solid ${project.color}28`,
          overflow: 'hidden',
          position: 'relative',
          margin: 'auto',
        }}
      >
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

        {/* Screenshot */}
        {project.image && (
          <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 50%, #111 100%)',
              }}
            />
          </div>
        )}

        <div style={{ padding: '2rem' }}>
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: '1.2rem', right: '1.2rem',
              width: '2rem', height: '2rem', borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#94a3b8',
              transition: 'background 0.18s',
              zIndex: 1,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
          >
            <X size={16} />
          </button>

          <h2
            style={{
              fontSize: '1.35rem', fontWeight: 700,
              color: '#f1f5f9', marginBottom: '0.8rem',
              paddingRight: '2.5rem',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {project.title}
          </h2>

          <p style={{ fontSize: '0.93rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            {project.longDescription}
          </p>

          {/* Tech */}
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#475569', marginBottom: '0.6rem' }}>
            Tech Stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.6rem' }}>
            {project.tech.map(t => (
              <span
                key={t}
                style={{
                  fontSize: '0.82rem', fontWeight: 500,
                  padding: '0.28rem 0.75rem', borderRadius: '8px',
                  background: `${project.color}12`,
                  border: `1px solid ${project.color}26`,
                  color: project.color,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  padding: '0.6rem 1.4rem', borderRadius: '999px',
                  background: project.color, color: '#fff',
                  fontSize: '0.88rem', fontWeight: 600,
                  transition: 'opacity 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                  padding: '0.6rem 1.4rem', borderRadius: '999px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#f1f5f9',
                  fontSize: '0.88rem', fontWeight: 600,
                  transition: 'background 0.18s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              >
                <Code2 size={14} /> View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Section ── */
export default function Projects() {
  const [filter,   setFilter]   = useState('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = filter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <section
      id="projects"
      style={{ position: 'relative', zIndex: 1, padding: '7rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <SectionHeading
          eyebrow="My Work"
          title="Featured "
          accent="Projects"
          description="Real-world applications I've designed, built, and shipped."
        />

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.8rem' }}>
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                padding: '0.42rem 1.05rem', borderRadius: '999px',
                fontSize: '0.84rem', fontWeight: 500,
                color: filter === f.id ? '#4ade80' : '#94a3b8',
                background: filter === f.id ? 'rgba(22,101,52,0.14)' : 'rgba(255,255,255,0.04)',
                border: filter === f.id ? '1px solid rgba(22,101,52,0.36)' : '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.18s',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '1.25rem',
          }}
        >
          <AnimatePresence>
            {visible.map((p, i) => (
              <Card key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
