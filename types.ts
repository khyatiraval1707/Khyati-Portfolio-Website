
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Initiative {
  title: string;
  description: string;
  tag: string;
  icon: any;
}
