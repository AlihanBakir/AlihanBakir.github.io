import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { projects } from "@/data/cv-data";
import { cn } from "@/lib/utils";

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
              <span
                className={cn(
                  "px-2 py-0.5 text-xs font-mono rounded",
                  project.status === "completed"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent text-accent-foreground"
                )}
              >
                {project.status}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {project.year}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Tag className="h-3.5 w-3.5" />
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex items-center gap-4 mt-6">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm font-medium"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </header>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Problem */}
              <section className="opacity-0 animate-fade-up stagger-1">
                <h2 className="section-title">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </section>

              {/* Solution */}
              <section className="opacity-0 animate-fade-up stagger-2">
                <h2 className="section-title">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </section>

              {/* Outcome */}
              <section className="opacity-0 animate-fade-up stagger-3">
                <h2 className="section-title">The Outcome</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.outcome}
                </p>
              </section>

              {/* Placeholder for diagrams/images */}
              <section className="opacity-0 animate-fade-up stagger-4">
                <h2 className="section-title">Architecture</h2>
                <div className="aspect-video rounded-lg bg-muted border border-border/50 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground font-mono">
                    Architecture diagram placeholder
                  </span>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 opacity-0 animate-fade-up stagger-2">
              {/* Tech Stack */}
              <div className="p-6 rounded-lg bg-card border border-border/50">
                <h3 className="section-title mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="p-6 rounded-lg bg-card border border-border/50">
                  <h3 className="section-title mb-4">Key Metrics</h3>
                  <div className="space-y-4">
                    {project.metrics.map((metric, index) => (
                      <div key={index}>
                        <p className="text-2xl font-mono font-bold text-primary">
                          {metric.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
