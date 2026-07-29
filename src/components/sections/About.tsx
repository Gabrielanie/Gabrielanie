import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Briefcase, Zap, Download } from 'lucide-react';
import { personal } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 14 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.45, delay, ease: [0.25, 1, 0.35, 1] as [number, number, number, number] },
  });

  return (
    <section id="about" className="relative z-10 bg-slate-50 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into "
          accent="impactful products"
        />

        <div ref={ref} className="grid items-center gap-16 lg:grid-cols-2">
          {/* Avatar card */}
          <motion.div {...anim(0)} className="flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <img
                  src="/images/profile.webp"
                  alt={personal.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Stats badge */}
              <motion.div
                {...anim(0.25)}
                className="absolute -bottom-6 -right-4 flex gap-5 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm"
              >
                {personal.stats.map(s => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-xl font-bold text-brand-700">{s.value}</div>
                    <div className="mt-0.5 whitespace-nowrap text-[0.68rem] text-slate-500">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="pb-4 pt-6 lg:pt-0">
            {/* Info pills */}
            <motion.div {...anim(0.1)} className="mb-7 flex flex-wrap gap-2">
              {[
                { icon: <MapPin size={13} />, label: personal.location, accent: false },
                { icon: <Briefcase size={13} />, label: personal.title, accent: false },
                { icon: <Zap size={13} />, label: personal.availability, accent: true },
              ].map(p => (
                <div
                  key={p.label}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm ${
                    p.accent
                      ? 'border-brand-200 bg-brand-50 text-brand-700'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  {p.icon} {p.label}
                </div>
              ))}
            </motion.div>

            {/* Bio */}
            <div className="mb-8 flex flex-col gap-4">
              {personal.bio.map((para, i) => (
                <motion.p key={i} {...anim(0.15 + i * 0.08)} className="text-base leading-relaxed text-slate-600">
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Download CV */}
            <motion.a
              {...anim(0.4)}
              href="/Gabriel_Udoh.pdf"
              download="Gabriel_Udoh.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              <Download size={15} /> Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
