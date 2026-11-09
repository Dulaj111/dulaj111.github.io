import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {isHomePage ? (
          <a href="#home" className="font-bold text-slate-900">
            Dulaj Nihara
          </a>
        ) : (
          <Link to="/" className="font-bold text-slate-900">
            Dulaj Nihara
          </Link>
        )}

        <nav className="flex items-center gap-5 text-sm font-medium">
          {links.map((link) =>
            isHomePage ? (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 transition-colors hover:text-sky-600"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={`/${link.href}`}
                className="text-slate-600 transition-colors hover:text-sky-600"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
