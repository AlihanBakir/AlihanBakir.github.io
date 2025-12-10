import { FileText, ExternalLink } from "lucide-react";
import { publications } from "@/data/cv-data";

export function PublicationsSection() {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Publications</h2>

        <div className="max-w-3xl space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border/50 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-accent text-accent-foreground shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-medium text-foreground mb-2">
                    "{pub.title}"
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground">{pub.venue}</span>
                    {pub.location && `, ${pub.location}`}
                    {pub.details && `, ${pub.details}`}
                  </p>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                    >
                      <ExternalLink className="h-3 w-3" />
                      DOI: {pub.doi}
                    </a>
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
