import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Link2, Code2, Download, ArrowRight } from 'lucide-react';
import { personal } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

const CARDS = [
  {
    icon: <Mail size={22} />,
    label: 'Email Me',
    value: personal.email,
    href: personal.socials.email,
    color: '#16a34a',
    textColor: '#15803d',
    note: 'Drop me a line any time',
    download: false,
  },
  {
    icon: <Link2 size={22} />,
    label: 'LinkedIn',
    value: 'gabriel-udoh',
    href: personal.socials.linkedin,
    color: '#0d9488',
    textColor: '#0f766e',
    note: 'Connect professionally',
    download: false,
  },
  {
    icon: <Code2 size={22} />,
    label: 'GitHub',
    value: 'gabrielanie',
    href: personal.socials.github,
    color: '#22c55e',
    textColor: '#15803d',
    note: 'Check out my code',
    download: false,
  },
  {
    icon: <Download size={22} />,
    label: 'Download CV',
    value: 'Gabriel_Anietie_Udoh',
    href: '/Gabriel_Udoh.pdf',
    color: '#f59e0b',
    textColor: '#b45309',
    note: 'Get my full résumé',
    download: true,
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something "
          accent="great together"
          description="Open to freelance projects, full-time roles, and collaborations. Don't hesitate to reach out."
        />

        <div ref={ref}>
          {/* CTA banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="relative mb-8 overflow-hidden rounded-2xl bg-linear-to-br from-brand-600 via-brand-600 to-teal-600 px-8 py-12 text-center shadow-lg shadow-brand-600/20"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <h3 className="relative mb-2.5 font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to start a project?
            </h3>
            <p className="relative mx-auto mb-7 max-w-md text-base leading-relaxed text-white/85">
              Whether you have an idea, a brief, or just want to say hello — I'd love to hear from you.
            </p>
            <a
              href={personal.socials.email}
              className="relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-md transition-transform hover:scale-105"
            >
              Say Hello <ArrowRight size={17} />
            </a>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {CARDS.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.download ? undefined : '_blank'}
                rel={card.download ? undefined : 'noreferrer'}
                download={card.download || undefined}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                className="flex flex-col items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ background: card.textColor }}
                >
                  {card.icon}
                </div>
                <div className="font-display text-sm font-semibold text-slate-900">{card.label}</div>
                <div className="text-xs font-semibold" style={{ color: card.textColor }}>{card.value}</div>
                <div className="text-xs text-slate-500">{card.note}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
