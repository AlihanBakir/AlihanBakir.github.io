import { GraduationCap, BookOpen, User } from "lucide-react";
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
              className="p-6 rounded-lg bg-card border border-border/50 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-accent text-accent-foreground shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
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
                  
                  {edu.thesis && (
                    <div className="mt-3 flex items-start gap-2">
                      <BookOpen className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">Thesis:</span> {edu.thesis}
                      </p>
                    </div>
                  )}
                  
                  {edu.advisor && (
                    <div className="mt-2 flex items-start gap-2">
                      <User className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">Advisor:</span> {edu.advisor}
                      </p>
                    </div>
                  )}

                  {edu.prepSchool && (
                    <p className="text-sm text-muted-foreground mt-2 italic">
                      {edu.prepSchool}
                    </p>
                  )}
                  
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs text-muted-foreground font-mono mb-2">Highlights:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.highlights.map((highlight, i) => (
                          <span key={i} className="tech-tag text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
