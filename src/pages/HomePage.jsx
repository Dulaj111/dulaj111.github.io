import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { personalData } from '../data/personalData';
import { skillsData } from '../data/skillsData';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const currentYear = new Date().getFullYear();

export default function HomePage() {
  const location = useLocation();

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
        className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col justify-center px-5 py-12 snap-start"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sky-700 font-medium">{personalData.role}</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            {personalData.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600 md:text-xl">
            {personalData.tagline}
          </p>
        </div>
      </section>

      <section
        id="about"
        className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col justify-center px-5 py-12 snap-start"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">About me</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            I build useful, responsive web applications.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col justify-center px-5 py-12 snap-start"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Skills</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {skillsData.map((group) => (
              <div key={group.category} className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
                <h3 className="font-semibold text-slate-900">{group.category}</h3>
                <p className="mt-2 text-slate-600">{group.skills.join(' · ')}</p>
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
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Featured projects</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {projectsData.slice(0, 3).map((project) => (
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
          <a
            href={`mailto:${personalData.email}`}
            className="mt-3 inline-block text-lg font-semibold text-sky-700 hover:underline"
          >
            {personalData.email}
          </a>
        </div>
        <footer className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>© {currentYear} {personalData.name}</p>
        </footer>
      </section>
    </>
  );
}
