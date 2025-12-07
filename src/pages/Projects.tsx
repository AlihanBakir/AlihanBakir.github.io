import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { projects } from "@/data/cv-data";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Extract unique values for filters
  const categories = useMemo(
    () => [...new Set(projects.map((p) => p.category))],
    []
  );
  const technologies = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tech))].sort(),
    []
  );
  const years = useMemo(
    () => [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a),
    []
  );

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedCategory && project.category !== selectedCategory) return false;
      if (selectedTech && !project.tech.includes(selectedTech)) return false;
      if (selectedYear && project.year !== selectedYear) return false;
      return true;
    });
  }, [selectedCategory, selectedTech, selectedYear]);

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
              A collection of projects I've built, from open-source tools to
              production systems. Each represents a problem solved and lessons
              learned.
            </p>
          </div>

          {/* Filters */}
          <div className="opacity-0 animate-fade-up stagger-1">
            <ProjectFilters
              categories={categories}
              technologies={technologies}
              years={years}
              selectedCategory={selectedCategory}
              selectedTech={selectedTech}
              selectedYear={selectedYear}
              onCategoryChange={setSelectedCategory}
              onTechChange={setSelectedTech}
              onYearChange={setSelectedYear}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`opacity-0 animate-fade-up stagger-${Math.min(index + 2, 5)}`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects match the selected filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedTech(null);
                  setSelectedYear(null);
                }}
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
