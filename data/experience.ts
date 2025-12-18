export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: 'work' | 'competition' | 'education' | 'leadership';
}

export const experiences: Experience[] = [
  // Work & Leadership Positions
{
    id: "alwah-dev",
    title: "Lead Full Stack Developer",
    company: "Alwah High School",
    location: "Tangier, Morocco",
    startDate: "June 2025",
    endDate: "Present",
    description: "Architecting 'Alwah.ma', a centralized digital ecosystem dedicated to students and clubs for sharing achievements, managing academic resources, and facilitating school-client interaction.",
    achievements: [
      "Developed core platform modules including 'EduShare' for pedagogical resources, 'Highlights' for archiving club news.",
      "Implemented 'AlwahGPT', an AI-driven agent feature capable of generating recommendation letters and assisting students.",
      "Built a secure Student Portal featuring Massar ID authentication, real-time notifications, and personalized course schedule management.",
      "Engineered administrative features for online student registration, scholarship filtering, and extra-curricular activity reservations."
    ],
    type: 'work'
},
{
    id: "alwah-vp",
    title: "Vice President of School Council",
    company: "Alwah High School",
    location: "Tangier, Morocco",
    startDate: "October 2024",
    endDate: "June 2025",
    description: "Elected student representative responsible for bridging the gap between the student body and administration.",
    achievements: [
      "Spearheaded student initiatives to improve campus life, educational resources, and extracurricular activities",
      "Acted as the primary liaison between students and the administration, facilitating effective communication strategies",
      "Organized and directed school-wide events, coordinating teams of volunteers to ensure smooth execution",
      "Advocated for student needs in council meetings, resulting in tangible improvements to school facilities"
    ],
    type: 'leadership'
  },
  {
    id: "freelance-dev",
    title: "Freelance Web Developer",
    company: "Remote / Self-Employed",
    location: "Remote",
    startDate: "november 2025",
    endDate: "Present",
    description: "Delivering bespoke, high-performance web solutions for diverse clients using the modern JavaScript stack.",
    achievements: [
      "Developed responsive, SEO-optimized websites using Next.js, React, and Tailwind CSS",
      "Transformed client requirements into functional, deployed applications with a focus on clean code and performance",
      "Integrated Headless CMS solutions to allow clients to manage their own content easily",
      "Optimized web vitals to ensure fast load times and superior user experience across all devices"
    ],
    type: 'work'
  },

  // Research & Competitions (Innovation)
  {
    id: "nasa-space-apps",
    title: "Local Winner (1st Place)",
    company: "NASA Space Apps Challenge",
    location: "Ben Guerir, Morocco",
    startDate: "October 2025",
    endDate: "October 2025",
    description: "victory in the world's largest hackathon by developing 'Stellar Stories', an interactive space weather game.",
    achievements: [
      "Secured 1st Place (Local Winner) by developing an educational game that visualizes complex NASA scientific data",
      "Engineered the game logic and interactive frontend, ensuring a seamless and engaging user experience",
      "Collaborated under strict 48-hour hackathon deadlines to prototype, test, and pitch a working solution",
      "Translated complex space weather concepts into accessible gameplay mechanics for students"
    ],
    type: 'competition'
  },
  {
    id: "wro-finalist",
    title: "International Finalist ",
    company: "World Robot Olympiad (WRO)",
    location: "Izmir, Turkey",
    startDate: "2024",
    endDate: "2024",
    description: "Represented Morocco at the international level after winning the National Championship in robotics.",
    achievements: [
      "Qualified for the International Final in Turkey after securing the National Championship title in Morocco",
      "Designed and programmed autonomous robots to solve complex algorithmic challenges under strict time constraints",
      "Optimized robot sensor integration and pathfinding algorithms to achieve maximum precision and speed",
      "Demonstrated resilience and problem-solving skills in a high-stakes international competitive environment"
    ],
    type: 'competition'
  }
];