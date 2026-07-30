import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative z-10 bg-[#0b0b12] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients "
          accent="say about me"
          description="Feedback from people I've had the pleasure of working with."
        />

        <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d17] p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1" style={{ background: t.color }} />
              <Quote size={24} className="absolute right-5 top-7 text-white/5" />

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} fill="#fbbf24" className="text-amber-400" />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-slate-400">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
