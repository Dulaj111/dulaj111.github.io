import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function ProjectDetailPage() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData.find(
    (item) => String(item.id).toLowerCase() === String(id).toLowerCase()
  );

  if (!project) {
    return (
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Project Not Found</h1>
        <p className="mt-3 text-slate-600">The project you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-800"
        >
          ← Back to Home
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-5 py-16">
      <Link
        to="/"
        className="inline-block text-sm font-semibold text-sky-700 hover:text-sky-800"
      >
        ← Back
      </Link>

      <p className="mt-6 text-sm text-sky-700">
        {project.category} · {project.year}
      </p>

      <h1 className="mt-2 text-4xl font-bold text-slate-900">
        {project.title}
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        {project.description}
      </p>

      {project.techStack && (
        <div className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Tech Stack
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {Array.isArray(project.techStack) ? (
              project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))
            ) : (
              <p className="text-slate-600">{project.techStack}</p>
            )}
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-800 transition-colors"
          >
            Live site
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
