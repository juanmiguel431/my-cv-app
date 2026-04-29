export type IconProps = {
  className?: string;
};

export type Locale = "en" | "es";

export type Experience = {
  role: string;
  company: string;
  period: string;
  contract?: string;
  description: string;
  contributions: string[];
  technologies: string[];
};

export type TechGroup = {
  title: string;
  items: string;
};

export type Education = {
  degree: string;
  period: string;
  institution: string;
};

export type CvLabels = {
  curriculumVitae: string;
  themeLight: string;
  themeDark: string;
  language: string;
  coreStack: string;
  professionalSummary: string;
  experience: string;
  technologies: string;
  education: string;
  continuingEducation: string;
};

export type CvMetadata = {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  openGraphLocale: string;
  twitterTitle: string;
  twitterDescription: string;
};

export type CvProfile = {
  name: string;
  role: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  profileImageAlt: string;
  summary: string;
  coreStack: string[];
};

export type CvDictionary = {
  locale: Locale;
  metadata: CvMetadata;
  labels: CvLabels;
  profile: CvProfile;
  experiences: Experience[];
  techGroups: TechGroup[];
  education: Education[];
  continuingEducation: string[];
};
