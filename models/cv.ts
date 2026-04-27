export type IconProps = {
  className?: string;
};

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
