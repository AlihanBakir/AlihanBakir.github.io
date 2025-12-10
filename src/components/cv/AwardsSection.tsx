import { Award } from "lucide-react";
import { awards } from "@/data/cv-data";

export function AwardsSection() {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Awards & Honors</h2>

        <div className="max-w-3xl space-y-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 card-hover"
            >
              <div className="p-2 rounded-md bg-accent text-accent-foreground shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div className="flex-1 flex items-center justify-between gap-4 flex-wrap">
                <h3 className="font-mono font-medium text-foreground">
                  {award.title}
                </h3>
                <span className="text-sm text-muted-foreground font-mono shrink-0">
                  {award.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
