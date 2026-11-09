import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="text-4xl font-bold">Projects</h1>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}