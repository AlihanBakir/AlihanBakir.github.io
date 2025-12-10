import { User, Mail, Phone, Building } from "lucide-react";
import { references } from "@/data/cv-data";

export function ReferencesSection() {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">References</h2>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
          {references.map((ref, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border/50 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-accent text-accent-foreground shrink-0">
                  <User className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-mono font-medium text-foreground">
                    {ref.name}
                  </h3>
                  <p className="text-sm text-primary">
                    {ref.title}
                  </p>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Building className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{ref.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0" />
                    <a 
                      href={`tel:${ref.phone}`}
                      className="hover:text-primary transition-colors"
                    >
                      {ref.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 shrink-0" />
                    <a 
                      href={`mailto:${ref.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {ref.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
