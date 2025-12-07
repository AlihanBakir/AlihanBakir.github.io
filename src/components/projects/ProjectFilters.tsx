import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  categories: string[];
  technologies: string[];
  years: number[];
  selectedCategory: string | null;
  selectedTech: string | null;
  selectedYear: number | null;
  onCategoryChange: (category: string | null) => void;
  onTechChange: (tech: string | null) => void;
  onYearChange: (year: number | null) => void;
}

export function ProjectFilters({
  categories,
  technologies,
  years,
  selectedCategory,
  selectedTech,
  selectedYear,
  onCategoryChange,
  onTechChange,
  onYearChange,
}: ProjectFiltersProps) {
  return (
    <div className="space-y-6 mb-8">
      {/* Category Filter */}
      <div>
        <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
          Category
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
              selectedCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Filter */}
      <div>
        <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
          Technology
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onTechChange(null)}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
              selectedTech === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {technologies.slice(0, 8).map((tech) => (
            <button
              key={tech}
              onClick={() => onTechChange(tech)}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
                selectedTech === tech
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Year Filter */}
      <div>
        <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
          Year
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onYearChange(null)}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
              selectedYear === null
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-md transition-all",
                selectedYear === year
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
