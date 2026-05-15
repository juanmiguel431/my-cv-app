export type IconProps = {
  className?: string;
};

export type Locale = "en" | "es";

export type Experience = {
  company: string;
  url: string;
  description: string;
  contract?: boolean;
  roles: ExperienceRole[];
};

export type ExperienceRole = {
  name: string;
  period: string;
  periodLength: string;
  contributions: string[];
  technologies: string[];
}

export type TechGroup = {
  title: string;
  items: string;
};

export type Education = {
  degree: string;
  period: string;
  institution: string;
  url: string;
};

export type CvLabels = {
  curriculumVitae: string;
  themeLight: string;
  themeDark: string;
  language: string;
  coreStack: string;
  coreSkills: string;
  professionalSummary: string;
  experience: string;
  education: string;
  download: string;
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
};

export type CvDictionary = {
  locale: Locale;
  pdfFileName: string;
  metadata: CvMetadata;
  labels: CvLabels;
  profile: CvProfile;
  experiences: Experience[];
  techGroups: TechGroup[];
  education: Education[];
};
