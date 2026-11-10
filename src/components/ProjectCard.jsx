import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-sky-50/70 p-6 transition-colors hover:border-sky-300">
      <p className="text-sm text-sky-700">
        {project.category} · {project.year}
      </p>

      <h3 className="mt-2 text-xl font-bold text-slate-900">
        {project.title}
      </h3>

      <p className="mt-3 text-slate-600">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded bg-slate-100 px-2 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>

      <Link
        to={`/projects/${project.id}`}
        className="mt-5 inline-block font-semibold text-sky-700"
      >
        Project details →
      </Link>
    </article>
  );
}
