import { personalData } from '../data/personalData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500">
      <p>© {currentYear} {personalData.name}</p>
      <a
        href={`mailto:${personalData.email}`}
        className="mt-2 inline-block hover:text-sky-700"
      >
        {personalData.email}
      </a>
    </footer>
  );
}
