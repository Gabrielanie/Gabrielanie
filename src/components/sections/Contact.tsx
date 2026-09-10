import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Link2, Code2, Download, ArrowRight, Send } from 'lucide-react';
import { personal } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';

const CARDS = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: personal.email,
    href: personal.socials.email,
    color: '#16a34a',
    textColor: '#15803d',
    download: false,
  },
  {
    icon: <Link2 size={20} />,
    label: 'LinkedIn',
    value: 'gabriel-udoh',
    href: personal.socials.linkedin,
    color: '#0d9488',
    textColor: '#0f766e',
    download: false,
  },
  {
    icon: <Code2 size={20} />,
    label: 'GitHub',
    value: 'gabrielanie',
    href: personal.socials.github,
    color: '#22c55e',
    textColor: '#15803d',
    download: false,
  },
  {
    icon: <Download size={20} />,
    label: 'Download CV',
    value: 'Gabriel_Anietie_Udoh',
    href: '/Gabriel_Udoh.pdf',
    color: '#f59e0b',
    textColor: '#b45309',
    download: true,
  },
];

const PROJECT_TYPES = ['Web App', 'Mobile App', 'AI Integration', 'E-Commerce / CMS', 'Something else'];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', projectType: PROJECT_TYPES[0], message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `New project inquiry — ${form.projectType}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\n\n${form.message}`;
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const inputClass = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-brand-500/60 focus:bg-white/[0.07]';

  return (
    <section id="contact" className="relative z-10 bg-[#000000] px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something "
          accent="great together"
          description="Open to new projects, retainers, and collaborations. Tell us what you're building."
        />

        <div ref={ref}>
          {/* CTA banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="relative mb-8 overflow-hidden rounded-2xl bg-linear-to-br from-brand-600 via-brand-600 to-blue-600 px-8 py-10 text-center shadow-lg shadow-brand-600/20"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <h3 className="relative mb-2.5 font-display text-2xl font-bold text-black sm:text-3xl">
              Ready to start a project?
            </h3>
            <p className="relative mx-auto mb-6 max-w-md text-base leading-relaxed text-black/70">
              Whether you have an idea, a brief, or just want to say hello — we'd love to hear from you.
            </p>
            <a
              href={personal.socials.email}
              className="relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-md transition-transform hover:scale-105"
            >
              Say Hello <ArrowRight size={17} />
            </a>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Lead form */}
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.4 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#141414] p-6 lg:col-span-3"
            >
              <h4 className="font-display text-base font-semibold text-white">Tell us about your project</h4>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold text-slate-500">Name</label>
                  <input
                    id="contact-name"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold text-slate-500">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-type" className="mb-1.5 block text-xs font-semibold text-slate-500">Project type</label>
                <select
                  id="contact-type"
                  value={form.projectType}
                  onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))}
                  className={`${inputClass} appearance-none`}
                >
                  {PROJECT_TYPES.map(type => (
                    <option key={type} value={type} className="bg-[#141414]">{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-slate-500">Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className={`${inputClass} resize-none`}
                  placeholder="What are you looking to build?"
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-blue-600 px-6 py-3 text-sm font-semibold text-black shadow-md shadow-brand-600/25 transition-shadow hover:shadow-lg hover:shadow-brand-600/35"
              >
                Send Message <Send size={15} />
              </button>
              <p className="text-xs text-slate-600">Opens your email client with the message pre-filled — nothing is sent silently.</p>
            </motion.form>

            {/* Quick contact cards */}
            <div className="grid grid-cols-2 gap-3.5 lg:col-span-2 lg:grid-cols-2">
              {CARDS.map((card, i) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.download ? undefined : '_blank'}
                  rel={card.download ? undefined : 'noreferrer'}
                  download={card.download || undefined}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#141414] px-4 py-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm"
                    style={{ background: card.textColor }}
                  >
                    {card.icon}
                  </div>
                  <div className="font-display text-sm font-semibold text-white">{card.label}</div>
                  <div className="text-xs font-semibold" style={{ color: card.color }}>{card.value}</div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
