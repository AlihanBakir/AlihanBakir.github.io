import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, MapPin, Target } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { projects } from "@/data/cv-data";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          {/* Header */}
          <header className="max-w-3xl mb-12 opacity-0 animate-fade-up">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {project.category && (
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary">
                  {project.category}
                </span>
              )}
              {project.period && (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {project.period}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.title}
            </h1>

            {project.location && (
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                {project.location}
              </div>
            )}
          </header>

          <div className="max-w-3xl space-y-8">
            {/* Objective */}
            {project.objective && (
              <section className="opacity-0 animate-fade-up stagger-1">
                <h2 className="section-title">Objective</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.objective}
                </p>
              </section>
            )}

            {/* Responsibilities */}
            {project.responsibilities && project.responsibilities.length > 0 && (
              <section className="opacity-0 animate-fade-up stagger-2">
                <h2 className="section-title">Responsibilities</h2>
                <ul className="space-y-2">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">›</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Sub-projects */}
            {project.subProjects && project.subProjects.length > 0 && (
              <section className="opacity-0 animate-fade-up stagger-3">
                <h2 className="section-title">Sub-projects</h2>
                <ul className="space-y-2">
                  {project.subProjects.map((sub, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">›</span>
                      <span>
                        {sub.title}
                        {sub.period && <span className="text-xs font-mono ml-2">({sub.period})</span>}
                        {sub.semester && <span className="text-xs font-mono ml-2">({sub.semester})</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
