import { motion } from 'framer-motion';
import { ArrowDown, Mail, Code2, Link2 } from 'lucide-react';
import { personal } from '../../data/portfolio';

const TECH_BADGES = [
  { label: 'React',        classes: 'bg-brand-50 text-brand-700 border-brand-200' },
  { label: 'Next.js',      classes: 'bg-slate-900 text-white border-slate-900' },
  { label: 'TypeScript',   classes: 'bg-sky-50 text-sky-700 border-sky-200' },
  { label: 'Node.js',      classes: 'bg-teal-50 text-teal-700 border-teal-200' },
  { label: 'React Native', classes: 'bg-purple-50 text-purple-700 border-purple-200' },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-18">
      {/* Decorative gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-brand-50 via-white to-teal-50/60" />
      <div className="pointer-events-none absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-linear-to-br from-brand-300/40 to-teal-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-linear-to-tr from-amber-200/30 to-brand-200/30 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── Left column ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-brand-600/30"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              {personal.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mb-3 text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl"
            >
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-brand-600 to-teal-600 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-5 text-lg font-semibold text-teal-700"
            >
              {personal.roles.slice(0, 2).join(' · ')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-slate-600"
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-9 flex items-center gap-8"
            >
              {personal.stats.map(s => (
                <div key={s.label}>
                  <div className="bg-linear-to-r from-brand-600 to-teal-600 bg-clip-text font-display text-3xl font-bold text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mb-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-shadow hover:shadow-lg hover:shadow-brand-600/35"
              >
                View My Work <ArrowDown size={15} />
              </a>
              <a
                href={personal.socials.email}
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
              >
                <Mail size={15} /> Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              {[
                { href: personal.socials.github,   icon: <Code2 size={18} />, label: 'GitHub' },
                { href: personal.socials.linkedin,  icon: <Link2 size={18} />, label: 'LinkedIn' },
                { href: personal.socials.email,     icon: <Mail size={18} />,  label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-sm transition-colors hover:border-brand-400 hover:text-brand-700"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right column (visual) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center gap-5"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-4xl bg-linear-to-br from-brand-500 to-teal-500 opacity-90" />
              <div className="w-full overflow-hidden rounded-3xl border-4 border-white shadow-xl">
                <img
                  src="/images/profile.webp"
                  alt={personal.name}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {TECH_BADGES.map(badge => (
                <span
                  key={badge.label}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${badge.classes}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
