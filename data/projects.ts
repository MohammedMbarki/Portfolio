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
    title: "alwah.ma",
    description: "Alwah.ma is a platform dedicated to Alwah’s students, to share Alwah Clubs News and achievements (kind of archiving), it provides resources to finance the club, and an entry point to share any types of academic information and an interactive interface with the clients.",
    technologies: [ "Next.js", "TypeScript", "TailwindCSS", "AWS", "framer motion", "react-js"],
    achievements: [
      "Developed a user-friendly platform for Alwah's students to share club news and achievements",
      "Implemented resource management features to help finance clubs effectively",
      "Created an interactive interface for sharing academic information",
      "Optimized the platform for performance and responsiveness using Next.js and TailwindCSS"
    ],
    image: "/images/projects/zenith/image.png",
    liveUrl: "https://www.alwah.ma/",
    featured: true
  },
  {
    id: "World Robot Olympiad 2024" ,
    title: "WRO International Final 2024, RoboMission Junior",
    description: " Represented Morocco at the WRO 2024 International Final in İzmir, Turkey, in the RoboMission Junior category.",
    technologies: ["robotics",  "LEGO Mindstorms", "programming", "teamwork" ],
    achievements: [
      "Designed, optimized, and programmed a LEGO autonomous robot to solve complex missions with precision and speed.",
      "Collaborated intensively with teammates to analyze challenges, implement solutions, and adapt strategies under international competition conditions.",
      "Strengthened skills in robotics engineering, coding (Python/PyBricks), strategic thinking, and high-pressure teamwork.",
      "Demonstrated creativity, resilience, and innovation in a global environment gathering participants from over 90 countries.",

    ],
    image: "/images/projects/pokearena/pokearena.png",
    github: "https://github.com/achyut21/pokearena",
    featured: true
  },
  {
    id: "infinitus",
    title: "Infinitus'24",
    description: "Led the development of the Infinitus Fest website, attracting 20,000 students with 6,000 registrations.",
    longDescription: "Led the development of the Infinitus Fest website, attracting 20,000 students with 6,000 registrations across 10 events, optimizing for crowd loading. Integrated payment gateway for Cultural and Technical events.",
    technologies: ["Next.js", "Three.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "Razorpay", "Redux", "Framer Motion"],
    achievements: [
      "Attracted 20,000 students with 6,000 registrations across 10 events",
      "Emphasized crowd loading optimization for seamless user experience",
      "Integrated payment gateway for Cultural and Technical events"
    ],
    image: "/images/projects/infinitus/infinitus.jpg",
    github: "https://github.com/achyut21/infinitus24",
    featured: false
  },
  {
    id: "lightning-time",
    title: "Lightning Time",
    description: "A Bitcoin Lightning Network-powered time tracking web app that allows users to check in for work and automatically receive payments in Satoshis.",
    longDescription: "Developed during the MIT BITCOIN EXPO 2025 Hackathon, Lightning Time is a time tracking application that allows users to 'check in' to track their work hours and automatically receive Satoshi (SATs) payments for each hour worked. The app features real-time tracking, automatic Bitcoin payments via the Lightning Network, detailed analytics, and a responsive design for all devices.",
    technologies: ["Bitcoin", "Lightning Network", "LNbits", "Soulbound Tokens", "React", "Vite", "Node.js", "Express", "TailwindCSS", "Ethers.js", "Blockchain"],
    achievements: [
      "Built a real-time time tracking system with automatic Bitcoin payments via Lightning Network",
      "Implemented an admin dashboard for monitoring work time and payment statistics",
      "Developed detailed analytics for visualizing earnings, work patterns, and payment history",
      "Designed a future authentication system using Soulbound Tokens (SBTs) for secure admin access",
      "Created a responsive design that works seamlessly across mobile, tablet, and desktop devices"
    ],
    image: "/images/projects/lightning-time/lightning-time.jpg",
    github: "https://github.com/Achyut21/MIT-LIGHTING-APP",
    liveUrl: "https://devpost.com/software/lightning-time",
    featured: true
  },
  {
    id: "billrewards",
    title: "BillRewards",
    description: "A cashback reward system that incentivizes on-time bill payments with cryptocurrency rewards.",
    longDescription: "Built BillRewards, an innovative system that encourages timely bill payments by rewarding users with cryptocurrency tokens. The platform integrates with payment processors to track bill payments and automatically distributes rewards for on-time payments, helping service providers reduce late payments while offering users tangible benefits.",
    technologies: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "React", "Node.js", "Express", "MongoDB", "Tesseract.js", "OCR Technology", "Blockchain"],
    achievements: [
      "Developed a smart contract-based reward system integrated with multiple payment processors",
      "Created a token distribution mechanism that automatically rewards on-time payments",
      "Implemented an analytics dashboard for tracking payment patterns and reward distributions",
      "Built a secure wallet integration system for claiming and managing reward tokens"
    ],
    image: "/images/projects/billrewards/billrewards.jpg",
    github: "https://github.com/achyut21/billrewards",
    liveUrl: "https://devpost.com/software/billrewards",
    featured: false
  },


];