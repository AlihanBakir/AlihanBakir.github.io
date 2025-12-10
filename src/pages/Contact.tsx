import { Mail, MapPin, Github, Linkedin, Phone, Globe, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { personalInfo } from "@/data/cv-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 opacity-0 animate-fade-up">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Interested in robotics research, collaboration opportunities, 
                or just want to connect? Feel free to reach out.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-8 opacity-0 animate-fade-up stagger-1">
                <div>
                  <h2 className="section-title">Contact Information</h2>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-muted group-hover:bg-accent transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <span>{personalInfo.email}</span>
                    </a>
                    <a
                      href={`https://${personalInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-muted group-hover:bg-accent transition-colors">
                        <Globe className="h-5 w-5" />
                      </div>
                      <span>{personalInfo.website}</span>
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="p-2 rounded-md bg-muted shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <span className="text-sm">{personalInfo.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="section-title">Social Links</h2>
                  <div className="flex gap-3">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-md bg-muted text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-md bg-muted text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-card border border-border/50">
                  <h3 className="font-mono font-medium text-foreground mb-2">
                    Office Location
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    EPFL STI IGM RRL<br />
                    MED 1 2313 (Batiment MED) Station 9<br />
                    1015 Lausanne, Switzerland
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="opacity-0 animate-fade-up stagger-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Research collaboration, question, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your research interest or collaboration idea..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
