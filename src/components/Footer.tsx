import { Mail, Link2, Code2, ArrowUp } from 'lucide-react';
import { navLinks, personal } from '../data/portfolio';
import { scrollTo } from '../lib/scroll';

const SOCIALS = [
  { href: personal.socials.github,   icon: <Code2 size={17} />, label: 'GitHub' },
  { href: personal.socials.linkedin, icon: <Link2 size={17} />, label: 'LinkedIn' },
  { href: personal.socials.email,    icon: <Mail  size={17} />, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0b0b12] px-6 py-11">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-blue-500 font-display text-xs font-bold text-white">
              GA
            </div>
            <div>
              <div className="font-display text-sm font-semibold text-white">{personal.name}</div>
              <div className="text-xs text-slate-500">{personal.title}</div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                className="text-sm text-slate-400 transition-colors hover:text-brand-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-brand-500/40 hover:text-brand-400"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</span>
          <button
            onClick={() => scrollTo('#home')}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-brand-500/40 hover:text-brand-400"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
