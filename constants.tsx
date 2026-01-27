
import React from 'react';
import { Briefcase, Heart, Target, Users, Search, Award } from 'lucide-react';
import { ExperienceItem, EducationItem, Skill, Initiative } from './types';

export const PERSONAL_INFO = {
  name: "Khyati Raval",
  role: "Human Resource Executive",
  headline: "Empowering Workforces & Shaping Positive Workplace Cultures | Driving Talent Growth & Organizational Success",
  location: "Ahmedabad, Gujarat, India",
  email: "khyatiraval1707@gmail.com",
  linkedin: "https://www.linkedin.com/in/khyati-raval-967839215",
  summary: `As a dedicated Human Resource Executive in the IT industry, I am passionate about building high-performing teams and cultivating a workplace culture that fosters innovation, collaboration, and long-term success. With 4 years of specialized experience in HR and IT recruitment, I have developed a deep expertise in talent acquisition, strategic hiring, and process optimization to drive business growth.`
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Ampli5 Digital Pvt. Ltd.",
    role: "Human Resources Executive",
    period: "January 2025 - Present",
    location: "Ahmedabad, Gujarat, India",
    achievements: [
      "Develop HR strategies and align them with organizational goals",
      "Oversee the hiring process and implement retention strategies",
      "Establish performance appraisal systems and monitor employee progress",
      "Develop, communicate, and enforce HR policies and procedures",
      "Organize skill development programs to enhance employee performance",
      "Resolve workplace conflicts and foster a positive work environment",
      "Manage payroll, benefits, and reward systems effectively"
    ]
  },
  {
    company: "Stepica Solution",
    role: "Freelance HR Recruiter",
    period: "October 2023 - December 2024",
    location: "Remote / Ahmedabad",
    achievements: [
      "Managed end-to-end recruitment cycles as a specialized freelancer",
      "Expertly utilized multiple recruitment portals including Naukri.com, Indeed, Monster, and LinkedIn",
      "Sourced and screened high-potential candidates for diverse technical and non-technical roles",
      "Coordinated with various stakeholders to streamline the hiring workflow",
      "Optimized candidate pipeline management across multiple job boards simultaneously"
    ]
  },
  {
    company: "Viha Digital Commerce",
    role: "HR Executive",
    period: "May 2022 - May 2023",
    location: "Ahmedabad, Gujarat, India",
    achievements: [
      "Understanding the hiring requirements of hiring managers",
      "Attracting candidates through various channels like social media and professional networks",
      "Reviewing resumes and screening candidates",
      "Scheduling interviews by coordinating with candidates and hiring managers",
      "Negotiating job offers and compensation packages with candidates"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Gujarat Technological University, Ahmedabad",
    degree: "Master of Business Administration - MBA, HR",
    period: "April 2020 - September 2023"
  },
  {
    institution: "Bhakta Kavi Narsinh Mehta University (BKNMU), Junagadh",
    degree: "Bachelor of Commerce - BCom, Business Administration",
    period: "June 2017 - April 2020"
  }
];

export const SKILLS: Skill[] = [
  { name: "Strategic Thinking", category: "Leadership" },
  { name: "Leadership & Team Management", category: "Leadership" },
  { name: "Employee Engagement", category: "Culture" },
  { name: "Talent Acquisition", category: "Recruitment" },
  { name: "IT Recruitment", category: "Recruitment" },
  { name: "Performance Management", category: "Operations" },
  { name: "Conflict Resolution", category: "Soft Skills" },
  { name: "Process Optimization", category: "Strategy" }
];

export const INITIATIVES: Initiative[] = [
  {
    title: "Culture Architecture",
    description: "Designing workplaces that are rewarded through structured engagement programs.",
    tag: "Workplace Culture",
    icon: <Heart className="w-6 h-6 text-stone-900" />
  },
  {
    title: "Strategic Talent Sourcing",
    description: "Building robust talent pipelines for technical roles using diverse channels and data-driven screening.",
    tag: "Recruitment",
    icon: <Users className="w-6 h-6 text-stone-900" />
  },
  {
    title: "Performance Optimization",
    description: "Developing transparent appraisal systems that align individual growth with organizational objectives.",
    tag: "Growth",
    icon: <Target className="w-6 h-6 text-stone-900" />
  }
];

export const SERVICES = [
  {
    title: "Talent Acquisition",
    description: "End-to-end recruitment strategies for finding the best fit candidates.",
    icon: <Search className="w-6 h-6 text-stone-900" />
  },
  {
    title: "Employee Engagement",
    description: "Creating meaningful connections and high-performing workplace cultures.",
    icon: <Award className="w-6 h-6 text-stone-900" />
  },
  {
    title: "Policy & Operations",
    description: "Streamlining HR processes from payroll to performance management.",
    icon: <Briefcase className="w-6 h-6 text-stone-900" />
  }
];
