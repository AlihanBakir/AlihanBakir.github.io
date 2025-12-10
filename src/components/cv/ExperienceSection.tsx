import { useState } from "react";
import { ChevronDown, MapPin, Briefcase, GraduationCap, Rocket, FlaskConical } from "lucide-react";
import { experience } from "@/data/cv-data";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  teaching: GraduationCap,
  startup: Rocket,
  research: FlaskConical,
  internship: Briefcase,
};

const typeLabels: Record<string, string> = {
  teaching: "Teaching",
  startup: "Start-up",
  research: "Research",
  internship: "Internship",
};

const typeColors: Record<string, string> = {
  teaching: "bg-blue-500/10 text-blue-500",
  startup: "bg-orange-500/10 text-orange-500",
  research: "bg-green-500/10 text-green-500",
  internship: "bg-purple-500/10 text-purple-500",
};

export function ExperienceSection() {
  const [openItems, setOpenItems] = useState<number[]>([experience[0]?.id]);
  const [filter, setFilter] = useState<string>("all");

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const types = ["all", "teaching", "startup", "research", "internship"];
  const filteredExperience = filter === "all" 
    ? experience 
    : experience.filter(exp => exp.type === filter);

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experience</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-md transition-all capitalize",
                filter === type
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {type === "all" ? "All" : typeLabels[type]}
            </button>
          ))}
        </div>

        <div className="relative max-w-3xl">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          {/* Experience Items */}
          <div className="space-y-6">
            {filteredExperience.map((exp, index) => {
              const Icon = typeIcons[exp.type] || Briefcase;
              const colorClass = typeColors[exp.type] || "bg-accent text-accent-foreground";
              
              return (
                <Collapsible
                  key={exp.id}
                  open={openItems.includes(exp.id)}
                  onOpenChange={() => toggleItem(exp.id)}
                >
                  <div
                    className={cn(
                      "relative pl-8 md:pl-12 opacity-0 animate-fade-up",
                      `stagger-${Math.min(index + 1, 5)}`
                    )}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={cn(
                        "absolute left-0 md:left-4 top-3 w-2 h-2 rounded-full -translate-x-1/2 transition-colors",
                        openItems.includes(exp.id)
                          ? "bg-primary"
                          : "bg-muted-foreground"
                      )}
                    />

                    {/* Card */}
                    <div className="p-4 rounded-lg bg-card border border-border/50 card-hover">
                      <CollapsibleTrigger className="w-full text-left group">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div className={cn("p-2 rounded-md shrink-0", colorClass)}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                                {exp.role}
                              </h3>
                              <p className="text-muted-foreground text-sm">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                            <span className="font-mono text-xs">{exp.period}</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform",
                                openItems.includes(exp.id) && "rotate-180"
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2 ml-11">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </CollapsibleTrigger>

                      {/* Content */}
                      <CollapsibleContent className="mt-4 ml-11 space-y-3">
                        {exp.courses && exp.courses.length > 0 && (
                          <div>
                            <p className="text-xs text-muted-foreground font-mono mb-2">Courses Taught:</p>
                            <ul className="space-y-1">
                              {exp.courses.map((course, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="text-primary mt-0.5">›</span>
                                  {course}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exp.supervisor && (
                          <p className="text-sm text-muted-foreground">
                            <span className="text-foreground font-medium">Supervisor:</span> {exp.supervisor}
                          </p>
                        )}

                        {exp.advisor && (
                          <p className="text-sm text-muted-foreground">
                            <span className="text-foreground font-medium">Advisor:</span> {exp.advisor}
                          </p>
                        )}

                        {exp.coordinator && (
                          <p className="text-sm text-muted-foreground">
                            <span className="text-foreground font-medium">Coordinator:</span> {exp.coordinator}
                          </p>
                        )}

                        <span className={cn("inline-block px-2 py-1 text-xs font-mono rounded", colorClass)}>
                          {typeLabels[exp.type]}
                        </span>
                      </CollapsibleContent>
                    </div>
                  </div>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
