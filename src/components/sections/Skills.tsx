import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

export default function Skills() {
  const [activeId, setActiveId] = useState(skills[0].id);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const active = skills.find(s => s.id === activeId)!;

  return (
    <section id="skills" className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="My "
          accent="Tech Stack"
          description="Tools and technologies I use to build scalable, performant applications."
        />

        <div ref={ref}>
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {skills.map(skill => {
              const isActive = skill.id === activeId;
              return (
                <button
                  key={skill.id}
                  onClick={() => setActiveId(skill.id)}
                  style={isActive ? { background: skill.solid, boxShadow: `0 4px 14px ${skill.solid}40` } : undefined}
                  className={`inline-flex items-center gap-2 rounded-full border-2 px-4.5 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'border-transparent text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ background: isActive ? 'white' : skill.color }}
                  />
                  {skill.label}
                </button>
              );
            })}
          </motion.div>

          {/* Tag grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border-2 bg-white p-8"
              style={{ borderColor: `${active.color}40` }}
            >
              <div className="flex flex-wrap justify-center gap-2.5">
                {active.items.map(item => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-slate-700"
                    style={{ background: `${active.color}0e`, borderColor: `${active.color}30` }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: active.color }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Count strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="mt-5 grid gap-3"
            style={{ gridTemplateColumns: `repeat(${skills.length}, 1fr)` }}
          >
            {skills.map(skill => (
              <button
                key={skill.id}
                onClick={() => setActiveId(skill.id)}
                style={activeId === skill.id ? { background: `${skill.color}12`, borderColor: skill.color } : undefined}
                className={`rounded-xl border-2 px-2 py-3.5 text-center transition-colors ${
                  activeId === skill.id ? '' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="font-display text-xl font-bold text-slate-900">{skill.items.length}</div>
                <div className="mt-1 text-[0.68rem] text-slate-500">{skill.label}</div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
