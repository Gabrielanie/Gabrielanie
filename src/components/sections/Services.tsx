import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import { services } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="relative z-10 bg-[#0a0a0a] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built around "
          accent="outcomes"
          description="Five capabilities, one senior team — scoped and delivered without agency overhead."
        />

        <div ref={ref} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#141414] p-6 transition-colors hover:border-brand-500/40"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                <service.Icon size={20} />
              </div>

              <h3 className="font-display text-base font-semibold text-white">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{service.description}</p>

              <ul className="mt-1 flex flex-col gap-2 border-t border-white/10 pt-4">
                {service.deliverables.map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                    <Check size={13} className="mt-0.5 shrink-0 text-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
