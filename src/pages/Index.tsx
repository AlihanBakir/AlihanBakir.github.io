import { HeroSection } from "@/components/cv/HeroSection";
import { SkillsSection } from "@/components/cv/SkillsSection";
import { ExperienceSection } from "@/components/cv/ExperienceSection";
import { EducationSection } from "@/components/cv/EducationSection";
import { PublicationsSection } from "@/components/cv/PublicationsSection";
import { ProjectsSection } from "@/components/cv/ProjectsSection";
import { AwardsSection } from "@/components/cv/AwardsSection";
import { LanguagesSection } from "@/components/cv/LanguagesSection";
import { AffiliationsSection } from "@/components/cv/AffiliationsSection";
import { InterestsSection } from "@/components/cv/InterestsSection";
import { ReferencesSection } from "@/components/cv/ReferencesSection";
import { Layout } from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <EducationSection />
      <PublicationsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AwardsSection />
      <SkillsSection />
      <LanguagesSection />
      <AffiliationsSection />
      <InterestsSection />
      <ReferencesSection />
    </Layout>
  );
};

export default Index;
