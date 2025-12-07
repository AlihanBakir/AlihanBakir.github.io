import { GraduationCap } from "lucide-react";
import { education } from "@/data/cv-data";

export function EducationSection() {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/50 card-hover"
            >
              <div className="p-2 rounded-md bg-accent text-accent-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-mono font-medium text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono shrink-0">
                    {edu.period}
                  </span>
                </div>
                {edu.notes && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {edu.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
