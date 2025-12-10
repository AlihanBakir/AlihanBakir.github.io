import { useState } from "react";
import { Folder, ChevronDown, MapPin, Target } from "lucide-react";
import { projects } from "@/data/cv-data";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function ProjectsSection() {
  const [openItems, setOpenItems] = useState<string[]>([projects[0]?.id]);
  const [filter, setFilter] = useState<string>("all");

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const categories = ["all", ...new Set(projects.map(p => p.category).filter(Boolean))];
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-md transition-all capitalize",
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-3xl space-y-6">
          {filteredProjects.map((project, index) => (
            <Collapsible
              key={project.id}
              open={openItems.includes(project.id)}
              onOpenChange={() => toggleItem(project.id)}
            >
              <div
                className={cn(
                  "p-6 rounded-lg bg-card border border-border/50 card-hover opacity-0 animate-fade-up",
                  `stagger-${Math.min(index + 1, 5)}`
                )}
              >
                <CollapsibleTrigger className="w-full text-left group">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-accent text-accent-foreground shrink-0">
                      <Folder className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-mono font-medium text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 text-muted-foreground transition-transform shrink-0",
                            openItems.includes(project.id) && "rotate-180"
                          )}
                        />
                      </div>
                      {project.period && (
                        <p className="text-sm text-muted-foreground font-mono mt-1">
                          {project.period}
                        </p>
                      )}
                      {project.location && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3" />
                          {project.location}
                        </div>
                      )}
                    </div>
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent className="mt-4 ml-14 space-y-4">
                  {project.objective && (
                    <div className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">Objective:</span> {project.objective}
                      </p>
                    </div>
                  )}

                  {project.responsibilities && project.responsibilities.length > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground font-mono mb-2">Responsibilities:</p>
                      <ul className="space-y-1">
                        {project.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">›</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.subProjects && project.subProjects.length > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground font-mono mb-2">Sub-projects:</p>
                      <ul className="space-y-1">
                        {project.subProjects.map((sub, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">›</span>
                            <span>
                              {sub.title}
                              {sub.period && <span className="text-xs font-mono ml-2">({sub.period})</span>}
                              {sub.semester && <span className="text-xs font-mono ml-2">({sub.semester})</span>}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.category && (
                    <span className="inline-block px-2 py-1 text-xs font-mono rounded bg-accent text-accent-foreground">
                      {project.category}
                    </span>
                  )}
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
