export type FeaturedProject = {
  title: string;
  date: string;
  description: string;
  roles: string[];
  image: string;
  imageFit?: "cover";
  href: string;
};

export const featuredWorkData: FeaturedProject[] = [
  {
    title: "CeylonVoyages - Tourism Review System",
    date: "Jan 2023",
    description:
      "Displayed ratings and reviews for 2 travel categories, hotels and restaurants, with map-based place discovery.",
    roles: ["MERN Stack", "Redux", "Tailwind CSS"],
    image: "/images/feature-work/CeylonVoyages - Tourism Review System.jpg",
    href: "https://github.com/MenushaKatipearachchi/AF_PROJECT_G34",
  },
  {
    title: "WellnessRoots - Herbal and Ayurveda Marketplace",
    date: "Jan 2023",
    description:
      "Built PayPal checkout and a community-driven review workflow for a herbal and Ayurveda marketplace, enabling secure checkout and trust-building feedback.",
    roles: ["React.js", "Node.js", "MongoDB", "Docker", "Kubernetes", "Microsoft Azure"],
    image: "/images/feature-work/WellnessRoots.jpg",
    href: "https://github.com/MenushaKatipearachchi/DS-Y3S1-PROJECT",
  },
  {
    title: "PoochPaw - Intelligent Dog Management",
    date: "2023 - 2024",
    description:
      "Combined machine learning and IoT into 2 capabilities for canine care: health monitoring and skin-disease detection.",
    roles: ["Python", "TensorFlow", "FastAPI", "Firebase", "Google Colab"],
    image: "/images/feature-work/PoochPaw - Intelligent Dog Management.jpg",
    href: "https://github.com/OmeshSachethana/PoochPaw",
  },
  {
    title: "GazeGenius - Vision Problem Detector",
    date: "Jan 2023",
    description:
      "Created a mobile screening flow with 2 computerized assessments: eye-fatigue checks and color-blindness detection.",
    roles: ["Flutter", "Firebase", "Google ML Kit", "TensorFlow Lite"],
    image: "/images/feature-work/GazeGenius - Vision Problem Detector.png",
    href: "https://github.com/MenushaKatipearachchi/SPM_Project",
  },
  {
    title: "LECO SMS with RabbitMQ Integration",
    date: "2023 - 2024",
    description:
      "Created an asynchronous SMS workflow with RabbitMQ, connecting 2 internal services and 1 Hutch telecom API endpoint.",
    roles: ["Java", "Spring Boot", "RabbitMQ", "Django REST Framework", "Oracle DB"],
    image: "/images/feature-work/LECO SMS with RabbitMQ Integration.png",
    imageFit: "cover",
    href: "https://github.com/MenushaKatipearachchi",
  },
];
