import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { projects } from "@/data/cv-data";
import { cn } from "@/lib/utils";
import { Folder, MapPin, Calendar, Target, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const categoryColors: Record<string, string> = {
  Research: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Academic: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  Society: "bg-green-500/10 text-green-500 border-green-500/20",
  Competition: "bg-orange-500/10 text-orange-500 border-orange-500/20",
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<string[]>([projects[0]?.id]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Extract unique categories
  const categories = useMemo(
    () => [...new Set(projects.map((p) => p.category).filter(Boolean))],
    []
  );

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projects
            </h1>
            <p className="text-muted-foreground">
              A collection of research and academic projects in robotics, 
              mechatronics, autonomous systems, and engineering design.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8 opacity-0 animate-fade-up stagger-1">
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
                !selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as string)}
                className={cn(
                  "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects List */}
          <div className="max-w-4xl space-y-6">
            {filteredProjects.map((project, index) => {
              const colorClass = categoryColors[project.category || ""] || "bg-accent text-accent-foreground border-border";
              
              return (
                <Collapsible
                  key={project.id}
                  open={openItems.includes(project.id)}
                  onOpenChange={() => toggleItem(project.id)}
                >
                  <div
                    className={cn(
                      "p-6 rounded-lg bg-card border border-border/50 card-hover opacity-0 animate-fade-up",
                      `stagger-${Math.min(index + 2, 5)}`
                    )}
                  >
                    <CollapsibleTrigger className="w-full text-left group">
                      <div className="flex items-start gap-4">
                        <div className={cn("p-2 rounded-md shrink-0 border", colorClass)}>
                          <Folder className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 text-muted-foreground transition-transform shrink-0 mt-1",
                                openItems.includes(project.id) && "rotate-180"
                              )}
                            />
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            {project.period && (
                              <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                                <Calendar className="h-3 w-3" />
                                {project.period}
                              </span>
                            )}
                            {project.location && (
                              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                {project.location}
                              </span>
                            )}
                            {project.category && (
                              <span className={cn("px-2 py-0.5 text-xs font-mono rounded border", colorClass)}>
                                {project.category}
                              </span>
                            )}
                          </div>
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
                          <p className="text-xs text-muted-foreground font-mono mb-2">Responsibilities:</p>
                          <ul className="space-y-1">
                            {project.responsibilities.map((resp, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-primary mt-0.5">›</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.subProjects && project.subProjects.length > 0 && (
                        <div>
                          <p className="text-xs text-muted-foreground font-mono mb-2">Sub-projects:</p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {project.subProjects.map((sub, i) => (
                              <div
                                key={i}
                                className="p-3 rounded-md bg-muted/50 border border-border/50"
                              >
                                <p className="text-sm text-foreground">
                                  {sub.title}
                                </p>
                                {sub.period && (
                                  <p className="text-xs text-muted-foreground font-mono mt-1">
                                    {sub.period}
                                  </p>
                                )}
                                {sub.semester && (
                                  <p className="text-xs text-muted-foreground font-mono mt-1">
                                    {sub.semester}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects match the selected filters.
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-primary hover:underline font-mono text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
