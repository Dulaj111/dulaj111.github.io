import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Code2,
  Layout,
  FileCode,
  Atom,
  Server,
  Terminal,
  Database,
  Cpu,
  GitBranch,
  GitFork,
  Box,
  Layers,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { personalData } from '../data/personalData';
import { skillsData } from '../data/skillsData';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const currentYear = new Date().getFullYear();

function getSkillIcon(skillName) {
  const name = String(skillName).toLowerCase();
  if (name.includes('html')) return Code2;
  if (name.includes('css')) return Layout;
  if (name.includes('javascript') || name.includes('js')) return FileCode;
  if (name.includes('react')) return Atom;
  if (name.includes('node')) return Server;
  if (name.includes('python')) return Terminal;
  if (name.includes('sql')) return Database;
  if (name.includes('php')) return Cpu;
  if (name.includes('github')) return GitFork;
  if (name.includes('git')) return GitBranch;
  if (name.includes('docker')) return Box;
  return Layers;
}

export default function HomePage() {
  const location = useLocation();
  const [activeContact, setActiveContact] = useState(null);
  const whatsappLink = `https://wa.me/${personalData.number.replace(/\D/g, '')}`;
  const emailLink = `mailto:${personalData.email}?subject=${encodeURIComponent('Contact')}&body=${encodeURIComponent('I would like to contact you.')}`;

  useEffect(() => {
    document.documentElement.classList.add('snap-y');

    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => {
      document.documentElement.classList.remove('snap-y');
    };
  }, [location]);

  return (
    <>
      <section
        id="home"
        className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 snap-start flex-col justify-center px-5 py-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-bold text-sky-800">
            Hello, I’m Dulaj Nihara
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
              Aspiring Cloud Engineer &
            </span>
            <br />
            <span className="decoration-sky-400 decoration-wavy underline underline-offset-8">
              Web Developer
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Building robust web applications. Exploring scalable cloud architectures
            and modern security practices.
          </p>
        </div>
      </section>

      <section
        id="about"
        className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col justify-center px-5 py-12 snap-start"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-sky-800 md:text-4xl">About me</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Hi, I’m Dulaj Nihara, an aspiring cloud engineer and web developer with a strong interest in building useful, reliable web applications. I enjoy learning how cloud platforms and modern web technologies work together to create scalable digital experiences.
I’m developing my skills through hands-on projects and by keeping up with new tools and practices in the industry. I’m especially interested in cloud infrastructure, application development, and security. My goal is to keep improving as an engineer and contribute to technology that is dependable, accessible, and useful to the people who rely on it.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col justify-center px-5 py-12 snap-start"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-sky-800 md:text-4xl">Skills</h2>

          {/* All Skills Cards directly visible (no tab buttons) */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {skillsData.map((group) => (
              <div
                key={group.category}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition hover:shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {group.category}
                </h3>
                {group.description && (
                  <p className="mt-1 text-xs text-slate-500">
                    {group.description}
                  </p>
                )}

                <div className="mt-6 flex flex-col gap-3">
                  {group.skills.map((skill) => {
                    const IconComponent = getSkillIcon(skill);
                    return (
                      <div
                        key={skill}
                        className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3.5 transition hover:border-sky-300 hover:shadow-2xs"
                      >
                        <IconComponent className="h-5 w-5 shrink-0 text-sky-600" />
                        <span className="font-semibold text-slate-800 text-sm">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col justify-center px-5 py-12 snap-start"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl text-sky-800">Featured Projects</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col justify-between px-5 pt-16 pb-8 snap-start"
      >
        <div />
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Contact</h2>
          <p className="mt-4 text-slate-600">
            Feel free to reach out for collaborations or questions:
          </p>
          
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveContact((active) => active === 'phone' ? null : 'phone')}
              aria-expanded={activeContact === 'phone'}
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-sky-700 bg-sky-700 pr-5 text-white transition hover:bg-sky-800"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-l-xl border-r-2 border-sky-700 bg-white text-sky-700">
                <Phone className="h-6 w-6" />
              </span>
              <span className="font-semibold">Contact</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveContact((active) => active === 'email' ? null : 'email')}
              aria-expanded={activeContact === 'email'}
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-sky-700 bg-sky-700 pr-5 text-white transition hover:bg-sky-800"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-l-xl border-r-2 border-sky-700 bg-white text-sky-700">
                <Mail className="h-6 w-6" />
              </span>
              <span className="font-semibold">Gmail</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveContact((active) => active === 'linkedin' ? null : 'linkedin')}
              aria-expanded={activeContact === 'linkedin'}
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-sky-700 bg-sky-700 pr-5 text-white transition hover:bg-sky-800"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-l-xl border-r-2 border-sky-700 bg-white text-sky-700">
                <span className="font-bold text-lg">in</span>
              </span>
              <span className="font-semibold">LinkedIn</span>
            </button>
          </div>

          {activeContact === 'phone' && (
            <div className="mt-4">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-sky-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-800">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>WhatsApp</span>
                <span className="font-normal">{personalData.number}</span>
              </a>
            </div>
          )}

          {activeContact === 'email' && (
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <span className="font-semibold text-slate-800">{personalData.email}</span>
              <a href={emailLink} className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800">Go</a>
            </div>
          )}

          {activeContact === 'linkedin' && (
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <span className="font-semibold text-slate-800">Collaborate with me on LinkedIn</span>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800">Go</a>
            </div>
          )}


        </div>
        <footer className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>© {currentYear} {personalData.name}</p>
        </footer>
      </section>
    </>
  );
}
