import { Download, Mail, MapPin, Github, Linkedin, Phone, Globe } from "lucide-react";
import { personalInfo } from "@/data/cv-data";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl opacity-0 animate-fade-up">
          {/* Greeting */}
          <p className="font-mono text-primary text-sm mb-4">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {personalInfo.name}
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-mono mb-6">
            {personalInfo.title}
          </h2>
          
          {/* Summary */}
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            {personalInfo.summary}
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              {personalInfo.phone}
            </a>
            <a 
              href={`https://${personalInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
              {personalInfo.website}
            </a>
          </div>
          <div className="flex items-start gap-2 text-sm text-muted-foreground mb-8">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{personalInfo.location}</span>
          </div>
          
          {/* Social Links & CTA */}
          <div className="flex flex-wrap items-center gap-4">
            {personalInfo.cv ? (
              <Button asChild className="gap-2">
                <a href={personalInfo.cv} download target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            ) : (
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            )}
            
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
