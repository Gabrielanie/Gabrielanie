import { useEffect, useRef, useState, type CSSProperties } from 'react';
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
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      style={{ '--accent': project.color } as CSSProperties}
      className="flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-(--accent) hover:shadow-lg"
    >
      {/* Image preview or colour bar */}
      {project.image ? (
        <div className="relative h-42 shrink-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: project.color }} />
        </div>
      ) : (
        <div className="h-1.5" style={{ background: project.color }} />
      )}

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-base font-semibold leading-snug text-slate-900">
          {project.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map(t => (
            <span
              key={t}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-500"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-1 py-0.5 text-xs text-slate-400">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer links */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-3">
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 transition-opacity hover:opacity-70"
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
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-slate-700"
              >
                <Code2 size={12} /> Code
              </a>
            )}
          </div>
          <span className="text-xs text-slate-400">Details →</span>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Modal ── */
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
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
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-60 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-6 backdrop-blur-sm"
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={e => e.stopPropagation()}
        className="relative m-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
      >
        <div className="h-1.5" style={{ background: project.color }} />

        {/* Screenshot */}
        {project.image && (
          <div className="relative h-55 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        )}

        <div className="relative p-8">
          {/* Close */}
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200"
          >
            <X size={16} />
          </button>

          <h2
            id="project-modal-title"
            className="mb-3 pr-10 font-display text-xl font-bold text-slate-900"
          >
            {project.title}
          </h2>

          <p className="mb-6 text-sm leading-relaxed text-slate-600">
            {project.longDescription}
          </p>

          {/* Tech */}
          <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-400">
            Tech Stack
          </p>
          <div className="mb-7 flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span
                key={t}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
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
    <section id="projects" className="relative z-10 bg-linear-to-b from-brand-50/50 via-white to-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My Work"
          title="Featured "
          accent="Projects"
          description="Real-world applications I've designed, built, and shipped."
        />

        {/* Filters */}
        <div className="mb-11 flex flex-wrap justify-center gap-2">
          {FILTERS.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.id
                  ? 'border-brand-600 bg-brand-600 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
