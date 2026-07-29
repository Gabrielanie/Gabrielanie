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
    <section id="about" className="relative z-10 bg-linear-to-b from-teal-50/50 via-white to-white px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into "
          accent="impactful products"
        />

        <div ref={ref}>
          {/* Info pills */}
          <motion.div {...anim(0)} className="mb-7 flex flex-wrap justify-center gap-2">
            {[
              { icon: <MapPin size={13} />, label: personal.location, accent: false },
              { icon: <Briefcase size={13} />, label: personal.title, accent: false },
              { icon: <Zap size={13} />, label: personal.availability, accent: true },
            ].map(p => (
              <div
                key={p.label}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${
                  p.accent
                    ? 'border-transparent bg-brand-600 text-white'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                {p.icon} {p.label}
              </div>
            ))}
          </motion.div>

          {/* Bio */}
          <div className="mb-9 flex flex-col gap-4">
            {personal.bio.map((para, i) => (
              <motion.p key={i} {...anim(0.1 + i * 0.08)} className="text-base leading-relaxed text-slate-600">
                {para}
              </motion.p>
            ))}
          </div>

          {/* Stats */}
          <motion.div {...anim(0.35)} className="mb-9 flex items-center justify-center gap-10 rounded-2xl border border-slate-200 bg-white py-6 shadow-sm">
            {personal.stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="bg-linear-to-r from-brand-600 to-teal-600 bg-clip-text font-display text-2xl font-bold text-transparent">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Download CV */}
          <motion.div {...anim(0.45)} className="flex justify-center">
            <a
              href="/Gabriel_Udoh.pdf"
              download="Gabriel_Udoh.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-700"
            >
              <Download size={15} /> Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
