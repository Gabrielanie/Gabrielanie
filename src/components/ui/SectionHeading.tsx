import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, accent, description }: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
      className="mb-16 text-center"
    >
      <span className="mb-3 inline-block rounded-full bg-linear-to-r from-brand-600 to-blue-600 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
        {eyebrow}
      </span>

      <h2 className={`text-3xl font-bold tracking-tight text-white sm:text-4xl ${description ? 'mb-3.5' : ''}`}>
        {title}
        {accent && (
          <span className="bg-linear-to-r from-brand-400 to-blue-400 bg-clip-text text-transparent">
            {accent}
          </span>
        )}
      </h2>

      {description && (
        <p className="mx-auto max-w-lg text-base leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
