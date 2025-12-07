import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/cv-data";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative p-6 rounded-lg bg-card border border-border/50 card-hover">
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
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
        <span className="text-xs text-muted-foreground font-mono">
          {project.year}
        </span>
      </div>

      {/* Title */}
      <Link to={`/projects/${project.id}`} className="block mb-3">
        <h3 className="font-mono font-semibold text-lg text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
          {project.title}
          <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
        </h3>
      </Link>

      {/* Summary */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {project.summary}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-tag text-xs">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-2 border-t border-border/50">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            Source
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Demo
          </a>
        )}
        <Link
          to={`/projects/${project.id}`}
          className="ml-auto text-xs text-primary hover:underline font-mono"
        >
          View details →
        </Link>
      </div>
    </article>
  );
}
