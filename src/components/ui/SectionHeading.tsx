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
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.25, 1, 0.35, 1] }}
      style={{ textAlign: 'center', marginBottom: '4rem' }}
    >
      <span
        style={{
          display: 'inline-block',
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase' as const,
          color: '#4ade80',
          background: 'rgba(22,101,52,0.15)',
          border: '1px solid rgba(22,101,52,0.3)',
          borderRadius: '999px',
          padding: '0.28rem 0.85rem',
          marginBottom: '1rem',
        }}
      >
        {eyebrow}
      </span>

      <h2
        style={{
          fontSize: 'clamp(1.9rem, 4.5vw, 2.9rem)',
          fontWeight: 700,
          color: '#f1f5f9',
          letterSpacing: '-0.02em',
          marginBottom: description ? '0.9rem' : 0,
        }}
      >
        {title}
        {accent && (
          <span
            style={{
              background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {accent}
          </span>
        )}
      </h2>

      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            color: '#94a3b8',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.75,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
