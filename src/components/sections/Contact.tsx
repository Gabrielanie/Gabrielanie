import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Link2, Code2, Download, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const CARDS = [
  {
    icon: <Mail size={22} />,
    label: 'Email Me',
    value: 'younganiel@gmail.com',
    href: 'mailto:younganiel@gmail.com',
    color: '#16a34a',
    note: 'Drop me a line any time',
    download: false,
  },
  {
    icon: <Link2 size={22} />,
    label: 'LinkedIn',
    value: 'gabriel-udoh',
    href: 'https://www.linkedin.com/in/gabriel-udoh-85974616b/',
    color: '#0d9488',
    note: 'Connect professionally',
    download: false,
  },
  {
    icon: <Code2 size={22} />,
    label: 'GitHub',
    value: 'gabrielanie',
    href: 'https://github.com/gabrielanie',
    color: '#22c55e',
    note: 'Check out my code',
    download: false,
  },
  {
    icon: <Download size={22} />,
    label: 'Download CV',
    value: 'Gabriel_Anietie_Udoh',
    href: '/Gabriel_Udoh.pdf',
    color: '#f59e0b',
    note: 'Get my full résumé',
    download: true,
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="contact"
      style={{ position: 'relative', zIndex: 1, padding: '7rem 1.5rem' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something "
          accent="great together"
          description="Open to freelance projects, full-time roles, and collaborations. Don't hesitate to reach out."
        />

        <div ref={ref}>
          {/* CTA banner */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              padding: '3.5rem 2.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(22,101,52,0.18) 0%, rgba(13,148,136,0.12) 100%)',
              border: '1px solid rgba(22,101,52,0.32)',
            }}
          >
            {/* Top glow */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '260px', height: '80px', pointerEvents: 'none',
                background: 'radial-gradient(ellipse at center, rgba(22,101,52,0.22), transparent 70%)',
                filter: 'blur(24px)',
              }}
            />

            <h3
              style={{
                position: 'relative',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
                fontWeight: 700, color: '#f1f5f9',
                marginBottom: '0.75rem',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Ready to start a project?
            </h3>
            <p
              style={{
                position: 'relative',
                color: '#94a3b8', fontSize: '1rem',
                maxWidth: '440px', margin: '0 auto 1.8rem',
                lineHeight: 1.75,
              }}
            >
              Whether you have an idea, a brief, or just want to say hello — I'd love to hear from you.
            </p>
            <a
              href="mailto:younganiel@gmail.com"
              style={{
                position: 'relative',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.8rem 2.2rem', borderRadius: '999px',
                background: 'linear-gradient(135deg, #16a34a, #0d9488)',
                color: '#fff', fontWeight: 600, fontSize: '1rem',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 26px rgba(22,101,52,0.45)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              Say Hello <ArrowRight size={17} />
            </a>
          </motion.div>

          {/* Contact cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '0.9rem',
            }}
          >
            {CARDS.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.download ? undefined : '_blank'}
                rel={card.download ? undefined : 'noreferrer'}
                download={card.download || undefined}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.09, duration: 0.5 }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  textAlign: 'center', padding: '1.6rem 1rem',
                  borderRadius: '16px',
                  background: '#0d0d0d',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'transform 0.22s, border-color 0.22s, box-shadow 0.22s',
                  gap: '0.6rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = `${card.color}35`;
                  e.currentTarget.style.boxShadow = `0 10px 28px ${card.color}14`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '2.8rem', height: '2.8rem', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${card.color}18`, color: card.color,
                    transition: 'transform 0.22s',
                  }}
                >
                  {card.icon}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f1f5f9', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {card.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: card.color }}>
                  {card.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  {card.note}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
