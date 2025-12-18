export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "alwah.ma",
    title: "Alwah.ma Platform",
    description: "A comprehensive digital platform for Alwah High School, featuring a public news portal, an internal management system for clubs, and student resources.",
    longDescription: "Alwah.ma is a platform dedicated to Alwah’s students to share Alwah Clubs News and achievements. It acts as an archiving system, provides resources to finance clubs, and serves as an entry point to share academic information via an interactive interface.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "AWS", "Framer Motion", "React.js"],
    achievements: [
      "Architected a user-friendly platform for students to share club news and achievements",
      "Implemented resource management features to help finance clubs effectively",
      "Created an interactive interface for sharing academic information between admin and students",
      "Optimized the platform for performance and responsiveness using Next.js server-side rendering"
    ],
    image: "/images/projects/alwah/image.png", // Assure-toi d'avoir une image ici
    liveUrl: "https://www.alwah.ma/",
    featured: true
  },
  {
    id: "stellar-stories",
    title: "Stellar Stories (NASA Space Apps)",
    description: "Award-winning educational game visualizing space weather phenomena, developed during the NASA Space Apps Challenge 2025.",
    longDescription: "A gamified educational experience designed to teach students about the impact of solar flares and space weather. Developed in 48 hours during the hackathon, the project utilizes NASA's open data to create an engaging narrative.",
    technologies: ["Game Development", "JavaScript", "NASA Open Data", "Gamification", "HTML5/CSS3"],
    achievements: [
      "Won 1st Place (Local Winner) at NASA Space Apps Challenge Ben Guerir 2025",
      "Translated complex scientific data into an accessible and fun gameplay loop",
      "Led the team through rapid prototyping and pitching under strict time constraints"
    ],
    image: "/images/projects/nasa/nasa .jpg", // Image à ajouter
    featured: true
  },
  {
    id: "wro-2024",
    title: "WRO International Final 2024",
    description: "Autonomous robotics project representing Morocco at the World Robot Olympiad International Final in İzmir, Turkey.",
    longDescription: "Represented Morocco at the WRO 2024 International Final in İzmir, Turkey, in the RoboMission Junior category. The project involved designing and programming an autonomous robot to solve randomized missions on a competition field.",
    technologies: ["Robotics", "LEGO Mindstorms", "Python (PyBricks)", "Algorithmic Logic", "Hardware Engineering"],
    achievements: [
      "Designed and optimized an autonomous robot to solve complex missions with precision",
      "Collaborated intensively to adapt strategies under international competition pressure",
      "Strengthened skills in robotics engineering and strategic thinking",
      "Competed globally against participants from over 90 countries"
    ],
    image: "/images/projects/wro/wro.webp", // Image à ajouter
    featured: true
  },

  {
    id: "cs50x-harvard",
    title: "CS50x Computer Science Projects",
    description: "A collection of rigorous problem sets and projects completed during the Harvard University CS50x curriculum.",
    technologies: ["C", "Python", "SQL", "Flask", "Data Structures", "Algorithms"],
    achievements: [
      "Implemented complex data structures like Hash Tables and Tries in C",
      "Developed web applications using Flask and SQL",
      "Mastered low-level memory management and algorithmic efficiency"
    ],
    image: "/images/projects/cs50/cs50.jpg", // Image à ajouter
    featured: false
  }
];