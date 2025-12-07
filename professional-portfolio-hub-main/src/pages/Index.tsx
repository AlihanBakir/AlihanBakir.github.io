import { HeroSection } from "@/components/cv/HeroSection";
import { SkillsSection } from "@/components/cv/SkillsSection";
import { ExperienceSection } from "@/components/cv/ExperienceSection";
import { EducationSection } from "@/components/cv/EducationSection";
import { Layout } from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </Layout>
  );
};

export default Index;
