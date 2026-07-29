import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experience, type Experience as ExpType } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

/* ── Single timeline entry — own component so useInView is called at top level ── */
function ExperienceItem({ exp, index, isLast }: { exp: ExpType; index: number; isLast: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45 }}
      className="flex gap-5"
    >
      {/* Timeline dot + line */}
      <div className="flex shrink-0 flex-col items-center">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${
            exp.current ? 'bg-brand-600 text-white' : 'border border-slate-200 bg-white text-slate-400'
          }`}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
        {!isLast && <div className="my-1 w-px flex-1 bg-slate-200" style={{ minHeight: '2rem' }} />}
      </div>

      {/* Card */}
      <div
        className={`flex-1 rounded-2xl border p-6 transition-shadow hover:shadow-sm ${
          isLast ? '' : 'mb-6'
        } ${exp.current ? 'border-brand-200 bg-brand-50/40' : 'border-slate-200 bg-white'}`}
      >
        {/* Role row */}
        <div className="mb-0.5 flex flex-wrap items-center gap-2">
          <h3 className="font-display text-base font-semibold text-slate-900">{exp.role}</h3>
          {exp.current && (
            <span className="rounded-full border border-brand-200 bg-brand-100 px-2 py-0.5 text-xs font-bold text-brand-700">
              Current
            </span>
          )}
        </div>

        {/* Company */}
        <div className="mb-2.5 text-sm font-semibold text-brand-700">{exp.company}</div>

        {/* Meta */}
        <div className="mb-4 flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <Calendar size={12} /> {exp.period}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin size={12} /> {exp.location}
          </span>
        </div>

        {/* Lead summary */}
        <p className="mb-3.5 text-sm italic leading-relaxed text-slate-500">
          {exp.achievements[0]}
        </p>

        {/* Achievements */}
        <ul className="flex flex-col gap-2">
          {exp.achievements.slice(1).map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
              <CheckCircle2 size={13} className="mt-1 shrink-0 text-brand-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export default function Experience() {
  return (
    <section id="experience" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Work History"
          title="My "
          accent="Experience"
          description="A track record of building products that matter, across industries and continents."
        />

        <div className="flex flex-col">
          {experience.map((exp, index) => (
            <ExperienceItem
              key={`${exp.company}-${index}`}
              exp={exp}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
