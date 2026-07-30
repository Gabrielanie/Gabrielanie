import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Mail, MapPin, Zap, Download } from 'lucide-react';
import { personal } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

const INFO_ROWS = [
  { icon: <User size={16} />, label: 'Name', value: personal.name },
  { icon: <Mail size={16} />, label: 'Email', value: personal.email },
  { icon: <MapPin size={16} />, label: 'Location', value: personal.location },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 14 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.45, delay, ease: [0.25, 1, 0.35, 1] as [number, number, number, number] },
  });

  return (
    <section id="about" className="relative z-10 bg-[#0b0b12] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into "
          accent="impactful products"
        />

        <div ref={ref} className="grid items-start gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div>
            <div className="mb-8 flex flex-col gap-4">
              {personal.bio.map((para, i) => (
                <motion.p key={i} {...anim(i * 0.08)} className="text-base leading-relaxed text-slate-400">
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.a
              {...anim(0.3)}
              href="/Gabriel_Udoh.pdf"
              download="Gabriel_Udoh.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition-shadow hover:shadow-lg hover:shadow-brand-600/30"
            >
              <Download size={15} /> Download CV
            </motion.a>
          </div>

          {/* Info card */}
          <motion.div
            {...anim(0.1)}
            className="rounded-2xl border border-white/10 bg-[#0d0d17] p-6"
          >
            <div className="flex flex-col divide-y divide-white/5">
              {INFO_ROWS.map(row => (
                <div key={row.label} className="flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                    {row.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{row.label}</div>
                    <div className="text-sm font-semibold text-white">{row.value}</div>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-3.5 py-3.5 first:pt-0 last:pb-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                  <Zap size={16} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Availability</div>
                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                    {personal.availability}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
