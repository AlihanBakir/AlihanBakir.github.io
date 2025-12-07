import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <footer className="border-t border-border/50 py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} · Built with precision</p>
        </div>
      </footer>
    </div>
  );
}
