import { Languages } from "lucide-react";
import { languages } from "@/data/cv-data";

export function LanguagesSection() {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Languages</h2>

        <div className="max-w-3xl flex flex-wrap gap-4">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border/50 card-hover"
            >
              <Languages className="h-5 w-5 text-primary" />
              <div>
                <span className="font-mono font-medium text-foreground">
                  {lang.language}
                </span>
                <span className="text-muted-foreground text-sm ml-2">
                  ({lang.level})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
