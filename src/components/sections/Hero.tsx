import { motion } from 'framer-motion';
import { ArrowDown, Mail, Code2, Link2 } from 'lucide-react';
import { personal } from '../../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-18">
      {/* Decorative glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#08080d]" />
      <div className="pointer-events-none absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 -z-10 h-112 w-md rounded-full bg-blue-600/15 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── Left column ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 text-sm font-medium text-brand-300"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              {personal.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mb-3 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl"
            >
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-brand-400 to-blue-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-5 text-lg font-semibold text-slate-300"
            >
              {personal.roles.slice(0, 2).join(' · ')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-8 max-w-lg text-base leading-relaxed text-slate-400"
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
                  <div className="bg-linear-to-r from-brand-400 to-blue-400 bg-clip-text font-display text-3xl font-bold text-transparent">
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
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-shadow hover:shadow-lg hover:shadow-brand-600/35"
              >
                View My Work <ArrowDown size={15} />
              </a>
              <a
                href={personal.socials.email}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-brand-500/40 hover:text-brand-300"
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
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-4xl bg-linear-to-br from-brand-600 to-blue-600 opacity-80 blur-sm" />
              <div className="w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img
                  src="/images/profile.webp"
                  alt={personal.name}
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#0d0d17] px-5 py-3.5 shadow-xl"
              >
                <div className="bg-linear-to-r from-brand-400 to-blue-400 bg-clip-text font-display text-2xl font-bold text-transparent">
                  {personal.stats[0].value}
                </div>
                <div className="text-xs text-slate-400">{personal.stats[0].label}</div>
              </motion.div>

              {/* Floating code badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.75, duration: 0.4 }}
                className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-blue-500 text-white shadow-lg"
              >
                <Code2 size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
