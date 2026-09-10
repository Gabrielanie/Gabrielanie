import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { process } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="process" className="relative z-10 bg-[#0a0a0a] px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How We Work"
          title="A process built for "
          accent="momentum"
          description="No black boxes — you know exactly what stage a project is in, every week."
        />

        <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#141414] p-6"
            >
              <span className="bg-linear-to-r from-brand-400 to-blue-400 bg-clip-text font-display text-3xl font-bold text-transparent">
                {p.step}
              </span>
              <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{p.description}</p>

              {i < process.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-brand-500/40 lg:block">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
