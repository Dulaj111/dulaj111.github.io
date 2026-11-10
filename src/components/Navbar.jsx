import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function MenuIcon({ open }) {
  return open ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
      <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
      <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const renderLinks = (className) => links.map((link) => {
    const linkClass = `${className} text-slate-600 transition-colors hover:text-sky-600`;
    return isHomePage ? (
      <a key={link.label} href={link.href} className={linkClass} onClick={() => setMenuOpen(false)}>
        {link.label}
      </a>
    ) : (
      <Link key={link.label} to={`/${link.href}`} className={linkClass} onClick={() => setMenuOpen(false)}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-4">
          {isHomePage ? (
            <a href="#home" className="font-bold text-slate-900">Dulaj Nihara</a>
          ) : (
            <Link to="/" className="font-bold text-slate-900">Dulaj Nihara</Link>
          )}

          <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
            {renderLinks('')}
          </nav>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-1 border-t border-slate-200 py-2 text-sm font-medium">
              {renderLinks('rounded-md px-3 py-2')}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
