import { Heart } from "lucide-react";
import { interests } from "@/data/cv-data";

export function InterestsSection() {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Interests</h2>

        <div className="max-w-3xl flex flex-wrap gap-3">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 card-hover"
            >
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground font-mono">
                {interest}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
