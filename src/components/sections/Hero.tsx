import { motion } from 'framer-motion';
import { ArrowDown, Mail, Code2, Link2 } from 'lucide-react';
import { personal } from '../../data/portfolio';

const TECH_BADGES = ['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native'];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-18">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── Left column ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {personal.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mb-3 text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl"
            >
              Hi, I'm <span className="text-brand-700">{personal.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-5 text-lg font-medium text-slate-700"
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
                  <div className="font-display text-3xl font-bold text-slate-900">{s.value}</div>
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
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                View My Work <ArrowDown size={15} />
              </a>
              <a
                href={personal.socials.email}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand-300 hover:text-brand-700"
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
            <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <img
                src="/images/profile.webp"
                alt={personal.name}
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {TECH_BADGES.map(badge => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
