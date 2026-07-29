import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative z-10 bg-slate-50 px-6 py-28">
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
              className="relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <Quote size={24} className="absolute right-5 top-5 text-slate-100" />

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} fill="#d97706" className="text-amber-600" />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: `${t.color}18`, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-slate-900">{t.name}</div>
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
