export type ExperienceItem = {
  icon: string;
  role: string;
  company: string;
  location: string;
  startLabel: string;
  endLabel: string;
  bulletPoints: string[];
  technologies: string[];
};

export type EducationItem = {
  date: string;
  title: string;
  subtitle: string;
};

export type Publication = {
  title: string;
  venue: string;
  doi: string;
  url: string;
};

export type Reference = {
  name: string;
  role: string;
  phone: string;
  email: string;
};

export type ProjectOverviewData = {
  publication: Publication;
  award: { title: string; project: string; event: string; certificateUrl: string };
  references: Reference[];
};

export const experienceData: ExperienceItem[] = [
  {
    icon: "/images/icon/spark-icon.svg",
    role: "Software Engineer",
    company: "LB Finance PLC Corporate Office",
    location: "Sri Lanka",
    startLabel: "Aug 2026",
    endLabel: "Present",
    bulletPoints: [
      "Created a new insurance commission process covering commission adjustments and commission reconciliation.",
    ],
    technologies: [],
  },
  {
    icon: "/images/icon/spark-icon.svg",
    role: "Associate Software Engineer",
    company: "LB Finance PLC Corporate Office",
    location: "Sri Lanka",
    startLabel: "Apr 2025",
    endLabel: "Aug 2026",
    bulletPoints: [
      "Systematized 4 core insurance workflows that were previously manual: quotation, application response, policy response, and renewal.",
      "Engineered renewal-notice ingestion from external insurers and reconciled matched versus unmatched records against internal data.",
      "Extended the Deposit Module and helped launch Mudarabah as an additional product.",
      "Partnered with a 6-member team to deliver backend logic, UI/UX components, Dotnet services, and T-SQL stored procedures.",
    ],
    technologies: ["Dotnet", "C#", "Angular", "TypeScript", "T-SQL", "Azure DevOps"],
  },
  {
    icon: "/images/icon/tailwind-icon.svg",
    role: "Software Engineer Intern",
    company: "Lanka Electricity Company (Pvt) Ltd",
    location: "Sri Lanka",
    startLabel: "Dec 2023",
    endLabel: "Apr 2025",
    bulletPoints: [
      "During a 17-month internship, built RESTful APIs in Spring Boot and connected RabbitMQ-based SMS processing.",
      "Produced unit tests and API documentation for core service endpoints.",
      "Tuned PL/SQL queries and resolved Java and Spring Boot defects to improve service reliability.",
      "Coordinated API deployments through WSO2 Identity Server.",
    ],
    technologies: ["Java", "Spring Boot", "RabbitMQ", "WSO2", "PL/SQL", "GitHub", "GitLab"],
  },
];

export const educationData: EducationItem[] = [
  {
    date: "2021 - 2024",
    title: "BSc (Hons) in Information Technology",
    subtitle:
      "Sri Lanka Institute of Information Technology (SLIIT) - Specializing in Software Engineering",
  },
  {
    date: "2017 - 2020",
    title: "GCE Ordinary Level and Advanced Level",
    subtitle: "Royal Institute International School - Secondary Education; Ordinary Level (2017): Passed; Advanced Level (2020): Passed",
  },
];

export const skillGroups = [
  { label: "Programming", tools: ["C#", "Java", "Python", "JavaScript", "PHP"] },
  { label: "Frontend", tools: ["Angular", "TypeScript", "React.js", "Vite.js", "Flutter", "Tailwind CSS", "MUI", "Bootstrap", "PrimeNG", "PrimeFlex"] },
  { label: "Backend", tools: ["Dotnet", "Spring Boot", "FastAPI", "Node.js", "Django REST Framework"] },
  { label: "Databases", tools: ["SSMS", "MongoDB", "Firebase", "Oracle", "PL/SQL"] },
  { label: "DevOps and Cloud", tools: ["Docker", "Kubernetes (AKS)", "Microsoft Azure"] },
  { label: "Version Control", tools: ["Git", "GitHub", "GitLab", "Azure DevOps"] },
  { label: "Microservices and Messaging", tools: ["RabbitMQ", "REST APIs"] },
];

export const softSkills = [
  "Problem-solving and critical thinking",
  "Fast learning and adaptability",
  "Communication and teamwork",
  "Time and stress management",
];

export const projectOverviewData: ProjectOverviewData = {
  award: {
    title: "Best Presentation Award",
    project: "Intelligent Systems for Comprehensive Dog Management",
    event: "ICSIM 2025 (Singapore Institute of Electronics)",
    certificateUrl: "https://lbfinanceplc-my.sharepoint.com/:b:/g/personal/menushae_lbfinance_lk/IQCdULGoCkE8TYVR95ZtfrlaAa33HRRuLIS_VPjGgvVAW6I?e=3HDjop",
  },
  publication: {
    title: "Intelligent Systems for Comprehensive Dog Management",
    venue: "ICIT '24",
    doi: "10.1145/3718391.3727886",
    url: "https://doi.org/10.1145/3718391.3727886",
  },
  references: [
    {
      name: "Udara Bandara",
      role: "Associate Technical Lead, LB Finance",
      phone: "(+94) 76 906 7246",
      email: "udarab@lbfinance.lk",
    },
    {
      name: "Mahesh Dunuweera",
      role: "Chief Engineer, Lanka Electricity Company (Pvt) Ltd",
      phone: "(+94) 71 016 8151",
      email: "mahesh.dunuweera@leco.lk",
    },
  ],
};
