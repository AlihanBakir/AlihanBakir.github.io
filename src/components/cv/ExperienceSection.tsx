import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { experience } from "@/data/cv-data";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function ExperienceSection() {
  const [openItems, setOpenItems] = useState<number[]>([experience[0]?.id]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Experience</h2>

        <div className="relative max-w-3xl">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Collapsible
                key={exp.id}
                open={openItems.includes(exp.id)}
                onOpenChange={() => toggleItem(exp.id)}
              >
                <div
                  className={cn(
                    "relative pl-8 md:pl-12 opacity-0 animate-fade-up",
                    `stagger-${index + 1}`
                  )}
                >
                  {/* Timeline Dot */}
                  <div
                    className={cn(
                      "absolute left-0 md:left-4 top-2 w-2 h-2 rounded-full -translate-x-1/2 transition-colors",
                      openItems.includes(exp.id)
                        ? "bg-primary"
                        : "bg-muted-foreground"
                    )}
                  />

                  {/* Header */}
                  <CollapsibleTrigger className="w-full text-left group">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                        <span className="font-mono">{exp.period}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            openItems.includes(exp.id) && "rotate-180"
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </div>
                  </CollapsibleTrigger>

                  {/* Content */}
                  <CollapsibleContent className="mt-4 space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5">›</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="tech-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
