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
        <Link to="/" className="mt-6 inline-block rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-800">
          ← Back to Home
        </Link>
      </section>
    );
  }

  const images = project.images || [];

  return (
    <>
      <article className="mx-auto max-w-4xl px-5 py-12 pb-24">

        {/* Back */}
        <Link to="/" className="text-sm font-semibold text-sky-700 hover:text-sky-800">← Back</Link>

        {/* Header */}
        <div className="mt-5">
          <p className="text-sm text-sky-700">{project.category} · {project.year}</p>
          <h1 className="mt-1 text-4xl font-bold text-slate-900">{project.title}</h1>
          {project.subtitle && (
            <p className="mt-1 text-lg text-slate-500 italic">{project.subtitle}</p>
          )}
        </div>

        {/* Description */}
        <p className="mt-5 text-slate-600 leading-relaxed max-w-2xl">{project.longdescription}</p>

{/* Project images */}
        {images.length > 0 && (
          <div className="mt-8">
            {images.map((image) => (
              <img
                key={image.label}
                src={image.src}
                alt={image.label}
                loading="lazy"
                className="my-6 h-auto max-w-full"
              />
            ))}
          </div>
        )}

        {/* Detail sections */}
        {project.sections && project.sections.length > 0 && (
          <div className="mt-10 flex flex-col gap-6">
            {project.sections.map((sec) => (
              <div key={sec.heading} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="font-bold text-slate-900 text-base">{sec.heading}</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{sec.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Tech Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Team */}
        {project.team && (
          <p className="mt-6 text-xs text-slate-400">{project.team}</p>
        )}

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-800 transition-colors">
              Live site
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              GitHub
            </a>
          )}
        </div>

      </article>
    </>
  );
}
