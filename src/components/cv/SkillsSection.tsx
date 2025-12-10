import { useState } from "react";
import { skills, skillCategories } from "@/data/cv-data";
import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

type SkillCategory = typeof skillCategories[number]["key"];

const skillLevelStars: Record<string, number> = {
  advanced: 5,
  good: 4,
  intermediate: 3,
  basic: 2,
};

const skillLevelColors: Record<string, string> = {
  advanced: "text-green-500",
  good: "text-blue-500",
  intermediate: "text-yellow-500",
  basic: "text-orange-500",
};

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<SkillCategory | "all">("all");

  const filteredCategories = activeFilter === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.key === activeFilter);

  const renderStars = (level: string) => {
    const stars = skillLevelStars[level] || 3;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-3 w-3",
              i < stars ? skillLevelColors[level] : "text-muted-foreground/30"
            )}
            fill={i < stars ? "currentColor" : "none"}
          />
        ))}
      </div>
    );
  };

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredCategories.map((category) => (
            <div 
              key={category.key} 
              className="p-6 rounded-lg bg-card border border-border/50 animate-fade-in"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-sm font-medium text-foreground">
                  {category.label}
                </h3>
                {renderStars(category.key)}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <span 
                    key={skill} 
                    className={cn(
                      "px-2 py-1 text-xs font-mono rounded-md border",
                      category.key === "advanced" && "bg-green-500/10 text-green-600 border-green-500/20",
                      category.key === "good" && "bg-blue-500/10 text-blue-600 border-blue-500/20",
                      category.key === "intermediate" && "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
                      category.key === "basic" && "bg-orange-500/10 text-orange-600 border-orange-500/20"
                    )}
                  >
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
