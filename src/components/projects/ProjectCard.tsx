import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { Project } from "@/data/cv-data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative p-6 rounded-lg bg-card border border-border/50 card-hover">
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        {project.category && (
          <span className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 text-primary">
            {project.category}
          </span>
        )}
        {project.period && (
          <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {project.period}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-mono font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-3">
        {project.title}
      </h3>

      {/* Location */}
      {project.location && (
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />
          {project.location}
        </div>
      )}

      {/* Objective */}
      {project.objective && (
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.objective}
        </p>
      )}

      {/* Sub-projects count */}
      {project.subProjects && project.subProjects.length > 0 && (
        <p className="text-xs text-muted-foreground">
          {project.subProjects.length} sub-projects
        </p>
      )}
    </article>
  );
}
