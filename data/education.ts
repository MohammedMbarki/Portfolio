export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "high-school",
    degree: "10th Grade - Scientific Track",
    institution: "Alwah High School",
    location: "Tangier, Morocco",
    startDate: "September 2024",
    endDate: "Present",
    description: "Focus on Advanced Mathematics and Physics."
  },
  {
    id: "middle-school-brevet",
    degree: "Middle School Diploma (Brevet)",
    institution: "Alwah Middle School",
    location: "Tangier, Morocco",
    startDate: "September 2023",
    endDate: "June 2024",
    gpa: "17.21/20",
    description: "Graduated with High Honors (Mention Très Bien)."
  },
  {
    id: "middle-school-roosevelt",
    degree: "Middle School (7th & 8th Grade)",
    institution: "Roosevelt School",
    location: "Morocco",
    startDate: "September 2021",
    endDate: "June 2023"
  }
];