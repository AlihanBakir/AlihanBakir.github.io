import { useState } from "react";
import { skills } from "@/data/cv-data";
import { cn } from "@/lib/utils";

const skillCategories = [
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "infrastructure", label: "Infrastructure" },
  { key: "practices", label: "Practices" },
] as const;

type SkillCategory = typeof skillCategories[number]["key"];

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<SkillCategory | "all">("all");

  const filteredCategories = activeFilter === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.key === activeFilter);

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Skills & Technologies</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
              activeFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
                activeFilter === category.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <div key={category.key} className="animate-fade-in">
              <h3 className="font-mono text-sm font-medium text-foreground mb-3">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
